json.array!(@workout_exercises) do |workout_exercise|
  json.partial!('api/workout_exercises/workout_exercise', workout_exercise: workout_exercise)
end
