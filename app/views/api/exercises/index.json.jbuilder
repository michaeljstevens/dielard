json.array!(@exercises) do |exercise|
  json.partial!('api/exercises/exercise', exercise: exercise)
end
