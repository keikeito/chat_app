Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'chat_groups#index'
  resources :users, only: [:edit, :update]
  resources :chat_groups, only: [:index,:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end

end
