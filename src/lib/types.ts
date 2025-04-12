import type config from "../lib/config.json";

export type Lang = keyof typeof config;

export type ConfigContextType = {
  lang: Lang;
  setLang: (value: Lang) => void;
  content: (typeof config)[Lang];
};

export type IconVariant =
  | "github"
  | "linkedin"
  | "mail"
  | "cross"
  | "link"
  | "lang-en"
  | "lang-tr"
  | "theme-light"
  | "theme-dark"
  | "loader";

export type TabSwitcherOptions<T extends string> = {
  label: { tr: string; en: string };
  value: T;
}[];

export type TabSwitcherSettings<T extends string> = {
  initialTab?: T;
  onTabChange?: (tab: T) => void;
  syncSearch?: boolean;
  syncHash?: boolean;
  syncPathname?: boolean;
  searchParamName?: string;
};
