import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enerror from "./locales/en/error.json";
import trerror from "./locales/tr/error.json";
import encommon from "./locales/en/common.json";
import trcommon from "./locales/tr/common.json";
import enabout from "./locales/en/about.json";
import trabout from "./locales/tr/about.json";
import enprojects from "./locales/en/projects.json";
import trprojects from "./locales/tr/projects.json";
import enresume from "./locales/en/resume.json";
import trresume from "./locales/tr/resume.json";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				error: enerror,
				common: encommon,
				about: enabout,
				projects: enprojects,
				resume: enresume,
			},
			tr: {
				error: trerror,
				common: trcommon,
				about: trabout,
				projects: trprojects,
				resume: trresume,
			},
		},
		detection: {
			order: ["localStorage", "navigator", "htmlTag"],
			caches: ["localStorage"],
		},
	});

export default i18n;
