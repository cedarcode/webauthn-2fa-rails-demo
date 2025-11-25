require "application_system_test_case"

class SignInTest < ApplicationSystemTestCase
  setup do
    @user = User.create!(
      username: "me",
      password: "S3cr3tP@ssw0rd!",
      password_confirmation: "S3cr3tP@ssw0rd!",
      webauthn_id: WebAuthn.configuration.encoder.encode(SecureRandom.random_bytes(64))
    )

    @authenticator = add_virtual_authenticator
  end

  def teardown
    @authenticator.remove!
  end

  test "signing in" do
    visit root_url

    assert_text "Sign in"

    fill_in "Username", with: "me"
    fill_in "Password", with: "S3cr3tP@ssw0rd!"

    click_on "Sign In"

    assert_text "Please enable Two-Factor Authentication in the button below:"
  end

  test "signing in fails with wrong username" do
    visit root_url

    assert_text "Sign in"

    fill_in "Username", with: "other"
    fill_in "Password", with: "password"

    click_on "Sign In"

    assert_text "Sign in failed. Please verify your username and password."
  end

  test "signing in fails with wrong password" do
    visit root_url

    assert_text "Sign in"

    fill_in "Username", with: "me"
    fill_in "Password", with: "wrong-password"

    click_on "Sign In"

    assert_text "Sign in failed. Please verify your username and password."
  end

  test 'sign in with 2FA enabled' do
    add_credential_to_authenticator(@authenticator, @user, nickname: 'USB Key')

    visit new_session_path

    assert_text "Sign in"

    fill_in "Username", with: "me"
    fill_in "Password", with: "S3cr3tP@ssw0rd!"

    click_on "Sign In"
    assert_button "Use Security Key"

    click_on "Use Security Key"

    assert_text "Your Security Keys:"
    assert_text 'USB Key'
  end
end
