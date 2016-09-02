class Route < ActiveRecord::Base
  validates :user_id, :title, :description, presence: true

  belongs_to :user
end
