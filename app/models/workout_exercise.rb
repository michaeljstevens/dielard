class WorkoutExercise < ActiveRecord::Base
  validates :static_workout_id, :exercise_id, :sets, :reps, :weight, presence: true;

  belongs_to :static_workout
  belongs_to :exercise
end
