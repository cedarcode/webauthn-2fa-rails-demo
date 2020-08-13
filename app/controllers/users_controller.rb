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
      redirect_to root_path, notice: "Signed up successfully. Please log in to continue."
    else
      redirect_to new_user_path, alert: user.errors.full_messages.join('. ')
    end
  end

  private

  def user_params
    params.require(:user)
  end
end
