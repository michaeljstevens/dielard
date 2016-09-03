export const createRoute = function(route, success, error) {
  $.ajax({
		method: 'POST',
		url: '/api/routes',
		data: {route: route},
		success,
		error
	});
};

export const fetchRoutes = function(success, error) {
  $.ajax({
    method: 'GET',
    url: '/api/routes',
    success,
    error
  });
};

export const fetchSingleRoute = function(id, success, error) {
  $.ajax({
    method: 'GET',
    url: `/api/routes/${id}`,
    success,
    error
  });
};

export const deleteRoute = function(id, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `/api/routes/${id}`,
    success,
    error
  });
};
