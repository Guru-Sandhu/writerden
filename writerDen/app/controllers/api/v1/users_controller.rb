class Api::V1::UsersController < ApplicationController

  def create
    user = User.new user_params
    if user.save
      render({ json: { id: user.id } })
    else
      render({ json: { message: 'Unable to create user', status: 422, error: user.errors.full_messages }}, 422)
    end
  end

  def current
    user_id = session[:user_id]
    userData = User.find user_id
    render({ json: userData })
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :avatar)
  end

end
