# == Schema Information
#
# Table name: routes
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  distance      :string           not null
#  duration      :string           not null
#  start_lat     :float            not null
#  start_lng     :float            not null
#  end_lat       :float            not null
#  end_lng       :float            not null
#  activity_type :string
#

class Route < ActiveRecord::Base
  validates :user_id, :title, :description, presence: true

  belongs_to :user
end
