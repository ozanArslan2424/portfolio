import { useState, useEffect } from "react";

type State<T> = { status: "pending" } | { status: "success"; data: T } | { status: "error"; error: Error };

export function useFetch<T>(req: Request) {
	const [state, setState] = useState<State<T>>({ status: "pending" });

	useEffect(() => {
		async function fetchPosts() {
			try {
				const res = await fetch(req);
				const data = await res.json();
				setState({ status: "success", data });
			} catch (err) {
				setState({ status: "error", error: err as Error });
			}
		}
		fetchPosts();
	}, [req]);

	return state
}
