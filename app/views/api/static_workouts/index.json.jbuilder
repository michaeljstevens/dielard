json.array!(@static_workouts) do |static_workout|
  json.partial!('api/static_workouts/static_workout', static_workout: static_workout)
end
