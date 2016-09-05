import { TravelWorkoutConstants } from '../actions/travel_workout_actions.js';
import { merge } from 'lodash';

const TravelWorkoutReducer = function(state = {}, action){
  switch(action.type){
    case TravelWorkoutConstants.RECEIVE_TRAVEL_WORKOUTS:
      const allTravelWorkouts = action.travelWorkouts;
      return merge({}, state, {allTravelWorkouts});
    case TravelWorkoutConstants.RECEIVE_SINGLE_TRAVEL_WORKOUT:
      const travelWorkout = action.travelWorkout;
      return merge({}, state, {travelWorkout});
    case TravelWorkoutConstants.REMOVE_TRAVEL_WORKOUT:
      const badTravelWorkout = action.travelWorkout;
      const nextState = merge({}, state);
      nextState.allTravelWorkouts = nextState.allTravelWorkouts.filter(r => {
        return r.id !== action.travelWorkout.id;
      });
      return nextState;
    default:
      return state;
  }
};



export default TravelWorkoutReducer;
