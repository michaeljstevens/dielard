class Api::ExercisesController < ApplicationController
  def index
    @exercises = Exercise.where(user_id: current_user.id)
    render "/api/exercises/index"
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      render "api/exercises/show"
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  def destroy
    @exercise = Exercise.find(params[:id])
    if @exercise.destroy
      render "/api/exercises/show"
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  private

  def exercise_params
    params.require(:exercise).permit(:user_id, :title, :description, :muscle_group)
  end
end
