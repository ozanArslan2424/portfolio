import config from "../lib/config.json";

export type Lang = "tr" | "en";

export type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  about: {
    title: string;
    description: string;
    tech: typeof config.about.tech;
    links: typeof config.about.links;
  };
  projects: {
    title: string;
    description: string;
    tech: string[];
    live: string;
    repo: string;
    images: { name: string; src: string }[];
  }[];
  resume: {
    title: string;
    edu: {
      title: string;
      array: { name: string; date: string; info: string }[];
    };
    exp: {
      title: string;
      array: { name: string; date: string; info: string }[];
    };
    soc: {
      title: string;
      array: { name: string; date: string; role?: string }[];
    };
    con: {
      title: string;
      array: { name: string; href: string; label: string }[];
    };
    lang: {
      title: string;
      array: { name: string; level: string }[];
    };
    tech: {
      title: string;
      array: { name: string; rating: number }[];
    };
    tool: {
      title: string;
      array: { name: string; rating: number }[];
    };
    cert: {
      title: string;
      array: { name: string; info: string }[];
    };
    hob: {
      title: string;
      array: string[];
    };
  };
};
