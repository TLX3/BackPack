Rails.application.routes.draw do

  root "static_pages#index"
  resources :users, only: [:create, :index, :new, :show, :update]
  resource :session, only: [:create, :destroy, :new]
  resources :static_pages, only: [:index]
  namespace :api, defaults: {format: :json} do
    resources :destinations, only: [:create, :index, :update]
    resources :groups, only: [:index, :show]
    resources :tags, only: [:create, :destroy, :index]
    resources :group_taggings, only: [:index]
    resources :user_taggings, only: [:index]
  end

end
