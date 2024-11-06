import { motion } from "framer-motion";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLang } from "./lang-context";
import "./styles/resume.css";

export default function Resume() {
  const { resume, lang } = useLang();

  const resumeRef = useRef<HTMLDivElement>(null);
  const downloadResume = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `Ozan Arslan - ${lang === "en" ? "Resume" : "Özgeçmiş"}`,
    onPrintError(errorLocation, error) {
      console.error(errorLocation, error);
      alert(
        "An error occurred while downloading the resume. Check the console for more information.",
      );
    },
  });

  return (
    <motion.div
      className="card min-h-fit"
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1, delay: 0.25 }}
    >
      <div className="print-target" ref={resumeRef}>
        <div
          // className="relative avenir-next aspect-[1000/1414] w-full"
          className="avenir-next"
          id="#resume"
        >
          <div
            // className="absolute left-0 top-0 -z-10 h-32 w-full bg-muted p-6"
            className="resume-header-bg"
          ></div>
          <div
            // className="grid max-w-full grid-cols-[60%_40%] py-6"
            className="resume-grid"
          >
            <main
              //className="flex flex-col gap-y-10 px-6"
              className="resume-main"
            >
              {/* HEADER */}
              <header>
                <h1
                  //className="text-3xl font-bold lg:text-6xl"
                  className="resume-header-h1"
                >
                  Ozan Arslan
                </h1>
                <p
                  //className="pl-1 font-semibold"
                  className="resume-header-p"
                >
                  {resume.title}
                </p>
              </header>
              <div>
                {/* EDUCATIONS */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.edu.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.edu.array.map((edu, i) => (
                      <div
                        key={i}
                        // className="pb-2"
                        className="resume-section-div-p"
                      >
                        <div
                          // className="flex items-baseline justify-between"
                          className="resume-section-div-p-r"
                        >
                          <h3
                            //  className="font-semibold"
                            className="resume-section-div-p-r-h3"
                          >
                            {edu.name}
                          </h3>
                          <p
                            // className="text-right font-semibold"
                            className="resume-section-div-p-r-p"
                          >
                            {edu.date}
                          </p>
                        </div>
                        <p>{edu.info}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* EXPERIENCES */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.exp.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.exp.array.map((exp, i) => (
                      <div
                        key={i}
                        // className="pb-2"
                        className="resume-section-div-p"
                      >
                        <div
                          // className="flex items-baseline justify-between"
                          className="resume-section-div-p-r"
                        >
                          <h3
                            //  className="font-semibold"
                            className="resume-section-div-p-r-h3"
                          >
                            {exp.name}
                          </h3>
                          <p
                            // className="text-right font-semibold"
                            className="resume-section-div-p-r-p"
                          >
                            {exp.date}
                          </p>
                        </div>
                        <p
                          lang={lang}
                          // className="hyphens-auto"
                          className="hyphenate"
                        >
                          {exp.info}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SOCIETIES */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.soc.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.soc.array.map((soc, i) => (
                      <div
                        key={i}
                        // className="pb-2"
                        className="resume-section-div-p"
                      >
                        <div
                          // className="flex items-baseline justify-between"
                          className="resume-section-div-p-r"
                        >
                          <h3
                            //  className="font-semibold"
                            className="resume-section-div-p-r-h3"
                          >
                            {soc.name}
                          </h3>
                          <strong
                            // className="text-right font-semibold"
                            className="resume-section-div-p-r-p"
                          >
                            {soc.date}
                          </strong>
                        </div>
                        {soc.role && <p>{soc.role}</p>}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </main>
            <aside
              // className="space-y-10 px-6"
              className="resume-aside"
            >
              {/* IMAGE */}
              <div>
                <img
                  src="/images/foto.jpeg"
                  alt="Ozan Arslan"
                  width={200}
                  height={200}
                  // className="m-auto aspect-square h-[100px] w-[100px] scale-110 rounded-full lg:h-[200px] lg:w-[200px]"
                  className="resume-image"
                />
              </div>
              <div>
                {/* CONTACT */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.con.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    <p
                      //  className="font-semibold"
                      className="resume-section-div-p-r-h3"
                    >
                      Ankara / Türkiye
                    </p>
                    {resume.con.array.map((con, i) => (
                      <p
                        key={i}
                        // className="flex items-baseline justify-between"
                        className="resume-section-div-p-r"
                      >
                        <strong
                          //  className="font-semibold"
                          className="resume-section-div-p-r-h3"
                        >
                          {con.name}
                        </strong>
                        <a href={con.href} className="resume-section-div-p-r-a">
                          {con.label}
                        </a>
                      </p>
                    ))}
                  </div>
                </section>

                {/* LANGUAGES */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.lang.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.lang.array.map((lang, i) => (
                      <p
                        key={i}
                        // className="flex items-baseline justify-between"
                        className="resume-section-div-p-r"
                      >
                        <strong
                          //  className="font-semibold"
                          className="resume-section-div-p-r-h3"
                        >
                          {lang.name}
                        </strong>
                        <span>{lang.level}</span>
                      </p>
                    ))}
                  </div>
                </section>

                {/* TECH STACK */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.tech.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.tech.array.map((tech, i) => (
                      <div
                        key={i}
                        // className="flex items-center justify-between"
                        className="resume-section-div-p-r-flex"
                      >
                        <strong
                          //  className="font-semibold"
                          className="resume-section-div-p-r-h3"
                        >
                          {tech.name}
                        </strong>
                        <Rating value={tech.rating} />
                      </div>
                    ))}
                  </div>
                </section>

                {/* TOOLS */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.tool.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.tool.array.map((tool, i) => (
                      <div
                        key={i}
                        //className="flex items-center justify-between"
                        className="resume-section-div-p-r-flex"
                      >
                        <strong
                          //  className="font-semibold"
                          className="resume-section-div-p-r-h3"
                        >
                          {tool.name}
                        </strong>
                        <Rating value={tool.rating} />
                      </div>
                    ))}
                  </div>
                </section>

                {/* CERTIFICATES */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.cert.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    {resume.cert.array.map((cert, i) => (
                      <p
                        key={i}
                        // className="flex items-baseline justify-between"
                        className="resume-section-div-p-r"
                      >
                        <strong
                          //  className="font-semibold"
                          className="resume-section-div-p-r-h3"
                        >
                          {cert.name}
                        </strong>
                        <span>{cert.info}</span>
                      </p>
                    ))}
                  </div>
                </section>

                {/* HOBBIES */}
                <section
                  //className="pb-4"
                  className="resume-section"
                >
                  <h2
                    // className="pb-1 text-sm font-bold lg:text-base"
                    className="resume-section-h2"
                  >
                    {resume.hob.title}
                  </h2>
                  <div
                    // className="flex flex-col text-xs lg:text-sm"
                    className="resume-section-div"
                  >
                    <p>
                      {resume.hob.array.map((hob, i) => (
                        <span key={i}>
                          {i === 0
                            ? hob.charAt(0).toUpperCase() + hob.slice(1)
                            : hob}
                          {i === resume.hob.array.length - 1 ? "." : ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <button
        className="resume-download-button"
        onClick={() => downloadResume()}
      >
        {lang === "en" ? "Download resume" : "Özgeçmişi indir"}
      </button>
    </motion.div>
  );
}

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: value }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-full border border-[#374151]"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="#374151"
            strokeWidth="10"
            fill="white"
          />
          <circle cx="12" cy="12" r="7" fill="#374151" />
        </svg>
      ))}

      {Array.from({ length: 5 - value }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-full border border-[#374151]"
        ></svg>
      ))}
    </div>
  );
}
