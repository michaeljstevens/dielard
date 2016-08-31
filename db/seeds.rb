# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: "Jeff Goldblum",
  password: "password",
  profile_picture: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472591120/jeff-goldblum-2016_eedzlh.jpg",
  birthdate: "1952-10-22",
  sex: "Male",
  height: 76,
  weight: 200,
  activity_level: "Moderate"
)

User.create(
  username: "Michael",
  password: "password",
  profile_picture: "http://res.cloudinary.com/dj6gqauyi/image/upload/v1472620693/Photo_on_8-30-16_at_10.14_PM_kfodgi.jpg",
  birthdate: "1990-01-11",
  sex: "Male",
  height: 69,
  weight: 170,
  activity_level: "High"
)
