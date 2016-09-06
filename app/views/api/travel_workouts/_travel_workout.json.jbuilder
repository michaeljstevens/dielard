json.extract!(
  travel_workout,
  :id, :user_id, :route_id, :date, :calories, :notes
)

json.route do
  json.partial! 'api/routes/route', route: travel_workout.route
end
