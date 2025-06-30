require "application_system_test_case"
require "webauthn/fake_client"

class SignInTest < ApplicationSystemTestCase
  setup do
    User.create!(username: "me", password: "password", password_confirmation: "password")
  end

  test "signing in" do
    visit root_url

    assert_text "Sign in"

    fill_in "username", with: "me"
    fill_in "password", with: "password"

    click_on "Sign In"

    assert_text "Please enable Two-Factor Authentication in the button below:"
  end

  test "signing in fails with wrong username" do
    visit root_url

    assert_text "Sign in"

    fill_in "username", with: "other"
    fill_in "password", with: "password"

    click_on "Sign In"

    assert_text "Sign in failed. Please verify your username and password."
  end

  test "signing in fails with wrong password" do
    visit root_url

    assert_text "Sign in"

    fill_in "username", with: "me"
    fill_in "password", with: "wrong-password"

    click_on "Sign In"

    assert_text "Sign in failed. Please verify your username and password."
  end

  test 'sign in with 2FA enabled' do
    raw_challenge = SecureRandom.random_bytes(32)
    challenge = WebAuthn.configuration.encoder.encode(raw_challenge)
    fake_client = WebAuthn::FakeClient.new(ENV['WEBAUTHN_ORIGIN'])
    public_key_credential = fake_client.create(challenge: challenge)
    webauthn_credential = WebAuthn::Credential.from_create(public_key_credential)
    create_user_with_credential(username: "other",
                                password: "password",
                                webauthn_credential: webauthn_credential)

    visit new_session_path

    assert_text "Sign in"

    fill_in "username", with: "other"
    fill_in "password", with: "password"

    click_on "Sign In"
    assert_button "Use Security Key"

    fake_assertion = fake_client.get(challenge: challenge)
    stub_get(fake_assertion)

    WebAuthn::PublicKeyCredential::RequestOptions.stub_any_instance :raw_challenge, raw_challenge do
      click_on "Use Security Key"

      assert_text "Your Security Keys:"
      assert_text 'USB Key'
    end
  end
end
