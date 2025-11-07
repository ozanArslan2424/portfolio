import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMounted } from "client/hooks/use-is-mounted";
import { cn } from "client/lib/utils";

export function ThemeSwitch({ className }: { className?: string }) {
	const mounted = useIsMounted();
	const { setTheme, resolvedTheme } = useTheme();

	function toggleTheme() {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	}

	if (!mounted) return <button className={cn("icon", className)} type="button" disabled />;

	return (
		<button type="button" className={cn("icon", className)} onClick={toggleTheme}>
			{resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
		</button>
	);
}
