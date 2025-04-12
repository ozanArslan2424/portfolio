import { useLayoutEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import config from "../lib/config.json";
import type { Lang } from "../lib/types";
import { ConfigContext } from "../lib/config-context";

export function ConfigProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<Lang>("en");
  const configMemo = useMemo(() => config[lang], [lang]);

  useLayoutEffect(() => {
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

  function handleChangeLang(value: Lang) {
    setLang(value);
    localStorage.setItem("lang", value);
  }

  return (
    <ConfigContext.Provider
      value={{
        lang,
        setLang: handleChangeLang,
        content: configMemo,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
