export const createWorkoutExercise = function(workout_exercise, success, error) {
  $.ajax({
		method: 'POST',
		url: '/api/workout_exercises',
		data: {workout_exercise: workout_exercise},
		success,
		error
	});
};

export const fetchWorkoutExercises = function(success, error) {
  $.ajax({
    method: 'GET',
    url: '/api/workout_exercises',
    success,
    error
  });
};

export const fetchSingleWorkoutExercise = function(id, success, error) {
  $.ajax({
    method: 'GET',
    url: `/api/workout_exercises/${id}`,
    success,
    error
  });
};

export const deleteWorkoutExercise = function(id, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `/api/workout_exercises/${id}`,
    success,
    error
  });
};
