json.extract!(
  workout_exercise,
  :id, :static_workout_id, :exercise_id, :reps, :sets, :weight
)

json.exercise do
  json.partial! 'api/exercises/exercise', exercise: workout_exercise.exercise
end
