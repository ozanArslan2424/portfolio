import { motion } from "framer-motion";
import { useConfig } from "../hooks/use-config";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";
import { Icon } from "./icons";

export const About = () => {
  const { content } = useConfig();

  return (
    <aside className="static top-8 flex h-max max-w-full flex-col gap-2 sm:gap-4 lg:sticky">
      <div className="card space-y-4">
        <header className="grid gap-4 md:grid-cols-[30%_70%] md:gap-0">
          <div className="aspect-square">
            <img
              className="h-full w-full rounded-xl"
              src="/webp/foto.webp"
              alt="Ozan Arslan"
              width={200}
              height={200}
            />
          </div>

          <div className="flex w-full flex-col justify-between gap-4 px-4">
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">Ozan Arslan</h1>
              <p className="text-muted-foreground text-xs font-semibold sm:text-sm">
                {content.about.title}
              </p>
            </div>
            <article className="prose dark:prose-invert text-sm text-wrap break-words hyphens-auto sm:text-base md:block lg:hidden">
              <p>{content.about.description}</p>
            </article>
            <nav className="flex gap-2">
              <a
                className="circle-button"
                href={content.about.links.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon variant="linkedin" />
                <span className="sr-only">Ozan Arslan LinkedIn</span>
              </a>
              <a
                className="circle-button"
                href={content.about.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon variant="github" />
                <span className="sr-only">Ozan Arslan GitHub</span>
              </a>
              <a
                className="circle-button"
                href={content.about.links.contact}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon variant="mail" />
                <span className="sr-only">Ozan Arslan Email</span>
              </a>
              <div className="w-full" />
              <ThemeToggle />
              <LangToggle />
            </nav>
          </div>
        </header>

        <article className="hidden text-sm text-wrap break-words hyphens-auto sm:text-base lg:block">
          <p>{content.about.description}</p>
        </article>
      </div>

      <div className="flex flex-wrap gap-2">
        {content.about.tech.map((tech, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-card/80 h-max cursor-default rounded-lg border px-3 py-1.5 text-xs font-semibold shadow-sm"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </aside>
  );
};
