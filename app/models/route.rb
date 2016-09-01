class Route < ActiveRecord::Base
  validates :user_id, :map, :title, :description, presence: true

  belongs_to :user
end
