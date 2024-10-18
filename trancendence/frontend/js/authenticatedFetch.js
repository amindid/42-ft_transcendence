export async function authenticatedFetch(url, options = {}) {
	const token = localStorage.getItem('access_token');
	if (!token) {
		window.location.href = '/login';
		return;
	}

	options.headers = {
		...options.headers,
		'Authorization' : `Bearer ${token}`
	};

	return fetch(url, options);
}