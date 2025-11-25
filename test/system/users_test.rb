require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  test "signing up" do
    visit new_user_url

    assert_text "Create your account"

    fill_in "Username", with: "me"
    fill_in "Password", with: "S3cr3tP@ssw0rd!"
    fill_in "Password confirmation", with: "S3cr3tP@ssw0rd!"

    assert_difference("User.count", 1) do
      click_on "Sign Up"

      assert_text "Signed up successfully"
    end
  end

  test "signing up fails with wrong confirmation" do
    visit new_user_url

    assert_text "Create your account"

    fill_in "Username", with: "me"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password-typo"

    assert_no_difference("User.count") do
      click_on "Sign Up"

      assert_text "Password confirmation does not match"
    end
  end
end
