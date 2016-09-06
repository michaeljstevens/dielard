import { WorkoutExerciseConstants, receiveSingleWorkoutExercise, receiveWorkoutExercises, removeWorkoutExercise } from '../actions/workout_exercise_actions.js';
import { receiveErrors } from '../actions/error_actions.js';
import { createWorkoutExercise, fetchWorkoutExercises, fetchSingleWorkoutExercise, deleteWorkoutExercise } from '../util/workout_exercise_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const success = workoutExercise => dispatch(receiveSingleWorkoutExercise(workoutExercise));
  const error = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case WorkoutExerciseConstants.REQUEST_WORKOUT_EXERCISES:
      let requestWorkoutExercisesSuccess = (data) => dispatch(receiveWorkoutExercises(data));
      fetchWorkoutExercises(requestWorkoutExercisesSuccess, error);
      return next(action);
    case WorkoutExerciseConstants.REQUEST_SINGLE_WORKOUT_EXERCISE:
      let requestSingleWorkoutExerciseSuccess = (data) => dispatch(receiveSingleWorkoutExercise(data));
      fetchSingleWorkoutExercise(action.id, success, error);
      return next(action);
    case WorkoutExerciseConstants.CREATE_WORKOUT_EXERCISE:
      createWorkoutExercise(action.workoutExercise, success, error);
      return next(action);
    case WorkoutExerciseConstants.DESTROY_WORKOUT_EXERCISE:
      let destroyWorkoutExerciseSuccess = (data) => {
        dispatch(removeWorkoutExercise(data));
      };
      deleteWorkoutExercise(action.id, destroyWorkoutExerciseSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};
