import { paths } from "client/nav/paths";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export function ErrorCard({ error }: { error: Error | null | string }) {
	const { t } = useTranslation("error");
	const title = t("unexpected");
	const description = typeof error === "string" ? error : error?.message || t("retry");

	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			<div className="card">
				<h1>{title}</h1>
				<p>{description}</p>
				<Link to={paths.projects}>
					<button>{t("back")}</button>
				</Link>
			</div>
		</div>
	);
}
