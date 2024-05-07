"use client";
import { Section } from "@/components/motion";
import { PROJECTS, Project } from "@/lib/db";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";

export const Projects = () => {
  return PROJECTS.sort((a, b) => a.order - b.order).map((project, index) => (
    <Section delay={index + 3} key={index}>
      <ProjectCard project={project} />
    </Section>
  ));
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="flex gap-8">
        <Image
          src={project.icon}
          alt={project.title}
          height={200}
          width={200}
          className="aspect-square size-24 rounded-xl border bg-card md:size-36"
        />
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-res-lg font-bold">{project.title}</h2>
          <div className="flex items-center gap-4">
            {project.live && (
              <Link href={project.live} className="link">
                <Link2Icon />
                <span>Canlı</span>
              </Link>
            )}
            {project.repo && (
              <Link href={project.repo} className="link">
                <GitHubLogoIcon />
                <span>GitHub</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <article className="prose prose-sm max-w-full py-4 dark:prose-invert sm:prose-base">
        <p>{project.description}</p>
        <p>
          <strong>Teknolojiler: </strong>
          {project.tech.map((tech, index) => (
            <span key={index}>
              {tech}
              {index !== project.tech.length - 1 && ", "}
            </span>
          ))}
        </p>
      </article>

      <div className="flex gap-4 overflow-x-scroll">
        {project.images &&
          project.images.map((image, index) => (
            <ImageDialog key={index} src={image.url} alt={image.name} />
          ))}
      </div>
    </>
  );
};

const ImageDialog = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          alt={alt}
          height={800}
          width={800}
          className="h-36 rounded-lg border"
        />
      </DialogTrigger>
      <DialogContent className="max-w-[800px] p-0">
        <Image
          src={src}
          alt={alt}
          height={800}
          width={800}
          className="h-auto w-[800px] rounded-md"
        />
      </DialogContent>
    </Dialog>
  );
};
