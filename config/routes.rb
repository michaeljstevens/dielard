Rails.application.routes.draw do

root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :routes, only: [:create, :destroy, :show, :index]
    resources :exercises, only: [:create, :destroy, :show, :index]
    resources :travel_workouts, only: [:create, :destroy, :show, :index]
    resources :static_workouts, only: [:create, :destroy, :show, :index]
    resources :workout_exercises, only: [:create, :destroy, :show, :index]
  end

end
