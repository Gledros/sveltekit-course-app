export const load = async ({ cookies }) => {
	const token = cookies.get('token');
	const user = { token: token };

	return { user: token ? user : null };
};
