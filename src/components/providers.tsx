import { ThemeProvider } from "next-themes";
import React from "react";
import { Blobs } from "./blobs";
import { LangProvider } from "./lang-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LangProvider>
        <div className="min-h-screen w-full">
          <Blobs />
          {children}
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}
