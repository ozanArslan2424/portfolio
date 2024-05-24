import { LangToggle } from "@/components/lang-toggle";
import { Motion } from "@/components/motion";
import { Contact } from "@/components/sections/contact";
import { CvDialog } from "@/components/sections/cv-dialog";
import { Projects } from "@/components/sections/projects";
import { ThemeToggle } from "@/components/theme-toggle";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import {
  PiEnvelopeBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiNewspaperClippingBold,
} from "react-icons/pi";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="container grid grid-flow-row gap-4 px-4 py-8 md:grid-flow-col md:grid-cols-[40%_auto] md:gap-6 md:px-4">
      <aside className="top-8 flex h-max max-w-full flex-col gap-4 lg:sticky ">
        <Motion className="card space-y-4" delay={1}>
          <header className="flex gap-8">
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
                  {page.about.title}
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <ThemeToggle />
                <LangToggle lang={lang} />
              </div>
            </div>
          </header>
          <nav className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-2 lg:grid-cols-4 lg:grid-rows-1 ">
            <Link
              className="button secondary w-full"
              href="https://www.linkedin.com/in/ozan-arslan-214513209/"
            >
              <PiLinkedinLogoBold className="shrink-0" />
              <span>{page.about.links.linkedin}</span>
            </Link>

            <Link
              className="button secondary w-full"
              href="https://github.com/ozanArslan2424"
            >
              <PiGithubLogoBold className="shrink-0" />
              <span>{page.about.links.github}</span>
            </Link>

            <CvDialog>
              <button className="button secondary w-full">
                <PiNewspaperClippingBold className="shrink-0" />
                <span>{page.about.links.CV}</span>
              </button>
            </CvDialog>
            <Contact>
              <button className="button secondary w-full">
                <PiEnvelopeBold className="shrink-0" />
                <span>{page.about.links.contact}</span>
              </button>
            </Contact>
          </nav>

          <article className="prose hyphens-auto text-wrap break-words text-sm dark:prose-invert sm:text-base">
            <p>{page.about.description}</p>
          </article>
        </Motion>

        <div className="flex flex-wrap gap-2">
          {page.about.tech.map((tech, index) => (
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

      <main className="flex max-w-full flex-col gap-4 ">
        <Projects projects={page.projects} />
      </main>
    </div>
  );
}
