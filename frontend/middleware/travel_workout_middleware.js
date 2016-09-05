import { TravelWorkoutConstants, receiveSingleTravelWorkout, receiveTravelWorkouts, removeTravelWorkout } from '../actions/travel_workout_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { createTravelWorkout, fetchTravelWorkouts, fetchSingleTravelWorkout, deleteTravelWorkout } from '../util/travel_workout_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = travelWorkout => dispatch(receiveSingleTravelWorkout(travelWorkout));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case TravelWorkoutConstants.REQUEST_TRAVEL_WORKOUTS:
      let requestTravelWorkoutsSuccess = (data) => dispatch(receiveTravelWorkouts(data));
      fetchTravelWorkouts(requestTravelWorkoutsSuccess, error);
      return next(action);
    case TravelWorkoutConstants.REQUEST_SINGLE_TRAVEL_WORKOUT:
      let requestSingleTravelWorkoutSuccess = (data) => dispatch(receiveSingleTravelWorkout(data));
      fetchSingleTravelWorkout(action.id, success, error);
      return next(action);
    case TravelWorkoutConstants.CREATE_TRAVEL_WORKOUT:
      createTravelWorkout(action.travelWorkout, success, error);
      return next(action);
    case TravelWorkoutConstants.DESTROY_TRAVEL_WORKOUT:
      let destroyTravelWorkoutSuccess = (data) => {
        dispatch(removeTravelWorkout(data));
      };
      deleteTravelWorkout(action.id, destroyTravelWorkoutSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};
