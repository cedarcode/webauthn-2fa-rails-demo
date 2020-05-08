require 'test_helper'
require "webauthn/fake_client"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test 'index should require authentication' do
    get root_path
    assert_redirected_to new_session_path

    login_as(user)
    get root_path
    assert_response :success
  end

  test "home should show button to enable 2FA if user hasn't added security keys" do
    login_as(user)

    get root_path

    assert_response :success
    assert_match 'Please enable Two-Factor Authentication in the button below:', response.body
    assert_select 'input[type="submit"][value="Enable 2FA"]'
  end

  test "home should list user's security keys if present" do
    raw_challenge = SecureRandom.random_bytes(32)
    challenge = WebAuthn.configuration.encoder.encode(raw_challenge)
    public_key_credential = WebAuthn::FakeClient.new(ENV["WEBAUTHN_ORIGIN"]).create(challenge: challenge)
    webauthn_credential = WebAuthn::Credential.from_create(public_key_credential)
    user = create_user_with_credential(credential_nickname: 'USB Key', webauthn_credential: webauthn_credential)
    login_as(user)

    ApplicationController.stub_any_instance(:user_authenticated?, true) do
      get root_path

      assert_response :success
      assert_match 'Your security key:', response.body
      assert_match 'USB Key', response.body
      assert_match webauthn_credential.id, response.body
    end
  end

  private

  def user
    @user ||= User.create!(username: 'alice', password: 'foo')
  end
end
