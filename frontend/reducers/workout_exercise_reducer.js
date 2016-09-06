import { WorkoutExerciseConstants } from '../actions/workout_exercise_actions.js';
import { merge } from 'lodash';

const WorkoutExerciseReducer = function(state = {}, action){
  switch(action.type){
    case WorkoutExerciseConstants.RECEIVE_WORKOUT_EXERCISES:
      const allWorkoutExercises = action.workoutExercises;
      return merge({}, state, {allWorkoutExercises});
    case WorkoutExerciseConstants.RECEIVE_SINGLE_WORKOUT_EXERCISE:
      const workoutExercise = action.workoutExercise;
      return merge({}, state, {workoutExercise});
    case WorkoutExerciseConstants.REMOVE_WORKOUT_EXERCISE:
      const badWorkoutExercise = action.workoutExercise;
      const nextState = merge({}, state);
      nextState.allWorkoutExercises = nextState.allWorkoutExercises.filter(r => {
        return r.id !== action.workoutExercise.id;
      });
      return nextState;
    default:
      return state;
  }
};



export default WorkoutExerciseReducer;
