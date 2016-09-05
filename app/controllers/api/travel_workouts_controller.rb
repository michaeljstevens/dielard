class Api::TravelWorkoutsController < ApplicationController
  def index
    @travel_workouts = TravelWorkout.where(user_id: current_user.id)
    render "/api/travel_workouts/index"
  end

  def create
    @travel_workout = TravelWorkout.new(travel_workout_params)
    if @travel_workout.save
      render "api/travel_workouts/show"
    else
      render json: @travel_workout.errors.full_messages, status: 422
    end
  end

  def destroy
    @travel_workout = TravelWorkout.find(params[:id])
    if @travel_workout.destroy
      render "/api/travel_workouts/show"
    else
      render json: @travel_workout.errors.full_messages, status: 422
    end
  end

  private

  def travel_workout_params
    params.require(:travel_workout).permit(:user_id, :route_id, :date, :notes, :calories)
  end
end
