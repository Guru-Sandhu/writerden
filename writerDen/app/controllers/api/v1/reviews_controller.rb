class Api::V1::ReviewsController < ApplicationController

  def create
    post = Post.find params[:post_id]
    review = Review.new params.require(:review).permit(:rating, :body)
    review.post = post
    review.user = User.find session[:user_id]
    if review.save
      render(json: { message: 'Review posted successfully', status: 200 }, status: 200)
    else
      render( json: { message: 'Review post failed', error: review.errors.full_messages, status: 422 }, status: 422)
    end
  end

  def destory
    review = Review.find params[:id]
    review.delete
    render(json: {message: 'review deleted successfully', status: 200})
  end

end
