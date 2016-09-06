class StaticWorkout < ActiveRecord::Base
  validates :user_id, :date, :calories, :duration, presence: true

  belongs_to :user

  has_many :workout_exercises, dependent: :destroy

  has_many :exercises,
    through: :workout_exercises,
    source: :exercise

end
