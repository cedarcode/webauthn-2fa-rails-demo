class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      if user.second_factor_enabled?
        session[:webauthn_user_id] = user.id

        redirect_to new_webauthn_credential_authentication_path
      else
        sign_in(user)

        redirect_to root_path
      end
    else
      redirect_to root_path, alert: "Sign in failed. Please verify your username and password."
    end
  end

  def destroy
    sign_out

    redirect_to new_session_path
  end
end
