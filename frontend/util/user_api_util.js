export const update = function(user, success, error) {
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${user.user.id}`,
		data: user,
		success,
		error
	});
};
