export function api(endpoint: string) {
	return `${import.meta.env.VITE_API_URL}/api${endpoint}`;
}
