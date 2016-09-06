import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import ErrorReducer from '../reducers/error_reducer.js';
import UserReducer from '../reducers/user_reducer.js';
import RouteReducer from '../reducers/route_reducer.js';
import ExerciseReducer from '../reducers/exercise_reducer.js';
import TravelWorkoutReducer from '../reducers/travel_workout_reducer.js';
import StaticWorkoutReducer from '../reducers/static_workout_reducer.js';
import WorkoutExerciseReducer from '../reducers/workout_exercise_reducer.js';

const AppReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  routes: RouteReducer,
  exercises: ExerciseReducer,
  travelWorkouts: TravelWorkoutReducer,
  staticWorkouts: StaticWorkoutReducer,
  workoutExercises: WorkoutExerciseReducer
});

const RootReducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined;
  }
  return AppReducer(state, action);
};

export default RootReducer;
