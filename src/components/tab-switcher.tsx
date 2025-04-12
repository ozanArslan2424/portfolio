import { useConfig } from "../hooks/use-config";
import type { TabSwitcherOptions } from "../lib/types";

type TabSwitcherProps<T extends string> = {
  options: TabSwitcherOptions<T>;
  value: T;
  onTabChange: (tab: T) => void;
};

export function TabSwitcher<T extends string>(props: TabSwitcherProps<T>) {
  const { options, value, onTabChange } = props;
  const { lang } = useConfig();

  return (
    <nav className="card mb-2 flex items-center gap-2 p-2">
      {options.map((tabItem) => (
        <button
          key={tabItem.value}
          onClick={() => onTabChange(tabItem.value)}
          className={`link border-primary/20 w-full justify-center border text-base ${
            value === tabItem.value ? "bg-accent" : "bg-background"
          }`}
        >
          {tabItem.label[lang]}
        </button>
      ))}
    </nav>
  );
}
