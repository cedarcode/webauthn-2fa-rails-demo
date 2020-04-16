class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user =
      User.new(
        username: user_params[:username],
        password: user_params[:password],
        password_confirmation: user_params[:password_confirmation]
      )

    if user.save
      redirect_to root_path, notice: "Signed up successfully"
    else
      redirect_to root_path, alert: "Sign up failed"
    end
  end

  private

  def user_params
    params.require(:user)
  end
end
