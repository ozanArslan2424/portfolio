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
    <div className="container flex flex-col gap-4 px-4 py-8 md:gap-8 md:px-6 lg:flex-row">
      <aside className="top-8 flex h-max max-w-full flex-col gap-4 lg:sticky lg:max-w-[40%]">
        <Motion className="card space-y-4" delay={1}>
          <header className="flex gap-8">
            <Image
              className="aspect-square size-36 rounded-xl md:size-48"
              src="/images/ozan.jpg"
              alt="Ozan Arslan"
              width={200}
              height={200}
            />

            <div className="flex w-full flex-col justify-between">
              <div>
                <h1 className="text-res-xl font-bold">Ozan Arslan</h1>
                <p className="text-res-sm font-semibold text-muted-foreground">
                  {page.about.title}
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <ThemeToggle />
                <LangToggle lang={lang} />
              </div>
            </div>
          </header>
          <nav className="flex items-center gap-2">
            <Link
              className="button secondary w-full"
              href="https://www.linkedin.com/in/ozan-arslan-214513209/"
            >
              <PiLinkedinLogoBold />
              <span>{page.about.links.linkedin}</span>
            </Link>

            <Link
              className="button secondary w-full"
              href="https://github.com/ozanArslan2424"
            >
              <PiGithubLogoBold />
              <span>{page.about.links.github}</span>
            </Link>

            <CvDialog>
              <button className="button secondary w-full">
                <PiNewspaperClippingBold />
                <span>{page.about.links.CV}</span>
              </button>
            </CvDialog>
            <Contact>
              <button className="button secondary w-full">
                <PiEnvelopeBold />
                <span>{page.about.links.contact}</span>
              </button>
            </Contact>
          </nav>

          <article className="prose prose-sm max-w-full dark:prose-invert sm:prose-base">
            <p>{page.about.description}</p>
          </article>
        </Motion>

        <div className="flex flex-wrap gap-2">
          {page.about.tech.map((tech, index) => (
            <Motion
              delay={index + 1}
              key={index}
              className="h-max cursor-default rounded-lg border bg-card/80 px-3 py-1.5 text-res-xs font-semibold shadow-sm"
            >
              {tech}
            </Motion>
          ))}
        </div>
      </aside>

      <main className="flex max-w-full flex-col gap-4 lg:max-w-[60%]">
        <Projects projects={page.projects} />
      </main>
    </div>
  );
}
