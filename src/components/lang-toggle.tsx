import { useEffect, useState } from "react";
import { useConfig } from "../hooks/use-config";
import { Icon } from "./icons";

export function LangToggle() {
  const [mounted, setMounted] = useState(false);
  const { lang, setLang } = useConfig();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="circle-button overflow-hidden" disabled>
        <Icon variant="loader" />
        <span className="sr-only">Disabled language toggle</span>
      </button>
    );
  }

  return (
    <button
      className="circle-button overflow-hidden"
      onClick={() => setLang(lang === "en" ? "tr" : "en")}
    >
      <Icon variant={lang === "tr" ? "lang-en" : "lang-tr"} />
      <span className="sr-only">{lang === "tr" ? "English" : "Türkçe"}</span>
    </button>
  );
}
