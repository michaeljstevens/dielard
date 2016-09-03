# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `LoginForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## User Cycles

### User API Request Actions
  * `updateUser`
    0. invoked from ProfileIndexItem edit button onClick
    0. PATCH api/users/:id
    0. receiveCurrentUser is success callback

## Route Cycles

### Route API Request Actions
* `fetchAllRoutes`
  0. invoked from RoutesIndex componentDidMount and new travelworkout combo box
  0. GET api/routes
  0. receiveAllRoutes is the success callback
* `createRoute`
  0. invoked from RouteForm create button onClick
  0. POST api/routes
  0. receiveSingleRoute is success callback
* `destroyRoute`
  0. invoked from RoutesIndex delete route button onClick
  0. DELETE api/routes/:id
  0. removeRoute is the success callback

### Route API Response Actions
* `receiveAllRoutes`
  0. invoked from an API callback
  0. the Route reducer updates `routes` in the application's state
* `receiveSingleRoute`
  0. invoked from an API callback
  0. the Route reducer updates `routes[id]` in the application's state
* `removeRoute`
  0. invoked from an API callback
  0. the Route reducer removes `routes[id]` from the application's state

## TravelWorkout Cycles

### TravelWorkout API Request Actions
* `fetchAllTravelWorkouts`
  0. invoked from WorkoutFeedIndex componentDidMount
  0. GET api/travel_workouts
  0. receiveAllTravelWorkouts is the success callback
* `fetchSingleTravelWorkout`
  0. invoked from WorkoutFeedIndex TravelWorkoutIndexItem onClick
  0. GET api/travel_workouts/:id
  0. receiveSingleTravelWorkouts is the success callback
* `createTravelWorkout`
  0. invoked from TravelWorkoutForm save button onClick
  0. POST api/travel_workouts
  0. receiveSingleTravelWorkouts is the success callback
* `destroyTravelWorkout`
  0. invoked from WorkoutFeedIndex delete button onClick
  0. DELETE api/travel_workouts/:id
  0. removeTravelWorkout is the success callback

### TravelWorkout API Response Actions
* `receiveAllTravelWorkouts`
  0. invoked from an API callback
  0. the Route reducer updates `travel_workouts` in the application's state
* `receiveSingleTravelWorkout`
  0. invoked from an API callback
  0. the Route reducer updates `travel_workouts[id]` in the application's state
* `removeTravelWorkout`
  0. invoked from an API callback
  0. the Route reducer removes `travel_workouts[id]` from the application's state

## StaticWorkout Cycles

### StaticWorkout API Request Actions
* `fetchAllStaticWorkouts`
  0. invoked from WorkoutFeedIndex componentDidMount
  0. GET api/static_workouts
  0. receiveAllStaticWorkouts is the success callback
* `fetchSingleStaticWorkout`
  0. invoked from WorkoutFeedIndex StaticWorkoutIndexItem onClick
  0. GET api/static_workouts/:id
  0. receiveSingleStaticWorkout is the success callback
* `createStaticWorkout`
  0. invoked from StaticWorkoutForm save button onClick
  0. POST api/static_workouts
  0. receiveSingleStaticWorkouts is the success callback
* `destroyStaticWorkout`
  0. invoked from WorkoutFeedIndex delete button onClick
  0. DELETE api/static_workouts/:id
  0. removeStaticWorkout is the success callback

### StaticWorkout API Response Actions
* `receiveAllStaticWorkouts`
  0. invoked from an API callback
  0. the Route reducer updates `static_workouts` in the application's state
* `receiveSingleStaticWorkout`
  0. invoked from an API callback
  0. the Route reducer updates `static_workouts[id]` in the application's state
* `removeStaticWorkout`
  0. invoked from an API callback
  0. the Route reducer removes `static_workouts[id]` from the application's state

## Exercise Cycles

### Exercise API Request Actions
* `fetchAllExercises`
  0. invoked from ExerciseIndex componentDidMount
  0. GET api/exercises
  0. receiveAllExercises is the success callback
* `createExercise`
  0. invoked from ExerciseForm create exercise button onClick
  0. POST api/exercises
  0. receiveSingleExercise is the success callback
* `destroyExercise`
  0. invoked from ExerciseIndex delete button onClick
  0. DELETE api/exercises
  0. removeExercise is the success callback

### Exercise API Response Actions
* `receiveAllExercises`
  0. invoked from an API callback
  0. the Route reducer updates `exercises` in the application's state
* `receiveSingleExercise`
  0. invoked from an API callback
  0. the Route reducer updates `exercises[id]` in the application's state
* `removeExercise`
  0. invoked from an API callback
  0. the Route reducer removes `exercises[id]` from the application's state

## WorkoutExercise Cycles

### WorkoutExercise API Request Actions
* `fetchAllWorkoutExercises`
  0. invoked from ExerciseIndex componentDidMount
  0. GET api/exercises
  0. receiveAllExercises is the success callback
* `createWorkoutExercise`
  0. invoked from StaticWorkoutForm save button onClick
  0. POST api/static_workout_exercises
  0. receiveSingleWorkoutExercise is the success callback
* `destroyWorkoutExercise`
  0. invoked from WorkoutFeedIndex delete button onClick
  0. DELETE api/static_workout_exercises/:id
  0. removeWorkoutExercise is the success callback

### WorkoutExercise API Response Actions
* `receiveAllWorkoutExercises`
  0. invoked from an API callback
  0. the Route reducer updates `static_workout_exercises` in the application's state
* `removeWorkoutExercise`
  0. invoked from an API callback
  0. the Route reducer updates `static_workout_exercises[id]` in the application's state
* `receiveSingleWorkoutExercise`
  0. invoked from an API callback
  0. the WorkoutExercise reducer removes `workout_exercise[id]` from the application's state
