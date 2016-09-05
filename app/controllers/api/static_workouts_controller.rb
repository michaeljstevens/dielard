class Api::StaticWorkoutsController < ApplicationController
  def index
    @static_workouts = StaticWorkout.where(user_id: current_user.id)
    render "/api/static_workouts/index"
  end

  def create
    @static_workout = StaticWorkout.new(static_workout_params)
    if @static_workout.save
      render "api/static_workouts/show"
    else
      render json: @static_workout.errors.full_messages, status: 422
    end
  end

  def destroy
    @static_workout = StaticWorkout.find(params[:id])
    if @static_workout.destroy
      render "/api/static_workouts/show"
    else
      render json: @static_workout.errors.full_messages, status: 422
    end
  end

  private

  def static_workout_params
    params.require(:static_workout).permit(:user_id, :date, :duration, :focus, :calories, :notes)
  end
end
