Rails.application.routes.draw do
  resources :properties
  resources :agents
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :admins
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
