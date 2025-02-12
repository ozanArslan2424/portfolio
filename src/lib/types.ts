import config from "../lib/config.json";

export type Lang = keyof typeof config;

export type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  about: (typeof config)[Lang]["about"];
  projects: (typeof config)[Lang]["projects"];
  resume: (typeof config)[Lang]["resume"];
};
