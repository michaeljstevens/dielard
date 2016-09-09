import { StaticWorkoutConstants } from '../actions/static_workout_actions.js';
import { merge } from 'lodash';

const StaticWorkoutReducer = function(state = {}, action){
  switch(action.type){
    case StaticWorkoutConstants.RECEIVE_STATIC_WORKOUTS:
      const allStaticWorkouts = action.staticWorkouts;
      return merge({}, state, {allStaticWorkouts});
    case StaticWorkoutConstants.RECEIVE_SINGLE_STATIC_WORKOUT:
      const staticWorkout = action.staticWorkout;
      return merge({}, state, {staticWorkout});
    case StaticWorkoutConstants.REMOVE_STATIC_WORKOUT:
      const badStaticWorkout = action.staticWorkout;
      const nextState = merge({}, state);
      if (nextState.allStaticWorkouts) {
        nextState.allStaticWorkouts = nextState.allStaticWorkouts.filter(r => {
          return r.id !== action.staticWorkout.id;
        });
      }
      delete nextState.staticWorkout;
      return nextState;
    default:
      return state;
  }
};



export default StaticWorkoutReducer;
