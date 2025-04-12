import { useEffect, useState } from "react";
import type { TabSwitcherOptions, TabSwitcherSettings } from "../lib/types";

export function useTabSwitcher<T extends string>(
  options: TabSwitcherOptions<T>,
  settings?: TabSwitcherSettings<T>,
) {
  const searchParamName = settings?.searchParamName ?? "tab";
  const [value, setValue] = useState(settings?.initialTab ?? options[0].value);

  useEffect(() => {
    if (settings?.syncSearch) {
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get(searchParamName) as T;
      setValue(tabParam);
    }
    if (settings?.syncHash) {
      const hash = window.location.hash.slice(1);
      setValue(hash as T);
    }
    if (settings?.syncPathname) {
      const pathname = window.location.pathname.slice(1);
      setValue(pathname as T);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (tab: T) => {
    setValue(tab);
    settings?.onTabChange?.(tab);
    if (settings?.syncSearch) {
      window.history.pushState({}, "", `?${searchParamName}=${tab}`);
    }
    if (settings?.syncHash) {
      window.history.pushState({}, "", `#${tab}`);
    }
    if (settings?.syncPathname) {
      window.history.pushState({}, "", `/${tab}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    options,
    value,
    onTabChange: handleTabChange,
  };
}
