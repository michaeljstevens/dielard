```json
{
  currentUser: {
    id: 1,
    username: "jeff-goldblum",
    profile_picture: "picture_data",
    description: "Life, ..uh, finds a way",
    birthdate: October 22, 1952,
    sex: "male",
    height: 76,
    weight: 200,
    activity_level: "Lightly Active",
    daily_calories: "2564"
  },
  forms: {
    SignUp: {errors: []},
    Logn: {errors: []},
    ProfileForm: {errors: []},
    RouteForm: {errors: []},
    TravelWorkoutForm: {errors: []},
    StaticWorkoutForm: {errors: []},
    ExercisesForm: {errors: []},
  },
  routes: {
    1: {
      map: "JSON stuff",
      title: "Home to Work",
      desription: "This is a calm route with no hills and little traffic."
    }
  },
  travel_workouts: {
    1: {
      route_id: 1,
      type: "bike",
      date: August 22, 2016,
      start_time: 1:00 PM,
      end_time: 1:30 PM
    }
  },
  static_workouts: {
    1: {
      date: August 22, 2016,
      start_time: 1:00 PM,
      end_time: 1:30 PM
    }
  },
  exercises: {
    1: {
      title: "squat",
      description: "The squat is a fundamental compound exercise that work legs primarily",
      muscle_group: "legs"
    }
  },
  static_workout_exercises (used to get exercises for a selected workout): {
    1: {
      static_workout_id: 3,
      exercise_id: 1,
      sets: 5,
      reps: 5,
      weight: 315
    },
    2: {
      static_workout_id: 3,
      exercise_id: 2,
      sets: 5,
      reps: 10,
      weight: 90
    }
  }
}
```
