import { StaticWorkoutConstants, receiveSingleStaticWorkout, receiveStaticWorkouts, removeStaticWorkout } from '../actions/static_workout_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { createStaticWorkout, fetchStaticWorkouts, fetchSingleStaticWorkout, deleteStaticWorkout } from '../util/static_workout_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = staticWorkout => dispatch(receiveSingleStaticWorkout(staticWorkout));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case StaticWorkoutConstants.REQUEST_STATIC_WORKOUTS:
      let requestStaticWorkoutsSuccess = (data) => dispatch(receiveStaticWorkouts(data));
      fetchStaticWorkouts(requestStaticWorkoutsSuccess, error);
      return next(action);
    case StaticWorkoutConstants.REQUEST_SINGLE_STATIC_WORKOUT:
      let requestSingleStaticWorkoutSuccess = (data) => dispatch(receiveSingleStaticWorkout(data));
      fetchSingleStaticWorkout(action.id, success, error);
      return next(action);
    case StaticWorkoutConstants.CREATE_STATIC_WORKOUT:
      createStaticWorkout(action.staticWorkout, success, error);
      return next(action);
    case StaticWorkoutConstants.DESTROY_STATIC_WORKOUT:
      let destroyStaticWorkoutSuccess = (data) => {
        dispatch(removeStaticWorkout(data));
      };
      deleteStaticWorkout(action.id, destroyStaticWorkoutSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};
