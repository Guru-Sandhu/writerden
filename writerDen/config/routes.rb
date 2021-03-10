Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get '/users/current', to: "users#current"
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :posts, only: [:index, :create, :update, :show, :destroy] do
      resources :reviews, only: [:create, :destroy]
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
