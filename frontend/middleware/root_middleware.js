import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import UserMiddleware from '../middleware/user_middleware.js';
import RouteMiddleware from '../middleware/route_middleware.js';
import ExerciseMiddleware from '../middleware/exercise_middleware.js';
import TravelWorkoutMiddleware from '../middleware/travel_workout_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  RouteMiddleware,
  ExerciseMiddleware,
  TravelWorkoutMiddleware
);

export default RootMiddleware;
