export const setAuth = () => {
	const token = localStorage.getItem("token");

	const config = { headers: { Authorization: `Bearer ${token}` } };

	return token ? config : null;
};
