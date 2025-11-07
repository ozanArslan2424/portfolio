import { AppLayout } from "client/components/app-layout";
import { ErrorBoundary } from "client/pages/error/error-boundary";
import { createBrowserRouter } from "react-router";
import { paths } from "./paths";
import { ProjectsPage } from "client/pages/projects/projects.page";
import { ResumePage } from "client/pages/resume/resume.page";
import { BlogPage } from "client/pages/blog/blog.page";

export const router = createBrowserRouter([
	{
		Component: AppLayout,
		ErrorBoundary,
		children: [
			{ path: paths.projects, Component: ProjectsPage },
			{ path: paths.resume, Component: ResumePage },
			{ path: paths.blog, Component: BlogPage },
			// Fallback route for 404 pages
			{ path: "*", Component: ErrorBoundary },
		],
	},
]);
