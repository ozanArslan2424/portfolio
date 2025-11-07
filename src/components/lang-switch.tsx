import { useIsMounted } from "client/hooks/use-is-mounted";
import { cn } from "client/lib/utils";
import { useTranslation } from "react-i18next";
import { LangTrIcon } from "client/components/icons/lang-tr-icon";
import { LangEnIcon } from "client/components/icons/lang-en-icon";

export function LangSwitch({ className }: { className?: string }) {
	const mounted = useIsMounted();
	const { i18n } = useTranslation();

	function toggleLang() {
		i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
	}

	if (!mounted) return <button className={cn("icon", className)} type="button" disabled />;

	return (
		<button type="button" className={cn("icon", className)} onClick={toggleLang}>
			{i18n.language === "en" ? <LangTrIcon /> : <LangEnIcon />}
			<span className="sr-only">{i18n.language === "tr" ? "English" : "Türkçe"}</span>
		</button>
	);
}
