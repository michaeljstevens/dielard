export const createTravelWorkout = function(travel_workout, success, error) {
  $.ajax({
		method: 'POST',
		url: '/api/travel_workouts',
		data: {travel_workout: travel_workout},
		success,
		error
	});
};

export const fetchTravelWorkouts = function(success, error) {
  $.ajax({
    method: 'GET',
    url: '/api/travel_workouts',
    success,
    error
  });
};

export const fetchSingleTravelWorkout = function(id, success, error) {
  $.ajax({
    method: 'GET',
    url: `/api/travel_workouts/${id}`,
    success,
    error
  });
};

export const deleteTravelWorkout = function(id, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `/api/travel_workouts/${id}`,
    success,
    error
  });
};
