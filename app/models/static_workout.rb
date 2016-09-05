class StaticWorkout < ActiveRecord::Base
  validates :user_id, :date, :calories, :duration presence: true

  belongs_to :user
end
