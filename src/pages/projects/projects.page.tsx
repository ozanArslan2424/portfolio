import { ProjectCard } from "client/components/cards/project-card";
import type { ProjectType } from "client/pages/projects/project.type";
import { useTranslation } from "react-i18next";
import { AboutCard } from "client/components/cards/about-card";

export function ProjectsPage() {
	const { t } = useTranslation("projects");
	const projects = t("items", { returnObjects: true }) as ProjectType[];

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="col-span-3 md:col-span-1">
				<AboutCard />
			</div>
			<div className="col-span-3 md:col-span-2">
				<ul className="flex flex-col gap-4">
					{projects.map((project, i) => (
						<li key={i}>
							<ProjectCard project={project} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
