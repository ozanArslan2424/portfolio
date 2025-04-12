import { ProjectCard } from "../components/project-card";
import { useConfig } from "../hooks/use-config";

export function ProjectsTab() {
  const { content } = useConfig();

  return (
    <main className="flex max-w-full flex-col gap-4">
      {content.projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          images={project.images}
          description={project.description}
          title={project.title}
          live={project.live}
          repo={project.repo}
          tech={project.tech}
          index={i}
        />
      ))}
    </main>
  );
}
