export const TravelWorkoutConstants = {
  CREATE_TRAVEL_WORKOUT: "CREATE_TRAVEL_WORKOUT",
  DESTROY_TRAVEL_WORKOUT: "DESTROY_TRAVEL_WORKOUT",
  REQUEST_TRAVEL_WORKOUTS: "REQUEST_TRAVEL_WORKOUTS",
  RECEIVE_TRAVEL_WORKOUTS: "RECEIVE_TRAVEL_WORKOUTS",
  REQUEST_SINGLE_TRAVEL_WORKOUT: "REQUEST_SINGLE_TRAVEL_WORKOUT",
  RECEIVE_SINGLE_TRAVEL_WORKOUT: "RECEIVE_SINGLE_TRAVEL_WORKOUT",
  REMOVE_TRAVEL_WORKOUT: "REMOVE_TRAVEL_WORKOUT"
};

export const createTravelWorkout = travelWorkout => ({
  type: TravelWorkoutConstants.CREATE_TRAVEL_WORKOUT,
  travelWorkout
});

export const requestTravelWorkouts = () => ({
  type: TravelWorkoutConstants.REQUEST_TRAVEL_WORKOUTS
});

export const receiveTravelWorkouts = (travelWorkouts) => ({
  type: TravelWorkoutConstants.RECEIVE_TRAVEL_WORKOUTS,
  travelWorkouts
});

export const requestSingleTravelWorkout = id => ({
  type: TravelWorkoutConstants.REQUEST_SINGLE_TRAVEL_WORKOUT,
  id
});

export const receiveSingleTravelWorkout = travelWorkout => ({
  type: TravelWorkoutConstants.RECEIVE_SINGLE_TRAVEL_WORKOUT,
  travelWorkout
});

export const destroyTravelWorkout = id => ({
  type: TravelWorkoutConstants.DESTROY_TRAVEL_WORKOUT,
  id
});

export const removeTravelWorkout = travelWorkout => ({
  type: TravelWorkoutConstants.REMOVE_TRAVEL_WORKOUT,
  travelWorkout
});
