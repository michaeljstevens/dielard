export const createExercise = function(exercise, success, error) {
  $.ajax({
		method: 'POST',
		url: '/api/exercises',
		data: {exercise: exercise},
		success,
		error
	});
};

export const fetchExercises = function(success, error) {
  $.ajax({
    method: 'GET',
    url: '/api/exercises',
    success,
    error
  });
};

export const fetchSingleExercise = function(id, success, error) {
  $.ajax({
    method: 'GET',
    url: `/api/exercises/${id}`,
    success,
    error
  });
};

export const deleteExercise = function(id, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `/api/exercises/${id}`,
    success,
    error
  });
};
