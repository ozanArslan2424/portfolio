import { AnimatePresence } from "framer-motion";
import { About } from "./components/about";
import { ResumeTab } from "./tabs/resume";
import { useTabSwitcher } from "./hooks/use-tab-switcher";
import { TabSwitcher } from "./components/tab-switcher";
import { useConfig } from "./hooks/use-config";
import { ProjectsTab } from "./tabs/projects";

export function App() {
  const { lang } = useConfig();
  const tabSwitcher = useTabSwitcher(
    [
      { label: { tr: "Projeler", en: "Projects" }, value: "" },
      { label: { tr: "Özgeçmiş", en: "Resume" }, value: "resume" },
    ],
    { syncPathname: true },
  );

  return (
    <div
      lang={lang}
      className="container mx-auto grid grid-flow-row grid-rows-1 gap-4 px-4 py-8 lg:grid-flow-col lg:grid-cols-[35%_65%] lg:gap-6"
    >
      <About />
      <div>
        <TabSwitcher {...tabSwitcher} />

        <AnimatePresence>
          {tabSwitcher.value === "" && <ProjectsTab />}
        </AnimatePresence>
        <AnimatePresence>
          {tabSwitcher.value === "resume" && <ResumeTab />}
        </AnimatePresence>
      </div>
    </div>
  );
}
