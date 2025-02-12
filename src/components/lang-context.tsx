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

  const configMemo = useMemo(() => config[lang], [lang]);

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
    <LangContext.Provider
      value={{
        lang,
        setLang,
        about: configMemo.about,
        projects: configMemo.projects,
        resume: configMemo.resume,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
