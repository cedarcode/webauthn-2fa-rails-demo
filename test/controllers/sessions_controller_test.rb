require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test 'user correclty logs in' do
    User.create! username: 'alice', password: 'password'

    post session_path, params: { username: 'alice', password: 'password' }

    assert_redirected_to root_path
  end

  test 'log in fails if user does not exists' do
    post session_path, params: { username: 'alice', password: 'password' }

    assert_redirected_to root_path
  end

  test 'log in fails if password does not match' do
    User.create! username: 'alice', password: 'password'

    post session_path, params: { username: 'alice', password: 'incorrect_password' }

    assert_redirected_to root_path
  end

  test 'user correclty logs out' do
    user = User.create! username: 'alice', password: 'password'
    login_as(user)

    delete session_path, params: { username: 'alice', password: 'password' }

    assert_redirected_to new_session_path
  end
end
