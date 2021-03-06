class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render( json: {  id: user.id, status: 200, message: 'User signed in' }, status: 200 )
    else
        render( json: { status: 404, message: "you failed to log in" }, status: 404 )
    end
  end

  def destroy
    session[:user_id] = nil
    render( json: { status: 200, message: 'Signed out' }, status: 200 )
  end
end
