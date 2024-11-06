/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import config from "../lib/config.json";
import { Lang, LangContextType } from "../lib/types";

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const about = useMemo(
    () => ({
      title: config.about.title[lang],
      description: config.about.description[lang],
      tech: config.about.tech,
      links: config.about.links,
    }),
    [lang],
  );

  const projects = useMemo(
    () =>
      config.projects.map((p) => ({
        title: p.title[lang],
        description: p.description[lang],
        tech: p.tech,
        live: p.live,
        repo: p.repo,
        images: p.images,
      })),
    [lang],
  );

  const resume = useMemo(
    () => ({
      title: config.resume.title[lang],
      edu: {
        title: config.resume.edu.title[lang],
        array: config.resume.edu.array[lang],
      },
      exp: {
        title: config.resume.exp.title[lang],
        array: config.resume.exp.array[lang],
      },
      soc: {
        title: config.resume.soc.title[lang],
        array: config.resume.soc.array[lang],
      },
      con: {
        title: config.resume.con.title[lang],
        array: config.resume.con.array,
      },
      lang: {
        title: config.resume.lang.title[lang],
        array: config.resume.lang.array[lang],
      },
      tech: {
        title: config.resume.tech.title[lang],
        array: config.resume.tech.array,
      },
      tool: {
        title: config.resume.tool.title[lang],
        array: config.resume.tool.array,
      },
      cert: {
        title: config.resume.cert.title[lang],
        array: config.resume.cert.array,
      },
      hob: {
        title: config.resume.hob.title[lang],
        array: config.resume.hob.array[lang],
      },
    }),
    [lang],
  );

  useEffect(() => {
    const locale = navigator.language;
    const localeLang = locale.split("-")[0];
    const langIsUsable = ["en", "tr"].includes(localeLang);

    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
      setLang(savedLang as Lang);
    } else if (langIsUsable) {
      setLang(localeLang as Lang);
    } else {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, about, projects, resume }}>
      {children}
    </LangContext.Provider>
  );
};
