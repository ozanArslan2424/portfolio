import { AboutCard } from "client/components/cards/about-card";
import { BlogCard } from "client/components/cards/blog-card";
import { PendingCard } from "client/components/pending-card";
import type { BlogPostType } from "client/pages/blog/blog.type";
import { ErrorCard } from "client/pages/error/error-card";
import { Suspense, useEffect, useState } from "react";

type State = { status: "pending" } | { status: "success"; data: BlogPostType[] } | { status: "error"; error: Error };

export function BlogPage() {
	const [state, setState] = useState<State>({ status: "pending" });

	useEffect(() => {
		async function fetchPosts() {
			try {
				const res = await fetch("http://localhost:3000/api/blog");
				const data = await res.json();
				setState({ status: "success", data });
			} catch (err) {
				setState({ status: "error", error: err as Error });
			}
		}
		fetchPosts();
	}, []);

	return (
		<Suspense fallback={<PendingCard />}>
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-3 md:col-span-1">
					<AboutCard />
				</div>
				<div className="col-span-3 md:col-span-2">
					{state.status === "pending" ? (
						<PendingCard />
					) : state.status === "error" ? (
						<ErrorCard error={state.error} />
					) : (
						<ul className="flex flex-col gap-4">
							{state.data.map((blog, i) => (
								<li key={i}>
									<BlogCard blog={blog} />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</Suspense>
	);
}
