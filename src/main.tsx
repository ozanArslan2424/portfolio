import "./lib/i18n.config.ts";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./nav/router";
import { ThemeProvider } from "next-themes";
import { Toaster } from "client/components/sonner";
import "./index.css";

const el = document.getElementById("root");

if (!el) throw new Error("DOM element not found.");

const root = ReactDOM.createRoot(el);

root.render(
	<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
		<RouterProvider router={router} />
		<Toaster />
	</ThemeProvider>,
);
