import { ExerciseConstants } from '../actions/exercise_actions.js';
import { merge } from 'lodash';

const ExerciseReducer = function(state = {}, action){
  switch(action.type){
    case ExerciseConstants.RECEIVE_EXERCISES:
      const allExercises = action.exercises;
      return merge({}, state, {allExercises});
    case ExerciseConstants.RECEIVE_SINGLE_EXERCISE:
      const exercise = action.exercise;
      return merge({}, state, {exercise});
    case ExerciseConstants.REMOVE_EXERCISE:
      const badExercise = action.exercise;
      const nextState = merge({}, state);
      nextState.allExercises = nextState.allExercises.filter(r => {
        return r.id !== action.exercise.id;
      });
      return nextState;
    default:
      return state;
  }
};



export default ExerciseReducer;
