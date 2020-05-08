class ApplicationController < ActionController::Base
  helper_method :current_user

  def sign_in(user)
    session[:user_id] = user.id
  end

  def sign_out
    session[:user_id] = nil
    session[:user_authenticated] = nil
  end

  def enforce_authenticated_user
    if !current_user
      redirect_to new_session_path
    elsif current_user.second_factor_enabled? && !user_authenticated?
      redirect_to new_webauthn_credential_authentication_path
    end
  end

  def user_authenticated?
    session[:user_authenticated]
  end

  def current_user
    @current_user ||=
      if session[:user_id]
        User.find_by(id: session[:user_id])
      end
  end
end
