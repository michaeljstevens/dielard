export const StaticWorkoutConstants = {
  CREATE_STATIC_WORKOUT: "CREATE_STATIC_WORKOUT",
  DESTROY_STATIC_WORKOUT: "DESTROY_STATIC_WORKOUT",
  REQUEST_STATIC_WORKOUTS: "REQUEST_STATIC_WORKOUTS",
  RECEIVE_STATIC_WORKOUTS: "RECEIVE_STATIC_WORKOUTS",
  REQUEST_SINGLE_STATIC_WORKOUT: "REQUEST_SINGLE_STATIC_WORKOUT",
  RECEIVE_SINGLE_STATIC_WORKOUT: "RECEIVE_SINGLE_STATIC_WORKOUT",
  REMOVE_STATIC_WORKOUT: "REMOVE_STATIC_WORKOUT"
};

export const createStaticWorkout = staticWorkout => ({
  type: StaticWorkoutConstants.CREATE_STATIC_WORKOUT,
  staticWorkout
});

export const requestStaticWorkouts = () => ({
  type: StaticWorkoutConstants.REQUEST_STATIC_WORKOUTS
});

export const receiveStaticWorkouts = (staticWorkouts) => ({
  type: StaticWorkoutConstants.RECEIVE_STATIC_WORKOUTS,
  staticWorkouts
});

export const requestSingleStaticWorkout = id => ({
  type: StaticWorkoutConstants.REQUEST_SINGLE_STATIC_WORKOUT,
  id
});

export const receiveSingleStaticWorkout = staticWorkout => ({
  type: StaticWorkoutConstants.RECEIVE_SINGLE_STATIC_WORKOUT,
  staticWorkout
});

export const destroyStaticWorkout = id => ({
  type: StaticWorkoutConstants.DESTROY_STATIC_WORKOUT,
  id
});

export const removeStaticWorkout = staticWorkout => ({
  type: StaticWorkoutConstants.REMOVE_STATIC_WORKOUT,
  staticWorkout
});
