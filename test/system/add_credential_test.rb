require "application_system_test_case"
require "webauthn/fake_client"

class AddCredentialTest < ApplicationSystemTestCase
  setup do
    User.create!(username: "me", password: "password", password_confirmation: "password")
  end

  test "adding a credential" do
    raw_challenge = SecureRandom.random_bytes(32)
    challenge = WebAuthn.configuration.encoder.encode(raw_challenge)
    fake_client = WebAuthn::FakeClient.new(ENV['WEBAUTHN_ORIGIN'])

    visit root_url

    assert_text "Sign in"

    fill_in "Username", with: "me"
    fill_in "Password", with: "password"

    click_on "Sign In"

    assert_text "Please enable Two-Factor Authentication in the button below:"

    visit new_webauthn_credential_path

    assert_text "Add a security key"

    fake_credentials = fake_client.create(challenge: challenge)
    stub_create(fake_credentials)

    fill_in "webauthn_credential_nickname", with: "USB Key"

    WebAuthn::PublicKeyCredential::CreationOptions.stub_any_instance :raw_challenge, raw_challenge do
      click_on "Add Security Key"

      assert_text "Your Security Keys:"
      assert_text 'USB Key'
    end
  end
end
