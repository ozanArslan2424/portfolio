import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { About } from "./components/about";
import { useLang } from "./components/lang-context";

import { Projects } from "./components/projects";
import Resume from "./components/resume";

export default function App() {
  const [tab, setTab] = useState<"projects" | "resume">("projects");

  const { lang } = useLang();

  return (
    <div
      lang={lang}
      className="container grid grid-flow-row gap-4 px-4 py-8 lg:grid-flow-col lg:grid-cols-[35%_auto] lg:gap-6 lg:px-4"
    >
      <About />
      <div>
        <nav className="card mb-2 flex items-center gap-2 p-2">
          <button
            onClick={() => setTab("projects")}
            className={`link w-full justify-center border border-primary/20 text-base ${
              tab === "projects" ? "bg-accent" : "bg-background"
            }`}
          >
            {lang === "en" ? "Projects" : "Projeler"}
          </button>
          <button
            onClick={() => setTab("resume")}
            className={`link w-full justify-center border border-primary/20 text-base ${
              tab === "resume" ? "bg-accent" : "bg-background"
            }`}
          >
            {lang === "en" ? "Resume" : "Özgeçmiş"}
          </button>
        </nav>

        <AnimatePresence>{tab === "projects" && <Projects />}</AnimatePresence>
        <AnimatePresence>{tab === "resume" && <Resume />}</AnimatePresence>
      </div>
    </div>
  );
}
