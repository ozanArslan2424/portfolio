import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "./icons";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="circle-button" disabled>
        <Icon variant="loader" />
        <span className="sr-only">Disabled theme toggle</span>
      </button>
    );

  return (
    <button
      className="circle-button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <span className="sr-only">
        {resolvedTheme === "light" ? "Dark mode" : "Light mode"}
      </span>
      {resolvedTheme === "light" ? (
        <Icon variant="theme-light" />
      ) : (
        <Icon variant="theme-dark" />
      )}
    </button>
  );
}
