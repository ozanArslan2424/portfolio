"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LoadingIcon } from "./loading-icon";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button
        className="hover:border-border rounded-full border border-transparent p-2 hover:bg-transparent"
        disabled
      >
        <LoadingIcon />
      </button>
    );

  return (
    <button
      className="hover:border-border rounded-full border border-transparent p-2 hover:bg-transparent"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
