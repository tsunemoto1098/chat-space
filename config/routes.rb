Rails.application.routes.draw do
  devise_for :users
  
  root "groups#index"
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :posts, only: [:index, :create]
  end
end