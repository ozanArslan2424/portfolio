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
        <article className="avenir-next" id="#resume">
          <div className="resume-header-bg"></div>
          <div className="resume-grid">
            <main className="resume-main">
              {/* HEADER */}
              <address>
                <h1 className="resume-header-h1">Ozan Arslan</h1>
                <p className="resume-header-p">{resume.title}</p>
              </address>
              <div>
                {/* EDUCATIONS */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.edu.title}</h2>
                  <div className="resume-section-div">
                    {resume.edu.array.map((edu, i) => (
                      <div key={i} className="resume-section-div-p">
                        <div className="resume-section-div-p-r">
                          <h3 className="resume-section-div-p-r-h3">
                            {edu.name}
                          </h3>
                          <p className="resume-section-div-p-r-p">{edu.date}</p>
                        </div>
                        <p>{edu.info}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* EXPERIENCES */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.exp.title}</h2>
                  <div className="resume-section-div">
                    {resume.exp.array.map((exp, i) => (
                      <div key={i} className="resume-section-div-p">
                        <div className="resume-section-div-p-r">
                          <h3 className="resume-section-div-p-r-h3">
                            {exp.name}
                          </h3>
                          <p className="resume-section-div-p-r-p">{exp.date}</p>
                        </div>
                        <p lang={lang} className="hyphenate">
                          {exp.info}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SOCIETIES */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.soc.title}</h2>
                  <div className="resume-section-div">
                    {resume.soc.array.map((soc, i) => (
                      <div key={i} className="resume-section-div-p">
                        <div className="resume-section-div-p-r">
                          <h3 className="resume-section-div-p-r-h3">
                            {soc.name}
                          </h3>
                          <strong className="resume-section-div-p-r-p">
                            {soc.date}
                          </strong>
                        </div>
                        {soc.role && <p>{soc.role}</p>}
                      </div>
                    ))}
                  </div>
                  <div className="resume-section-div">
                    <p className="resume-section-div-p-r-h3">
                      {lang === "en" ? "Other" : "Diğer"}
                    </p>
                    <p>{resume.soc.other.join(", ")}</p>
                  </div>
                </section>
              </div>
            </main>
            <aside className="resume-aside">
              {/* IMAGE */}
              <div>
                <img
                  src="/webp/foto.webp"
                  alt="Ozan Arslan"
                  width={200}
                  height={200}
                  className="resume-image"
                />
              </div>
              <div>
                {/* CONTACT */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.con.title}</h2>
                  <div className="resume-section-div">
                    <p className="resume-section-div-p-r-h3">
                      Ankara / Türkiye
                    </p>
                    {resume.con.array.map((con, i) => (
                      <p key={i} className="resume-section-div-p-r">
                        <strong className="resume-section-div-p-r-h3">
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
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.lang.title}</h2>
                  <div className="resume-section-div">
                    {resume.lang.array.map((lang, i) => (
                      <p key={i} className="resume-section-div-p-r">
                        <strong className="resume-section-div-p-r-h3">
                          {lang.name}
                        </strong>
                        <span>{lang.level}</span>
                      </p>
                    ))}
                  </div>
                </section>

                {/* TECH STACK */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.tech.title}</h2>
                  <div className="resume-section-div">
                    {resume.tech.array.map((tech, i) => (
                      <div key={i} className="resume-section-div-p-r-flex">
                        <strong className="resume-section-div-p-r-h3">
                          {tech.name}
                        </strong>
                        <Rating value={tech.rating} />
                      </div>
                    ))}
                  </div>
                </section>

                {/* TOOLS */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.tool.title}</h2>
                  <div className="resume-section-div">
                    {resume.tool.array.map((tool, i) => (
                      <div key={i} className="resume-section-div-p-r-flex">
                        <strong className="resume-section-div-p-r-h3">
                          {tool.name}
                        </strong>
                        <Rating value={tool.rating} />
                      </div>
                    ))}
                  </div>
                </section>

                {/* CERTIFICATES */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.cert.title}</h2>
                  <div className="resume-section-div">
                    {resume.cert.array.map((cert, i) => (
                      <p key={i} className="resume-section-div-p-r">
                        <strong className="resume-section-div-p-r-h3">
                          {cert.name}
                        </strong>
                        <span>{cert.info}</span>
                      </p>
                    ))}
                  </div>
                </section>

                {/* HOBBIES */}
                <section className="resume-section">
                  <h2 className="resume-section-h2">{resume.hob.title}</h2>
                  <div className="resume-section-div">
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
        </article>
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
