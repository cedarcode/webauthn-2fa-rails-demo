require 'test_helper'
require "webauthn/fake_client"

class WebauthnCredentialAuthenticationControllerTest < ActionDispatch::IntegrationTest
  test 'new should require initiated login and 2FA enabled' do
    get new_webauthn_credential_authentication_path

    assert_redirected_to new_session_path
  end

  test 'new should require user not authenticated' do
    login_as(user)

    get new_webauthn_credential_authentication_path

    assert_redirected_to root_path
  end

  test 'new renders sucessfully' do
    user = create_user_with_credential
    fake_session = { webauthn_user_id: user.id }

    WebauthnCredentialAuthenticationController.stub_any_instance(:session, fake_session) do
      get new_webauthn_credential_authentication_path

      assert_response :success
    end
  end

  test 'options_for should require initiated login' do
    post options_for_webauthn_credential_authentication_path, params: { format: :json }

    assert_redirected_to new_session_path
  end

  test 'options_for should require user not authenticated' do
    login_as(user)

    post options_for_webauthn_credential_authentication_path, params: { format: :json }

    assert_redirected_to root_path
  end

  test 'create should require initiated login' do
    post webauthn_credential_authentication_path

    assert_redirected_to new_session_path
  end

  test 'create should require user not authenticated' do
    login_as(user)

    post webauthn_credential_authentication_path

    assert_redirected_to root_path
  end

  test 'should initiate credential authorization successfully' do
    user = create_user_with_credential
    fake_session = { webauthn_user_id: user.id }

    WebauthnCredentialAuthenticationController.stub_any_instance(:session, fake_session) do
      post options_for_webauthn_credential_authentication_path, params: { format: :json }

      assert_response :success
    end
  end

  test "successful second factor authentication" do
    raw_challenge = SecureRandom.random_bytes(32)
    challenge = WebAuthn.configuration.encoder.encode(raw_challenge)
    fake_client = WebAuthn::FakeClient.new(ENV["WEBAUTHN_ORIGIN"])
    public_key_credential = fake_client.create(challenge: challenge)
    webauthn_credential = WebAuthn::Credential.from_create(public_key_credential)
    user = create_user_with_credential(webauthn_credential: webauthn_credential)
    fake_session = { webauthn_user_id: user.id }

    WebauthnCredentialAuthenticationController.stub_any_instance(:session, fake_session) do
      WebAuthn::PublicKeyCredential::RequestOptions.stub_any_instance(:raw_challenge, raw_challenge) do
        post options_for_webauthn_credential_authentication_path, params: { format: :json }

        assert_response :success
      end

      public_key_credential = fake_client.get(challenge: challenge)

      post(
        webauthn_credential_authentication_path,
        params: public_key_credential
      )

      assert_response :success
    end
  end

  private

  def user
    @user ||= User.create!(username: 'alice', password: 'foo')
  end
end
