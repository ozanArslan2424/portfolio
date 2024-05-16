"use client";
import { Motion } from "@/components/motion";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  repo: string;
  images: {
    name: string;
    src: string;
  }[];
};

export const Projects = ({ projects }: { projects: Project[] }) => {
  return projects.map((project, index) => (
    <Motion className="card" delay={index + 3} key={index}>
      <div className="flex gap-8">
        <Image
          src={project.images[0].src}
          alt={project.title}
          height={200}
          width={200}
          className="aspect-square size-24 rounded-xl border bg-card md:size-36"
        />

        <div className="space-y-2 md:space-y-4">
          <h2 className="text-res-lg font-bold">{project.title}</h2>
          <div className="flex flex-wrap items-center gap-4">
            {project.live && (
              <Link href={project.live} className="link secondary">
                <Link2Icon />
                <span>Demo</span>
              </Link>
            )}
            {project.repo && (
              <Link href={project.repo} className="link secondary">
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
          <strong>Tech: </strong>
          {project.tech.map((tech, index) => (
            <span key={index}>
              {tech}
              {index !== project.tech.length - 1 && ", "}
            </span>
          ))}
        </p>
      </article>

      <div className="flex gap-4 overflow-x-scroll">
        {project.images.length > 1 &&
          project.images
            .slice(1)
            .map((image, index) => (
              <ImageDialog key={index} src={image.src} alt={image.name} />
            ))}
      </div>
    </Motion>
  ));
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
