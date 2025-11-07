export function api(endpoint: string) {
	return `${import.meta.env.API_URL}${endpoint}`;
}
