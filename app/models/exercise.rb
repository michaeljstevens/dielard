class Exercise < ActiveRecord::Base
  validates :user_id, :title, :description, :muscle_group, presence: true

  belongs_to :user
  has_many :workout_exercises, dependent: :destroy
end
