export const createRoute = function(route, success, error) {
  route.start_pos = JSON.stringify(route.start_pos);
  route.end_pos = JSON.stringify(route.end_pos);
  $.ajax({
		method: 'POST',
		url: '/api/routes',
		data: {route: route},
		success,
		error
	});
};
