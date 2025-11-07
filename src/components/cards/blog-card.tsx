import { MarkdownRenderer } from "client/components/markdown-renderer";
import { timestamp } from "client/lib/time.utils";
import { cn } from "client/lib/utils";
import type { BlogPostType } from "client/pages/blog/blog.type";
import { ChevronDownIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function BlogCard({ blog }: { blog: BlogPostType }) {
	const [expanded, setExpanded] = useState(false);
	const [contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [blog.content]);

	return (
		<article className="card relative overflow-hidden">
			<header onClick={() => setExpanded(!expanded)}>
				<div className="flex items-center justify-between">
					<div>
						<h2 className="flex-1 pr-4 text-xl font-semibold text-gray-900 dark:text-white">{blog.title}</h2>
						<time className="text-foreground/70 text-xs" dateTime={timestamp(blog.createdAt).date}>
							{timestamp(blog.createdAt).fromNow}
						</time>
					</div>

					<button
						className="icon ghost"
						onClick={(e) => {
							e.stopPropagation();
							setExpanded(!expanded);
						}}
						aria-expanded={expanded}
						aria-controls={`blog-content-${blog.id}`}
					>
						<ChevronDownIcon
							className={cn(
								"text-secondary-foreground transition-transform duration-300",
								expanded ? "rotate-180" : "",
							)}
						/>
					</button>
				</div>
			</header>

			<div
				id={`blog-content-${blog.id}`}
				ref={contentRef}
				className={cn(
					"overflow-hidden transition-all duration-300 ease-in-out",
					expanded ? "max-h-[2000px]" : "max-h-[60px]",
				)}
				style={{
					maxHeight: expanded ? `${contentHeight}px` : "60px",
				}}
			>
				<div className="p-6 pt-4">
					<MarkdownRenderer content={blog.content} />
				</div>
			</div>

			{!expanded && (
				<div
					className="from-background to-background/20 pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-linear-to-t"
					aria-hidden="true"
				/>
			)}
		</article>
	);
}
