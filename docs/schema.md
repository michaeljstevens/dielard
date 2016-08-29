# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_picture | attachment|
description     | text      |
birthdate       | date      |
sex             | string    | (for calculating calories)
height          | integer   |
weight          | integer   |
activity_level  | string    |
daily_calories  | integer   |

## routes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, foreign_key
map             | JSON      | not null
title           | string    | not null
description     | text      | not null

## travel_workout
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, foreign_key
route_id        | integer   | not null, indexed, foreign_key
type            | string    | not null (bike or run)
date            | date      | not null
start_time      | date      | not null
end_time        | date      | not null

## static_workout
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, foreign_key
date            | date      | not null
start_time      | date      | not null
end_time        | date      | not null

## exercises
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, foreign_key
title           | string    | not null
description     | text      | not null
muscle_group    | string    | not null

##workout_exercise
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
static_workout_id      | integer   | not null, indexed, foreign_key
exercise_id     | integer   | not null, indexed, foreign_key
sets            | integer   | not null
reps            | integer   | not null
weight          | integer   | not null
