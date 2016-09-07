# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: "Jeff Goldblum",
  description: "Life uh... finds a way",
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

Route.create(
  user_id: 1,
  title: "Geary Stroll",
  description: "This is a nice easy walk down Geary. Watch out for traffic.",
  distance: "2.5 mi",
  duration: "52 mins",
  start_lat: 37.7812980237819,
  start_lng: -122.469663619995,
  end_lat: 37.7867247618612,
  end_lng: -122.426404953003,
  activity_type: "WALKING"
)

Route.create(
  user_id: 1,
  title: "Beach to Beach",
  description: "Ride all the way through San Francisco. Start on Fulton, then go on Market. Best in the morning and evening to avoid heavy traffic.",
  distance: "7.0 mi",
  duration: "30 mins",
  start_lat: 37.7704433522854,
  start_lng: -122.509660720825,
  end_lat: 37.7958136554324,
  end_lng: -122.395334243774,
  activity_type: "BICYCLING"
)

Route.create(
  user_id: 1,
  title: "Presidio Jog",
  description: "This is a beautiful jog starting at Sea Cliff and going all the way through the historic Presidio",
  distance: "3.6 mi",
  duration: "40 mins",
  start_lat: 37.7856394461224,
  start_lng: -122.499017715454,
  end_lat: 37.8013749642529,
  end_lng: -122.450609207153,
  activity_type: "RUNNING"
)

Route.create(
  user_id: 1,
  title: "Walk from Sausalito to Marin",
  description: "A moderately difficult but enjoyable walk from Sausalito to Marin on Bridgeway!",
  distance: "2.0 mi",
  duration: "39 mins",
  start_lat: 37.8581848202795,
  start_lng: -122.484211921692,
  end_lat: 37.8687555724115,
  end_lng: -122.509188652039,
  activity_type: "WALKING"
)

Route.create(
  user_id: 1,
  title: "Run through Golden Gate Park",
  description: "Run on the edge of golden gate park. Great views and tame traffic. Highly recommended.",
  distance: "3.3 mi",
  duration: "38 mins",
  start_lat: 37.7705111989314,
  start_lng: -122.510733604431,
  end_lat: 37.7701041181213,
  end_lng: -122.453742027283,
  activity_type: "RUNNING"
)

Route.create(
  user_id: 1,
  title: "Bike from Daly City to Northbeach",
  description: "This is a tough one! Recommended for experienced bikers only.",
  distance: "9.4 mi",
  duration: "39 mins",
  start_lat: 37.6922426823598,
  start_lng: -122.469577789307,
  end_lat: 37.8054439493427,
  end_lng: -122.410182952881,
  activity_type: "BICYCLING"
)

Route.create(
  user_id: 1,
  title: "Beautiful Hike",
  description: "This is a great hike through Wildcat Canyon Regional Park. Don't forget to bring water.",
  distance: "3.8 mi",
  duration: "83 mins",
  start_lat: 37.9219928311869,
  start_lng: -122.281093597412,
  end_lat: 37.9534023478249,
  end_lng: -122.307186126709,
  activity_type: "WALKING"
)

Route.create(
  user_id: 1,
  title: "San Francisco to San Mateo",
  description: "Bike all the way from San Francisco to San Mateo and enjoy ocean views along the way!",
  distance: "18.9 mi",
  duration: "79 mins",
  start_lat: 37.7680008315676,
  start_lng: -122.430610656738,
  end_lat: 37.5549207185941,
  end_lng: -122.322807312012,
  activity_type: "BICYCLING"
)

Route.create(
  user_id: 1,
  title: "World's Greatest Run",
  description: "More than 10k run from beach to beach with ocean views along the way. Great run!",
  distance: "6.4 mi",
  duration: "77 mins",
  start_lat: 37.9005941847347,
  start_lng: -122.64063835144,
  end_lat: 37.8603533033011,
  end_lng: -122.581415176392,
  activity_type: "RUNNING"
)

Route.create(
  user_id: 1,
  title: "Short Napa Walk",
  description: "Short walk through downtown Napa. Great coffee along the way. Also great for beginners.",
  distance: "0.9 mi",
  duration: "18 mins",
  start_lat: 38.2973466159119,
  start_lng: -122.285256385803,
  end_lat: 38.2971445345516,
  end_lng: -122.300126552582,
  activity_type: "WALKING"
)

Route.create(
  user_id: 1,
  title: "Rural run",
  description: "Run through rural California and get away from the big city.",
  distance: "5.9 mi",
  duration: "65 mins",
  start_lat: 37.878240853844,
  start_lng: -122.180585861206,
  end_lat: 37.8215820485076,
  end_lng: -122.133550643921,
  activity_type: "RUNNING"
)

Route.create(
  user_id: 1,
  title: "Run Forrest Run!",
  description: "Emulate the epic run from Forrest Gump! Don't forget your toothbrush on this one...",
  distance: "2,857 mi",
  duration: "31220 mins",
  start_lat: 45.089035564831,
  start_lng: -123.5302734375,
  end_lat: 40.8470603560712,
  end_lng: -74.3994140625,
  activity_type: "RUNNING"
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
