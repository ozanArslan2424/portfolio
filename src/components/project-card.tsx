import { motion } from "framer-motion";
import { Icon } from "./icons";

type ProjectCardProps = {
  images: { src: string; name: string }[];
  title: string;
  live: string;
  repo: string;
  description: string;
  tech: string[];
  index: number;
};

export function ProjectCard(props: ProjectCardProps) {
  const { images, title, live, repo, description, tech, index } = props;
  return (
    <motion.div
      className="card"
      key={index}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1, delay: 0.25 }}
    >
      <div className="flex gap-4 sm:gap-8">
        {images.length > 0 ? (
          <img
            src={images[0].src}
            alt={title}
            height={200}
            width={200}
            className="bg-card aspect-square size-24 rounded-xl border md:size-36"
          />
        ) : (
          <div className="bg-card text-muted-foreground flex aspect-square size-24 shrink-0 items-center justify-center rounded-xl border md:size-36">
            No Icon
          </div>
        )}

        <article className="space-y-2 md:space-y-4">
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>

          <div className="flex flex-wrap items-center gap-4">
            {live && (
              <a href={live} className="link secondary">
                <Icon variant="link" />
                <span>Demo</span>
              </a>
            )}
            {repo && (
              <a href={repo} className="link secondary">
                <Icon variant="github" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </article>
      </div>

      <div className="prose max-w-full py-4 text-sm text-wrap break-words hyphens-auto sm:text-base">
        <p>{description}</p>
      </div>
      <p className="pb-4 text-sm sm:text-base">
        <strong>Tech: </strong>
        {tech.map((tech, index) => (
          <span key={index}>
            {tech}
            {index !== tech.length - 1 && ", "}
          </span>
        ))}
      </p>
      <div className="flex gap-4 overflow-x-scroll">
        {images.length > 1 &&
          images
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
  );
}
