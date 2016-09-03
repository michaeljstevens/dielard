class Api::RoutesController < ApplicationController

  def index
    @routes = Route.where(user_id: current_user.id)
    render "/api/routes/index"
  end

  def create
    @route = Route.new(route_params)
    if @route.save
      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def destroy
    @route = Route.find(params[:id])
    if @route.destroy
      render "/api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  private

  def route_params
    params.require(:route).permit(:user_id, :activity_type, :title, :description, :distance, :duration, :start_lat, :start_lng, :end_lat, :end_lng)
  end

end
