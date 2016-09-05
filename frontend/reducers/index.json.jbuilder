json.array!(@travel_workouts) do |travel_workout|
  json.partial!('api/travel_workouts/travel_workout', travel_workout: travel_workout)
end
