# takeupless

[takeupless live][heroku]

[heroku]: http://www.takeupless.space

takeupless is a single page full-stack web application that was inspired by Strava, but expands on its functionality by tracking lifting and walking in addition to biking and running. takeupless was built using PostgreSQL, Rails, React, and Redux, and uses the Google Maps and Charts APIs as well as Cloudinary.

## Features & Implementation

### Login/Sign Up

<img align="center" src="docs/Screenshots/Login.png" height="300px" style="display: block; "/>

<img align="center" src="docs/Screenshots/SignUp.png" height="300px" style="display: block; "/>

Users are prompted to login or sign up upon visiting the site. A demo login is provided. Users are initialized in the database with a username, password-digest(encrypted with bcrypt), and unique session-token. Users can add other information later to their profile upon update.

### User Profile/Edit/Dashboard

<img align="center" src="docs/Screenshots/Profile-show.png" width="700px" height="225px" style="display: block; "/>

Upon login, users are directed to the dashboard, which contains profile information, his or her most recent workout, and stats about his or her workouts(uses Google Charts API).

<img align="center" src="docs/Screenshots/latest_workout.png" height="300px" style="display: block; "/>

<img align="center" src="docs/Screenshots/stat.png" height="300px" style="display: block; "/>

Users can click the update profile button to add or update information and change profile picture (uses Cloudinary). When a profile is updated, if age, gender, weight, activity level, and height are all available, the program will calculate the user's estimated daily caloric expenditure.

<img align="center" src="docs/Screenshots/Profile-edit.png" height="300px" style="display: block; "/>

### Route Creation

<img align="center" src="docs/Screenshots/route-builder.png" height="300px" style="display: block; "/>

By clicking on the plus in the top right corner, users are able to create new routes. Each walking/running/biking workout must have a route. This features relies on the Google Maps API(including directions and places). The user can click on two points on the map (or search in the searchbox) and Google Maps will draw a route. The user can then click "Create Route" and a modal will appear which allows the user to add a name and description and submit the route. Since Google doesn't have a built in running type, I calculated the estimated duration for running and biking based on Google's walking route estimation.

<img align="center" src="docs/Screenshots/route-submit.png" height="300px" style="display: block; "/>

### Exercise Creation

<img align="center" src="docs/Screenshots/create-exercise.png" height="300px" style="display: block; "/>

By clicking on the plus in the top right corner, users are able to create new exercises. Each lifting workout can have many exercises through a join table called workout_exercises. Exercises must have a name, description and associated muscle group.


### Workout Creation

<img align="center" src="docs/Screenshots/create-workout-bar.png" height="100px" style="display: block; "/>

There are two basic types of workouts: Travel Workouts and Static Workouts. Travel workouts include walking, running, and biking. Static workouts including lifting. Each travel workout must have a route and each static workout may have workout_exercises.

#### Travel Workouts

<img align="center" src="docs/Screenshots/create-travel-workout.png" height="300px" style="display: block; "/>

To submit a travel workout, the Walk, Run, or Bike tab must be selected. The user can then add a date, optional notes, and a route and press "Create".

#### Static Workouts

<img align="center" src="docs/Screenshots/create-static-workout.png" height="300px" style="display: block; "/>

To submit a static workout, the Lift tab must be selected. The user can then add a date, optional notes, and a duration. Once the user clicks "Create", the workout is submitted, and returned to the form as a prop. A dropdown box will appear with all the user's exercises. Each time an exercise is selected, it will appear below. A user can add sets, reps, and weight to the exercise. When a user clicks "Add", a workout_exercise object is added to a list. When the user clicks "Done", all the workout_exercises in the list are submitted to the database with the respective exercise and Static Workout from the props.

### Feeds

The application contains three feeds for workouts, routes, and exercises. They can be accessed by clicking their respective tabs in the navbar.

<img align="center" src="docs/Screenshots/my-header.png" height="75px" style="display: block; "/>

### Workout Feed

<img align="center" src="docs/Screenshots/workouts-all.png" height="300px" style="display: block; "/>

By clicking the "my workouts" tab in the navbar, users can see all their workouts sorted by date. The page displays the user's first 10 workouts, with the option to move to the next or previous page at the bottom. By using the dropdown menu at the top, users can choose to see only their walk/run/bike/lift type workouts. Users can delete workouts from this page.

<img align="center" src="docs/Screenshots/workouts-filtered.png" height="300px" style="display: block; "/>

<img align="center" src="docs/Screenshots/next-prev.png" height="100px" style="display: block; "/>

### Route Feed

<img align="center" src="docs/Screenshots/routes-all.png" height="300px" style="display: block; "/>

By clicking the "my routes" tab in the navbar, users can see all their routes. The page displays the user's first 10 routes, with the option to move to the next or previous page at the bottom. By using the dropdown menu at the top, users can choose to see only their walk/run/bike type routes. Users can delete routes from this page.

<img align="center" src="docs/Screenshots/routes-filtered.png" height="300px" style="display: block; "/>

<img align="center" src="docs/Screenshots/next-prev.png" height="100px" style="display: block; "/>

### Exercise Feed

<img align="center" src="docs/Screenshots/exercises-all.png" height="300px" style="display: block; "/>

By clicking the "my exercises" tab in the navbar, users can see all their exercises. The page displays the user's first 10 exercises, with the option to move to the next or previous page at the bottom. By using the dropdown menu at the top, users can choose to filter their exercises by muscle group. Users can delete exercises from this page.

<img align="center" src="docs/Screenshots/exercises-filtered.png" height="300px" style="display: block; "/>

<img align="center" src="docs/Screenshots/next-prev.png" height="100px" style="display: block; "/>
