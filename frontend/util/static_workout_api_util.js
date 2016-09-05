export const createStaticWorkout = function(static_workout, success, error) {
  $.ajax({
		method: 'POST',
		url: '/api/static_workouts',
		data: {static_workout: static_workout},
		success,
		error
	});
};

export const fetchStaticWorkouts = function(success, error) {
  $.ajax({
    method: 'GET',
    url: '/api/static_workouts',
    success,
    error
  });
};

export const fetchSingleStaticWorkout = function(id, success, error) {
  $.ajax({
    method: 'GET',
    url: `/api/static_workouts/${id}`,
    success,
    error
  });
};

export const deleteStaticWorkout = function(id, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `/api/static_workouts/${id}`,
    success,
    error
  });
};
