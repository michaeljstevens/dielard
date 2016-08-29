## Component Hierarchy


**AuthFormContainer**
  - AuthForm
  - LoginButton
  - SignUpButton

**ProfileContainer**
  - ProfileIndexItem
  - EditProfileButton

**ProfileFormContainer**
  - ProfileForm
  - SaveChangesButton

**RouteContainer**
  - RouteIndex
    - RouteIndexItem
      - DeleteRouteButton
      - RouteMap

**RouteFormContainer**
  - RouteMap
  - CreateButton

**ExerciseContainer**
  - ExerciseIndex
    - ExerciseIndexItem
    - DeleteExerciseButton

**ExerciseFormContainer**
  - ExerciseForm
  - CreateExerciseButton

**WorkoutFeedContainer**
  - WorkoutFeedIndex
    - StaticWorkoutIndex
      - StaticWorkoutIndexItem
      - DeleteButton
    - TravelWorkoutIndex
      - TravelWorkoutIndexItem
      - DeleteButton
    - TravelStats
    - StaticStats

**StaticWorkoutContainer**
  - StaticWorkoutIndexItem
  - WorkoutExerciseContainer
    - WorkoutExerciseIndex
      - WorkoutExerciseIndexItem
      - WorkoutExerciseStats
  - BacktoFeedButton

**TravelWorkoutContainer**
  - TravelWorkoutIndexItem
  - TravelItemStats
  - BacktoFeedButton

**StaticWorkoutFormContainer**
  - StaticWorkoutForm
  - CreateExerciseButton
  - SaveButton

**TravelWorkoutFormContainer**
  - TravelWorkoutForm
  - CreateRouteButton
  - SaveButton


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "WorkoutFeedIndex" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/users/:id" | "ProfileIndexItem" |
| "/users/:id/edit" | "ProfileFormContainer" |
| "/routes" | "RouteContainer" |
| "/routes/new" | "RouteFormContainer" |
| "/exercises" | "ExercisesContainer" |
| "/exercises/new" | "ExercisesFormContainer" |
| "/static_workouts/:id" | "StaticWorkoutContainer" |
| "/travel_workouts/:id" | "TravelWorkoutContainer" |
| "/static_workouts/new" | "StaticWorkoutFormContainer" |
| "/travel_workouts/new" | "TravelWorkoutFormContainer" |
