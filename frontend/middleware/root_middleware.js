import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import UserMiddleware from '../middleware/user_middleware.js';
import RouteMiddleware from '../middleware/route_middleware.js';
import ExerciseMiddleware from '../middleware/exercise_middleware.js';
import TravelWorkoutMiddleware from '../middleware/travel_workout_middleware.js';
import StaticWorkoutMiddleware from '../middleware/static_workout_middleware.js';
import WorkoutExerciseMiddleware from '../middleware/workout_exercise_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  RouteMiddleware,
  ExerciseMiddleware,
  TravelWorkoutMiddleware,
  StaticWorkoutMiddleware,
  WorkoutExerciseMiddleware
);

export default RootMiddleware;
