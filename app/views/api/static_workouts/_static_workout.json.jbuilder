json.extract!(
  static_workout,
  :id, :user_id, :focus, :duration, :date, :calories, :notes
)

json.workout_exercises do
  json.array!(static_workout.workout_exercises) do |workout_exercise|
    json.partial! 'api/workout_exercises/workout_exercise', workout_exercise: workout_exercise
  end
end
