Rails.application.routes.draw do

  namespace :api do
  get 'tags/index'
  end

  namespace :api do
  get 'groups/index'
  end

  namespace :api do
  get 'groups/show'
  end

  namespace :api do
  get 'destinations/create'
  end

  namespace :api do
  get 'destinations/index'
  end

  namespace :api do
  get 'destinations/show'
  end

  namespace :api do
  get 'destinations/update'
  end
  
  root "static_pages#index"
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]
  resources :static_pages, only: [:index]
  namespace :api, defaults: {format: :json} do
    resources :destinations, only: [:create, :index, :show, :update]
    resources :groups, only: [:index, :show]
    resources :tags, only: [:index]
    resources :group_taggings, only: [:index]
    resources :user_taggings, only: [:index]
  end
end
