require "application_system_test_case"

class AddCredentialTest < ApplicationSystemTestCase
  setup do
    User.create!(username: "me", password: "S3cr3tP@ssw0rd!", password_confirmation: "S3cr3tP@ssw0rd!")

    @authenticator = add_virtual_authenticator
  end

  def teardown
    @authenticator.remove!
  end

  test "adding a credential" do
    visit root_url

    assert_text "Sign in"

    fill_in "Username", with: "me"
    fill_in "Password", with: "S3cr3tP@ssw0rd!"

    click_on "Sign In"

    assert_text "Please enable Two-Factor Authentication in the button below:"

    visit new_webauthn_credential_path

    assert_text "Add a security key"

    fill_in "webauthn_credential_nickname", with: "USB Key"

    click_on "Add Security Key"

    assert_text "Your Security Keys:"
    assert_text 'USB Key'
  end
end
