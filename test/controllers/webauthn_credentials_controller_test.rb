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

  private

  def user
    @user ||= User.create!(username: 'alice', password: 'foo')
  end
end
