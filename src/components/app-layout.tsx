import { TabSwitcher } from "client/components/tab-switcher";
import { paths } from "client/nav/paths";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

export function AppLayout() {
	const { t } = useTranslation("common");

	return (
		<div className="relative m-0 grid min-h-screen min-w-[320px]">
			<div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:gap-6 md:py-6 lg:px-6">
				<div className="flex items-center justify-center">
					<TabSwitcher
						tabs={[
							{ label: t("resume"), href: paths.resume },
							{ label: t("projects"), href: paths.projects },
							{ label: t("blog"), href: paths.blog },
						]}
					/>
				</div>

				<Outlet />
			</div>
		</div>
	);
}
