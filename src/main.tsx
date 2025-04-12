import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles/index.css";
import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "./components/config-provider";
import { Blobs } from "./components/blobs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ConfigProvider>
        <div className="min-h-screen w-full">
          <Blobs />
          <App />
        </div>
      </ConfigProvider>
    </ThemeProvider>
  </StrictMode>,
);
