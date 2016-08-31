export const update = function(user, success, error) {
	$.ajax({
		method: 'PATCH',
		url: '/api/user/${user.id}',
		data: user,
		success,
		error
	});
};
