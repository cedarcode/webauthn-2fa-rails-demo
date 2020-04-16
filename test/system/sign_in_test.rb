require "application_system_test_case"

class SignInTest < ApplicationSystemTestCase
  setup do
    User.create!(username: "me", password: "password", password_confirmation: "password")
  end

  test "signing in" do
    visit root_url

    fill_in "Username", with: "me"
    fill_in "Password", with: "password"

    click_on "Sign In"

    assert_text "Hello me!"
  end

  test "signing in fails with wrong username" do
    visit root_url

    fill_in "Username", with: "other"
    fill_in "Password", with: "password"

    click_on "Sign In"

    assert_text "Sign in failed. Please verify your username and password."
  end

  test "signing in fails with wrong password" do
    visit root_url

    fill_in "Username", with: "me"
    fill_in "Password", with: "wrong-password"

    click_on "Sign In"

    assert_text "Sign in failed. Please verify your username and password."
  end
end
