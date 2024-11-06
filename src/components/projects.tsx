import { motion } from "framer-motion";
import LinkIcon from "./icons/link";
import { GithubIcon } from "./icons/social";
import { useLang } from "./lang-context";

export const Projects = () => {
  const { projects } = useLang();

  return (
    <main className="flex max-w-full flex-col gap-4">
      {projects.map((project, i) => (
        <motion.div
          className="card"
          key={i}
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1, delay: 0.25 }}
        >
          <div className="flex gap-4 sm:gap-8">
            {project.images.length > 0 ? (
              <img
                src={project.images[0].src}
                alt={project.title}
                height={200}
                width={200}
                className="aspect-square size-24 rounded-xl border bg-card md:size-36"
              />
            ) : (
              <div className="flex aspect-square size-24 shrink-0 items-center justify-center rounded-xl border bg-card text-muted-foreground md:size-36">
                No Icon
              </div>
            )}

            <article className="space-y-2 md:space-y-4">
              <h2 className="text-2xl font-bold sm:text-3xl">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                {project.live && (
                  <a href={project.live} className="link secondary">
                    <LinkIcon />
                    <span>Demo</span>
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} className="link secondary">
                    <GithubIcon />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </article>
          </div>

          <div className="prose max-w-full hyphens-auto text-wrap break-words py-4 text-sm dark:prose-invert sm:text-base">
            <p>{project.description}</p>
          </div>
          <p className="pb-4 text-sm sm:text-base">
            <strong>Tech: </strong>
            {project.tech.map((tech, index) => (
              <span key={index}>
                {tech}
                {index !== project.tech.length - 1 && ", "}
              </span>
            ))}
          </p>
          <div className="flex gap-4 overflow-x-scroll">
            {project.images.length > 1 &&
              project.images
                .slice(1)
                .map((image, i) => (
                  <img
                    key={i}
                    src={image.src}
                    alt={image.name}
                    width={433.52}
                    height={288}
                    className="aspect-[154/100] h-72 rounded-lg border"
                  />
                ))}
          </div>
        </motion.div>
      ))}
    </main>
  );
};
