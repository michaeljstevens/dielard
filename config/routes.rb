Rails.application.routes.draw do

root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
  end

end
