import { ThemeToggle } from "@/components/theme-toggle";
import { Motion } from "@/components/ui/motion";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";
import {
  PiEnvelopeBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";

type Props = {
  lang: Locale;

  about: {
    title: string;
    links: {
      linkedin: string;
      github: string;
      contact: string;
    };
    description: string;
    tech: string[];
  };
};

export const About = ({ lang, about }: Props) => {
  return (
    <aside className="top-8 flex h-max max-w-full flex-col gap-2 sm:gap-4 md:sticky">
      <nav className="flex gap-2 sm:hidden">
        <Link
          className="button h-max border bg-background text-foreground"
          href={about.links.linkedin}
        >
          <PiLinkedinLogoBold className="shrink-0" />
          <span>LinkedIn</span>
        </Link>

        <Link
          className="button h-max border bg-background text-foreground"
          href={about.links.github}
        >
          <PiGithubLogoBold className="shrink-0" />
          <span>GitHub</span>
        </Link>
        <Link
          className="button h-max border bg-background text-foreground"
          href={about.links.contact}
        >
          <PiEnvelopeBold className="shrink-0" />
          <span>Mail</span>
        </Link>
        <div className="w-full"></div>
        <ThemeToggle />
        <Link
          className="circle-button h-7 w-7"
          href={`/${lang === "tr" ? "en" : "tr"}`}
        >
          <Image
            src={lang === "tr" ? "/icons/gb.svg" : "/icons/tr.svg"}
            alt={lang === "tr" ? "English" : "Türkçe"}
            width={24}
            height={24}
            className="h-full w-full"
          />
        </Link>
      </nav>
      <Motion className="card space-y-4" delay={1}>
        <header className="flex gap-4 sm:gap-8">
          <Image
            className="aspect-square size-[30%] rounded-xl"
            src="/images/ozan.jpg"
            alt="Ozan Arslan"
            width={200}
            height={200}
          />

          <div className="flex w-full flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold sm:text-4xl">Ozan Arslan</h1>
              <p className="text-xs font-semibold text-muted-foreground sm:text-sm">
                {about.title}
              </p>
            </div>
            <nav className="hidden gap-2 sm:flex">
              <Link className="circle-button" href={about.links.linkedin}>
                <PiLinkedinLogoBold className="shrink-0" />
              </Link>

              <Link className="circle-button" href={about.links.github}>
                <PiGithubLogoBold className="shrink-0" />
              </Link>
              <Link className="circle-button" href={about.links.contact}>
                <PiEnvelopeBold className="shrink-0" />
              </Link>
              <div className="w-full"></div>
              <ThemeToggle />
              <Link
                className="circle-button"
                href={`/${lang === "tr" ? "en" : "tr"}`}
              >
                <Image
                  src={lang === "tr" ? "/icons/gb.svg" : "/icons/tr.svg"}
                  alt={lang === "tr" ? "English" : "Türkçe"}
                  width={24}
                  height={24}
                  className="h-full w-full"
                />
              </Link>
            </nav>
          </div>
        </header>

        <article className="prose hyphens-auto text-wrap break-words text-sm dark:prose-invert sm:text-base">
          <p>{about.description}</p>
        </article>
      </Motion>

      <div className="flex flex-wrap gap-2">
        {about.tech.map((tech, index) => (
          <Motion
            delay={index + 1}
            key={index}
            className="h-max cursor-default rounded-lg border bg-card/80 px-3 py-1.5 text-xs font-semibold shadow-sm"
          >
            {tech}
          </Motion>
        ))}
      </div>
    </aside>
  );
};
