export const WorkoutExerciseConstants = {
  CREATE_WORKOUT_EXERCISE: "CREATE_WORKOUT_EXERCISE",
  DESTROY_WORKOUT_EXERCISE: "DESTROY_WORKOUT_EXERCISE",
  REQUEST_WORKOUT_EXERCISES: "REQUEST_WORKOUT_EXERCISES",
  RECEIVE_WORKOUT_EXERCISES: "RECEIVE_WORKOUT_EXERCISES",
  REQUEST_SINGLE_WORKOUT_EXERCISE: "REQUEST_SINGLE_WORKOUT_EXERCISE",
  RECEIVE_SINGLE_WORKOUT_EXERCISE: "RECEIVE_SINGLE_WORKOUT_EXERCISE",
  REMOVE_WORKOUT_EXERCISE: "REMOVE_WORKOUT_EXERCISE"
};

export const createWorkoutExercise = workoutExercise => ({
  type: WorkoutExerciseConstants.CREATE_WORKOUT_EXERCISE,
  workoutExercise
});

export const requestWorkoutExercises = () => ({
  type: WorkoutExerciseConstants.REQUEST_WORKOUT_EXERCISES
});

export const receiveWorkoutExercises = (workoutExercises) => ({
  type: WorkoutExerciseConstants.RECEIVE_WORKOUT_EXERCISES,
  workoutExercises
});

export const requestSingleWorkoutExercise = id => ({
  type: WorkoutExerciseConstants.REQUEST_SINGLE_WORKOUT_EXERCISE,
  id
});

export const receiveSingleWorkoutExercise = workoutExercise => ({
  type: WorkoutExerciseConstants.RECEIVE_SINGLE_WORKOUT_EXERCISE,
  workoutExercise
});

export const destroyWorkoutExercise = id => ({
  type: WorkoutExerciseConstants.DESTROY_WORKOUT_EXERCISE,
  id
});

export const removeWorkoutExercise = workoutExercise => ({
  type: WorkoutExerciseConstants.REMOVE_WORKOUT_EXERCISE,
  workoutExercise
});
