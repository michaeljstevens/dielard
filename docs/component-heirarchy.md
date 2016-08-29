## Component Hierarchy

**WorkoutFeedContainer**
  - WorkoutFeedIndex

**AuthFormContainer**
  - AuthForm

**ProfileContainer**
  - ProfileIndexItem
  - ProfileForm

**RouteContainer**
  - RouteIndex
  - RouteIndexItem
  - RouteForm
  - RouteMap

**TravelWorkoutContainer**

**StaticWorkoutContainer**

**ExercisesContainer**





## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "WorkoutFeedIndex" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/users/:id" | "ProfileIndexItem" |
| "/users/:id/edit" | "ProfileForm" |
| "/routes" | "RouteIndex" |
| "/routes/:id" | "RouteIndexItem" |
| "/routes/:id/edit" | "RouteForm" |
