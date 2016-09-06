class Api::WorkoutExercisesController < ApplicationController
  def index
    @workout_exercises = WorkoutExercise.all
    render "/api/workout_exercises/index"
  end

  def create
    @workout_exercise = WorkoutExercise.new(workout_exercise_params)
    if @workout_exercise.save
      render "api/workout_exercises/show"
    else
      render json: @workout_exercise.errors.full_messages, status: 422
    end
  end

  def destroy
    @workout_exercise = WorkoutExercise.find(params[:id])
    if @workout_exercise.destroy
      render "/api/workout_exercises/show"
    else
      render json: @workout_exercise.errors.full_messages, status: 422
    end
  end

  private

  def workout_exercise_params
    params.require(:workout_exercise).permit(:static_workout_id, :exercise_id, :reps, :sets, :weight)
  end
end
