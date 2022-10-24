require 'test_helper'
require "webauthn/fake_client"

class WebauthnCredentialsControllerTest < ActionDispatch::IntegrationTest
  test 'new should require authentication' do
    get new_webauthn_credential_path
    assert_redirected_to new_session_path

    login_as(user)
    get new_webauthn_credential_path
    assert_response :success
  end

  test 'options should require authentication' do
    post options_for_webauthn_credentials_path, params: { credentials: { nickname: 'USB Key' }, format: :json }

    assert_redirected_to new_session_path
  end

  test 'create should require authentication' do
    post webauthn_credentials_path, params: { credentials: { nickname: 'USB Key' }, format: :json }

    assert_redirected_to new_session_path
  end

  test 'should initiate credential creation successfully' do
    login_as(user)

    post options_for_webauthn_credentials_path, params: { credentials: { nickname: 'USB Key' }, format: :json }

    assert_response :success
  end

  test "should return error if registering existing credential" do
    raw_challenge = SecureRandom.random_bytes(32)
    challenge = WebAuthn.configuration.encoder.encode(raw_challenge)
    login_as(user)

    WebAuthn::PublicKeyCredential::CreationOptions.stub_any_instance(:raw_challenge, raw_challenge) do
      post options_for_webauthn_credentials_path, params: { format: :json }

      assert_response :success
    end

    public_key_credential = WebAuthn::FakeClient.new(ENV["WEBAUTHN_ORIGIN"]).create(challenge: challenge)
    webauthn_credential = WebAuthn::Credential.from_create(public_key_credential)
    create_user_with_credential(credential_nickname: 'USB Key', webauthn_credential: webauthn_credential)

    post(
      webauthn_credentials_path,
      params: { credential_nickname: 'Android Phone' }.merge(public_key_credential)
    )

    assert_response :unprocessable_entity
    assert_equal "Couldn't add your Security Key", response.body
  end

  test 'destroy should require authentication' do
    delete webauthn_credential_path('1')

    assert_redirected_to new_session_path
  end

  test 'destroy should work' do
    raw_registration_challenge = SecureRandom.random_bytes(32)
    registration_challenge = WebAuthn.configuration.encoder.encode(raw_registration_challenge)
    fake_client = WebAuthn::FakeClient.new(ENV["WEBAUTHN_ORIGIN"])
    public_key_credential = fake_client.create(challenge: registration_challenge)
    webauthn_credential = WebAuthn::Credential.from_create(public_key_credential)
    user = create_user_with_credential(webauthn_credential: webauthn_credential)
    login_as(user)

    raw_authentication_challenge = SecureRandom.random_bytes(32)
    authentication_challenge = WebAuthn.configuration.encoder.encode(raw_authentication_challenge)
    WebAuthn::PublicKeyCredential::RequestOptions.stub_any_instance(:raw_challenge, raw_authentication_challenge) do
      post options_for_webauthn_credential_authentication_path, params: { format: :json }
    end
    public_key_credential = fake_client.get(challenge: authentication_challenge)
    post(webauthn_credential_authentication_path, params: public_key_credential)

    delete webauthn_credential_path(user.webauthn_credentials.first.id)

    assert_redirected_to root_path
    assert_empty user.reload.webauthn_credentials
  end

  private

  def user
    @user ||= User.create!(username: 'alice', password: 'foo')
  end
end
