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
  profile_picture: "http://res.cloudinary.com/dj6gqauyi/image/upload/w_1200,h_1200,c_crop,g_face,r_max/w_200/v1472591120/jeff-goldblum-2016_eedzlh.jpg",
  birthdate: "1952-10-22",
  sex: "Male",
  height: 76,
  weight: 200,
  activity_level: "Moderate"
)

User.create(
  username: "Michael",
  password: "password",
  profile_picture: "http://res.cloudinary.com/dj6gqauyi/image/upload/w_1200,h_1200,c_crop,g_face,r_max/w_200/v1472620693/Photo_on_8-30-16_at_10.14_PM_kfodgi.jpg",
  birthdate: "1990-01-11",
  sex: "Male",
  height: 69,
  weight: 170,
  activity_level: "High"
)



Exercise.create(
  user_id: 1,
  title: "Squat",
  description: "With a barbell resting on your traps, squat down until your hip joint breaks parallel with your knee",
  muscle_group: "Legs"
)
Exercise.create(
  user_id: 1,
  title: "Bench Press",
  description: "Lying on a bench, move the barbell from a locked out position, to your chest, and back to lockout",
  muscle_group: "Chest"
)
Exercise.create(
  user_id: 1,
  title: "Deadlift",
  description: "Keeping your back straight, lift the barbell off the floor until you're standing up straight",
  muscle_group: "Back"
)
Exercise.create(
  user_id: 1,
  title: "Barbell Curl",
  description: "Move your arm from an extended to flexed position trying not to swing",
  muscle_group: "Biceps"
)
Exercise.create(
  user_id: 1,
  title: "Skull Crusher",
  description: "Keeping your shoulder joint immobile,
  move a barbell from behind your head with your arms in a flexed position to an extended position",
  muscle_group: "Triceps"
)
Exercise.create(
  user_id: 1,
  title: "Overhead Press",
  description: "Without using your legs, push the barbell overhead in a straight line",
  muscle_group: "Shoulders"
)
Exercise.create(
  user_id: 1,
  title: "Plank",
  description: "Keeping your body rigid, rest on your toes and forearms for a fixed amount of time",
  muscle_group: "Core"
)
Exercise.create(
  user_id: 1,
  title: "Dumbbell Romanian Deadlift",
  description: "Keeping your legs straight, take a dumbbell in each hand and reach toward the floor until you feel a stretch in your hamstrings",
  muscle_group: "Glutes"
)
Exercise.create(
  user_id: 1,
  title: "Kettlebell Swing",
  description: "Swing a kettlebell from between your legs until your arms are parallel to the ground for a fixed period of time",
  muscle_group: "Other"
)
