import { useContext } from "react";
import type { ConfigContextType } from "../lib/types";
import { ConfigContext } from "../lib/config-context";

export function useConfig(): ConfigContextType {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useLang must be used within a LangProvider");
  return context;
}
