# StravaClone

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

StravaClone is a web application inspired by Strava. It will be built using Ruby on Rails, React.js and Redux. By the end of Week 9, this app will satisfy the following criteria:

### General Features

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README

## Specific Features

- [ ] User Profile
- [ ] Create Routes
- [ ] Create Workouts
- [ ] Workout Feed and Stats
- [ ] Bonus
  - [ ] Tracking Macros
  - [ ] Friends/Social Feed
  - [ ] Workout Comments
  - [ ] Better Stats

##Design Docs

* [View Wireframes][views]
* [React Components][components]
* [Sample State][sample-state]
* [Redux Architecture][redux-structure]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[sample-state]: docs/sample-state.md
[redux-structure]: docs/redux-structure.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: User Profile and components(1 day)

**Objective** User profiles can be read and updated.

-[ ] Update API for Users (`UsersController`)
-[ ] jBuilder view for Profile
-[ ] User components and respective redux loops
  -[ ] `ProfileIndexItem`
  -[ ] `ProfileForm`
-[ ] Style User components

### Phase 3: Routes Model, API, and components (2 days)

**Objective:** Routes can be created, read, updated and destroyed through the API. Routes belong to relevant exercises.

- [ ] `Route` model
- [ ] CRUD API for Routes (`RoutesController`)
- [ ] jBuilder views for Routes
- Route components and respective redux loops
-[ ] `RouteIndex`
-[ ] `RouteIndexItem`
-[ ] `RouteForm`
-[ ] `RouteMap`
-[ ] Style route components
-[ ] Seed routes

### Phase 4: TravelWorkout and StaticWorkout Models, API, and components(3 days)

**Objective:** TravelWorkout and StaticWorkout can be created, read, updated and destroyed through the API.

-[ ] `TravelWorkout` model
-[ ] `StaticWorkout` model
-[ ] CRUD API for TravelWorkouts (`TravelWorkoutsController`)
-[ ] CRUD API for StaticWorkouts (`StaticWorkoutsController`)
-[ ] jBuilder views for TravelWorkouts
  -[ ] Show
  -[ ] Index
-[ ] jBuilder views for StaticWorkouts
  -[ ] Show
  -[ ] Index
-[ ] TravelWorkout components and respective redux loops
  -[ ] `TravelWorkoutIndexItem`
  -[ ] `TravelWorkoutForm`
-[ ] StaticWorkout components and respective redux loops
  -[ ] `StaticWorkoutIndexItem`
  -[ ] `StaticWorkoutForm`
-[ ] Style TravelWorkout components
-[ ] Style StaticWorkout components
-[ ] Seed TravelWorkouts
-[ ] Seed StaticWorkouts

### Phase 5: WorkoutFeed and Stats(1 day)

**Objective:** WorkoutFeed displays a user's travel and static workouts sorted by date. It should also display stats.

-[ ] WorkoutFeed components and respective redux loops
  -[ ] `WorkoutFeedIndex`
    -[ ] This will combine data from TravelWorkout and StaticWorkout tables, sorting by date.
-[ ] Stats components and respective redux loops
  -[ ] `TravelStats`
  -[ ] `StaticStats`

## Bonus Features(TBD)

### Tracking Macros

**Objective:** Calculate a User's daily macronutrient requirements based on caloric expenditure.

-[ ] Update `User` model to include remaining protein, carbs, and fat
-[ ] Change workout form submission so that after each workout remaining macros are updated based on that workout's caloric footprint
-[ ] Macro components and respective redux loops
  -[ ] `MacroForm`
-[ ] Add remaining macros to Stats in WorkoutFeed
-[ ] Style macro components

### Friends/Social Feed

**Objective:** Users can subscribe to other Users. Users have a feed of other User's Workouts.

-[ ] `Friends` model to join Users to other Users
-[ ] FriendsFeed components and respective redux loops
  -[ ] `FriendsFeedIndex`
    -[ ] This will combine data from TravelWorkout and StaticWorkout tables of all the current user's friends, sorting by date.
-[ ] Seed Friends table
-[ ] Style FriendsFeed components

### Workout Comments

**Objective:** Users can comment on their own and friends workouts

-[ ] `Comment` model
  -[ ] `User` has many Comments
  -[ ] `TravelWorkout` has many Comments
  -[ ] `StaticWorkout` has many Comments
-[ ] CRUD API for Comments (`CommentsController`)
-[ ] Comments components and respective redux loops
  -[ ] `Comments`
-[ ] Seed Comments Table
-[ ] Style Comments components

### Better Stats

**Objective:** Users can see their stats for fixed and custom time ranges

-[ ] Rejigger Stats component
