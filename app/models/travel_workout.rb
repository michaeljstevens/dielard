class TravelWorkout < ActiveRecord::Base
  validates :user_id, :route_id, :date, :calories, presence: true

  belongs_to :user
  belongs_to :route
end
