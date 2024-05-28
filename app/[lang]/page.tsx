import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Motion } from "@/components/ui/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="container grid grid-flow-row gap-4 px-4 py-8 md:grid-flow-col md:grid-cols-[40%_auto] md:gap-6 md:px-4">
      <About lang={lang} about={page.about} />

      <Motion>
        <Tabs defaultValue="projects">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">
              {page.tabs.projects.sectionTitle}
            </TabsTrigger>
            <TabsTrigger value="cv">{page.tabs.cv.sectionTitle}</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <main className="flex max-w-full flex-col gap-4 ">
              <Projects projects={page.tabs.projects.list} />
            </main>
          </TabsContent>
          <TabsContent value="cv">
            <Motion className="card h-full min-h-fit">
              <iframe
                src={page.tabs.cv.src}
                className="h-[85dvh] w-full"
                title={page.tabs.cv.title}
              />
            </Motion>
          </TabsContent>
        </Tabs>
      </Motion>
    </div>
  );
}
