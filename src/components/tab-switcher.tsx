import { cn } from "client/lib/utils";
import { Link, useLocation } from "react-router";

type TabSwitcherProps = {
	tabs: {
		label: string;
		href: string;
	}[];
};

export function TabSwitcher({ tabs }: TabSwitcherProps) {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className="flex min-h-14 w-full items-baseline-last justify-center gap-6 pb-4">
			{tabs.map((tab) => (
				<Link
					key={tab.href}
					to={tab.href}
					className={cn(
						"hover:text-foreground inline-flex items-baseline-last justify-center font-black transition-all duration-300 ease-in-out",
						currentPath === tab.href ? "text-foreground text-3xl sm:text-4xl" : "text-foreground/70 text-lg sm:text-xl",
					)}
				>
					{tab.label}
				</Link>
			))}
		</div>
	);
}
