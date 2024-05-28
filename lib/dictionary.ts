import type { Locale } from "@/i18n.config";
import "server-only";

const dictionaries = {
  en: () =>
    import("@/lib/dictionaries/en.json").then((module) => module.default),
  tr: () =>
    import("@/lib/dictionaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
