import { AboutCard } from "client/components/cards/about-card";
import { BlogCard } from "client/components/cards/blog-card";
import { PendingCard } from "client/components/pending-card";
import { useFetch } from "client/hooks/use-fetch";
import { api } from "client/lib/api.utils";
import type { BlogPostType } from "client/pages/blog/blog.type";
import { ErrorCard } from "client/pages/error/error-card";

export function BlogPage() {
	const state = useFetch<BlogPostType[]>(new Request(api("/blog")));

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="col-span-3 md:col-span-1">
				<AboutCard />
			</div>
			<div className="col-span-3 md:col-span-2">
				<ul className="flex w-full flex-col gap-4">
					{state.status === "pending" ? (
						<PendingCard />
					) : state.status === "error" ? (
						<ErrorCard error={state.error} />
					) : (
						state.data.map((blog, i) => (
							<li key={i}>
								<BlogCard blog={blog} index={i} />
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
}
