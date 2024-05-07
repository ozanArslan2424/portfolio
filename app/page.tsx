"use client";
import { Section } from "@/components/motion";
import { AltContactForm } from "@/components/sections/contact";
import { Profile } from "@/components/sections/profile";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech";
import { useState } from "react";
import { PiXBold } from "react-icons/pi";

export default function Page() {
  const [open, setOpen] = useState(false);
  const showContact = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex flex-col gap-4 py-8 md:gap-8 lg:flex-row">
      <aside className="top-8 flex h-max max-w-full flex-col gap-4 lg:sticky lg:max-w-[40%]">
        <Section delay={1}>
          <Profile showContact={showContact} />
        </Section>

        {open && (
          <Section delay={0}>
            <AltContactForm showContact={showContact} />
          </Section>
        )}

        <Section delay={2}>
          <article className="prose prose-sm max-w-full dark:prose-invert sm:prose-base">
            <p>
              Merhaba, adım Ozan Arslan. <br /> <b>ODTÜ Psikoloji</b> mezunuyum.
              2023&apos;ten beri web geliştirmeyle ilgileniyorum. Kendi kendime
              HTML, CSS ve JavaScript öğrendim ve bu işten çok keyif aldığımı
              fark ettim. Mühendis arkadaşlarımın önerisiyle de React kullanmaya
              başladım. Şu anda <b>Next.js</b> kullanarak full-stack web
              uygulamaları geliştiriyorum. Sırada <b>Expo</b> ile evrensel mobil
              uygulamalar geliştirmek var.
            </p>
          </article>
        </Section>

        <TechStack />
      </aside>

      <main className="flex max-w-full flex-col gap-4 lg:max-w-[60%]">
        <Projects />
      </main>
    </div>
  );
}
