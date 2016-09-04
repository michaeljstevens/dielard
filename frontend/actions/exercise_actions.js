export const ExerciseConstants = {
  CREATE_ROUTE: "CREATE_EXERCISE",
  DESTROY_EXERCISE: "DESTROY_EXERCISE",
  REQUEST_EXERCISES: "REQUEST_EXERCISES",
  RECEIVE_EXERCISES: "RECEIVE_EXERCISES",
  REQUEST_SINGLE_EXERCISE: "REQUEST_SINGLE_EXERCISE",
  RECEIVE_SINGLE_EXERCISE: "RECEIVE_SINGLE_EXERCISE",
  REMOVE_EXERCISE: "REMOVE_EXERCISE"
};

export const createExercise = exercise => ({
  type: ExerciseConstants.CREATE_EXERCISE,
  exercise
});

export const requestExercises = () => ({
  type: ExerciseConstants.REQUEST_EXERCISES
});

export const receiveExercises = (exercises) => ({
  type: ExerciseConstants.RECEIVE_EXERCISES,
  exercises
});

export const requestSingleExercise = id => ({
  type: ExerciseConstants.REQUEST_SINGLE_EXERCISE,
  id
});

export const receiveSingleExercise = exercise => ({
  type: ExerciseConstants.RECEIVE_SINGLE_EXERCISE,
  exercise
});

export const destroyExercise = id => ({
  type: ExerciseConstants.DESTROY_EXERCISE,
  id
});

export const removeExercise = exercise => ({
  type: ExerciseConstants.REMOVE_EXERCISE,
  exercise
});
