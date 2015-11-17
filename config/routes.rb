Rails.application.routes.draw do
  root "sessions#new"
  resources :users, only: [:create, :new]
  resource :session, only: [:create, :destroy, :new]
  resources :static_pages, only: [:index]
end
