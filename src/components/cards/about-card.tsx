import { GithubIcon } from "client/components/icons/github-icon";
import { LinkedinIcon } from "client/components/icons/linkedin-icon";
import { LocationIcon } from "client/components/icons/location-icon";
import { MailIcon } from "client/components/icons/mail-icon";
import { LangSwitch } from "client/components/lang-switch";
import { ThemeSwitch } from "client/components/theme-switch";
import { useTranslation } from "react-i18next";

export function AboutCard() {
	const { t } = useTranslation("about");

	const skills = [
		"Git",
		"HTML",
		"CSS",
		"JavaScript",
		"TypeScript",
		"React",
		"Next.js",
		"React Native",
		"Node.js",
		"Express",
		"Elysia.js",
		"Tailwind CSS",
		"Svelte",
		"Go",
		"Vercel",
	];

	const contact = [
		{ Icon: LocationIcon, label: "Ankara, Türkiye", href: null },
		{ Icon: MailIcon, label: "ozanarslanodtu@gmail.com", href: "mailto:ozanarslanodtu@gmail.com" },
		{ Icon: GithubIcon, label: "github/ozanArslan2424", href: "https://github.com/ozanArslan2424" },
		{ Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/ozan-arslan-214513209/" },
	];

	return (
		<div className="card sticky top-4">
			<header>
				<div className="flex items-center gap-3">
					<div className="z-10 origin-top-left cursor-zoom-in transition-all hover:scale-[550%]">
						<img src="/foto.png" className="spring-spin-once h-16 w-16 rounded-full" height={352} width={352} />
					</div>
					<div>
						<h1>Ozan Arslan</h1>
						<p className="mt-1 text-sm opacity-80">{t("title")}</p>
					</div>
				</div>

				<div className="absolute top-2 right-2 flex gap-2">
					<LangSwitch className="ghost" />
					<ThemeSwitch className="ghost" />
				</div>
			</header>

			<div className="flex flex-col gap-4 px-6 py-4">
				<p className="text-sm leading-relaxed text-pretty opacity-90">{t("bio")}</p>

				<div className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<span key={skill} className="chip soft xs">
							{skill}
						</span>
					))}
				</div>

				<div className="flex flex-col gap-3">
					{contact.map(({ Icon, label, href }, i) => (
						<div key={i} className="flex items-center gap-3">
							<Icon className="h-4 w-4 opacity-70" />
							{href ? (
								<a href={href} className="text-sm hover:underline">
									{label}
								</a>
							) : (
								<span className="text-sm">{label}</span>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
