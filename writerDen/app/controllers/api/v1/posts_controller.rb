class Api::V1::PostsController < ApplicationController

  def index
    posts = Post.all
    render( json: posts, each_serializer: PostSerializer )
  end

  def create
    post = Post.new post_params
    post.user = User.find(session[:user_id])
    if post.save
      render(json: { id: post.id, status: 200 }, status: 200)
    else
      render(json: { message: 'Post failed', error: post.errors.full_messages, status: 422 }, status: 422 )
    end
  end

  def show
    post = Post.find params[:id]
    render json: { post: post, reviews: post.reviews }
  end

  def update
    post = Post.find params[:id]
    if post.update post_params
      render(json: { message: 'Post updated succesfully', status: 200}, status: 200)
    else
      render(json: { message: 'Update post Failed', error: post.errors.full_messages, status: 422 }, status: 422)
    end
  end

  def destroy
    post = Post.find params[:id]
    post.delete
    render(json: { message: 'Your post has been deletd', status: 200 }, status: 200 )
  end

  private
  
  def post_params
    params.require(:post).permit(:body)
  end

end
