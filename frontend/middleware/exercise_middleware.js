import { ExerciseConstants, receiveSingleExercise, receiveExercises, removeExercise } from '../actions/exercise_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { createExercise, fetchExercises, fetchSingleExercise, deleteExercise } from '../util/exercise_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = exercise => dispatch(receiveSingleExercise(exercise));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case ExerciseConstants.REQUEST_EXERCISES:
      let requestExercisesSuccess = (data) => dispatch(receiveExercises(data));
      fetchExercises(requestExercisesSuccess, error);
      return next(action);
    case ExerciseConstants.REQUEST_SINGLE_EXERCISE:
      let requestSingleExerciseSuccess = (data) => dispatch(receiveSingleExercise(data));
      fetchSingleExercise(action.id, success, error);
      return next(action);
    case ExerciseConstants.CREATE_EXERCISE:
      createExercise(action.exercise, success, error);
      return next(action);
    case ExerciseConstants.DESTROY_EXERCISE:
      let destroyExerciseSuccess = (data) => {
        dispatch(removeExercise(data));
      };
      deleteExercise(action.id, destroyExerciseSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};
