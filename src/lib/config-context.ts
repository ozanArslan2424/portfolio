import { createContext } from "react";
import type { ConfigContextType } from "./types";

export const ConfigContext = createContext<ConfigContextType | undefined>(
  undefined,
);
