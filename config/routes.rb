Rails.application.routes.draw do

  # user's routes
  get "/signup", to: "users#new"
  get "/profile", to: "users#show"
  resources :users, only: [:create]

  #sessions routes
  get "/login", to: "sessions#new"
  get "logout", to: "sessions#destroy"
  resources :sessions, only: [:create]

  #recipe's routes
  resources :recipes, except: [:index]

  #root route
  root "recipes#index"

  
end
      # rake routes
#    Prefix Verb   URI Pattern                 Controller#Action
#      signup GET    /signup(.:format)           users#new
#     profile GET    /profile(.:format)          users#show
#       users POST   /users(.:format)            users#create
#       login GET    /login(.:format)            sessions#new
#      logout GET    /logout(.:format)           sessions#destroy
#    sessions POST   /sessions(.:format)         sessions#create
#     recipes GET    /recipes(.:format)          recipes#index
#             POST   /recipes(.:format)          recipes#create
#  new_recipe GET    /recipes/new(.:format)      recipes#new
# edit_recipe GET    /recipes/:id/edit(.:format) recipes#edit
#      recipe GET    /recipes/:id(.:format)      recipes#show
#             PATCH  /recipes/:id(.:format)      recipes#update
#             PUT    /recipes/:id(.:format)      recipes#update
#             DELETE /recipes/:id(.:format)      recipes#destroy
