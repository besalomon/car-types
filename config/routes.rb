Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get "/cars", to: 'cars#index'
      get "cars/:id", to: 'cars#show'
      post "cars", to:'cars#create'
      patch "cars/:id", to:'cars#update'
      delete "cars/:id", to:'cars#destroy'
    end
  end

  get "/cars", to:'cars#index'

end
