class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      sign_in(user)

      redirect_to root_path
    else
      redirect_to root_path, alert: "Sign in failed. Please verify your username and password."
    end
  end

  def destroy
    sign_out

    redirect_to new_session_path
  end
end
