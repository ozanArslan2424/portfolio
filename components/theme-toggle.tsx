"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LoadingIcon } from "./ui/loading-icon";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="circle-button h-7 w-7 sm:h-8 sm:w-8" disabled>
        <LoadingIcon />
      </button>
    );

  return (
    <button
      className="circle-button h-7 w-7 sm:h-8 sm:w-8"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
