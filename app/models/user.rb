# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_picture :string
#  description     :text
#  birthdate       :date
#  sex             :string
#  height          :integer
#  weight          :integer
#  activity_level  :string
#  daily_calories  :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  has_many :routes

  after_initialize :ensure_session_token, :calculate_tdee

  attr_reader :password

  ACTIVITY_CONSTANTS = {
    "None" => 1.2,
    "Light" => 1.375,
    "Moderate" => 1.55,
    "High" => 1.725,
    "Extreme" => 1.9
  }


	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.is_password?(password) ? user : nil
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64(16)
		self.save
		self.session_token
	end


	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end

  def calculate_tdee
    if self.activity_level.nil? || self.sex.nil? || self.weight.nil? || self.height.nil? || self.birthdate.nil?
      return nil
    end
    self.daily_calories = (calculate_bmr * ACTIVITY_CONSTANTS[self.activity_level]).round
  end

  def calculate_bmr
    if self.sex == "Male"
      66 + (6.23 * self.weight) + (12.7 * self.height) - (6.8 * years)
    elsif self.sex == "Female"
      655 + ( 4.35 * self.weight ) + ( 4.7 * self.height ) - ( 4.7 * years)
    end
  end

  def years
    Time.now.year - self.birthdate.year
  end

end
