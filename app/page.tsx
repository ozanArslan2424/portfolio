import Header from "@/components/layout/header";
import ProjectInfoCard from "@/components/layout/project-card";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-10 md:px-6">
            <Image src="/foto.jpeg" alt="Ozan Arslan" width={200} height={200} className="aspect-square rounded-full" />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Ozan Arslan</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-md/relaxed xl:text-lg/relaxed dark:text-gray-400">
                Psikolog ve front-end yazılım geliştirici.
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 text-center md:gap-10 md:px-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">Hakkımda</h2>
              <p className="mx-auto max-w-[800px] text-gray-500 md:text-base/relaxed lg:text-md/relaxed xl:text-lg/relaxed dark:text-gray-400">
                ODTÜ Psikoloji mezunuyum, 2023 yılından beri front-end yazılım geliştirme öğreniyorum.
                <br />
                <br />
                Psikoloji alanında akademik hayatıma devam ederken, yazılım geliştirme alanında da kendimi geliştirmek
                istediğime karar verdim ve aldım elime HTML&apos;i.
                <br />
                <br />
                Daha sonrasında mühendis arkadaşlarımın da önerileriyle React ve Next.js öğrenmeye başladım.
                <br />
                <br />
                Şu an için front-end alanında kendimi geliştirmeye devam ediyorum.
                <br />
                <br />
                Aşağıda projelerimden bazılarını görebilirsiniz.
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col gap-4 px-4 text-center md:gap-10 md:px-6">
            <div className="flex gap-4 mx-12 md:mx-24 lg:mx-32 flex-wrap items-center justify-center">
              <ProjectInfoCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
