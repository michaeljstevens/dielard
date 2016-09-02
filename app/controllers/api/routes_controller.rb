class Api::RoutesController < ApplicationController

  def create
    @route = Route.new(route_params)
    if @route.save
      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  private

  def route_params
    params.require(:route).permit(:user_id, :title, :description, :distance, :duration, :start_lat, :start_lng, :end_lat, :end_lng)
  end

end
