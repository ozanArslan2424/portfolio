import { LangSwitch } from "client/components/lang-switch";
import { ThemeSwitch } from "client/components/theme-switch";
import { Rating } from "client/pages/resume/rating";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";

export function ResumePage() {
	const resumeRef = useRef<HTMLDivElement>(null);
	const { t } = useTranslation("resume");

	const downloadResume = useReactToPrint({
		contentRef: resumeRef,
		documentTitle: `Ozan Arslan - ${t("print.title")}`,
		onPrintError(errorLocation, error) {
			console.error(errorLocation, error);
			alert(t("print.error"));
		},
	});

	function makeSentence(input: string[]) {
		if (!input[0]) return "";
		const first = input[0].charAt(0).toLocaleUpperCase() + input[0].slice(1);
		const rest = input.slice(1);
		if (!rest) return first + ".";
		return [first, ...rest].join(", ") + ".";
	}

	const eduItems = t("resume.edu.items", { returnObjects: true }) as { name: string; date: string; info: string }[];
	const expItems = t("resume.exp.items", { returnObjects: true }) as { name: string; date: string; info: string }[];
	const socItems = t("resume.soc.items", { returnObjects: true }) as string[];
	const contactItems = t("resume.contact.items", { returnObjects: true }) as {
		name: string;
		label: string;
		href: string;
	}[];
	const languagesItems = t("resume.languages.items", { returnObjects: true }) as {
		name: string;
		level: string;
	}[];
	const techItems = t("resume.tech.items", { returnObjects: true }) as {
		name: string;
		level: number;
	}[];
	const toolItems = t("resume.tool.items", { returnObjects: true }) as {
		name: string;
		level: number;
	}[];
	const certificateItems = t("resume.cert.items", { returnObjects: true }) as {
		name: string;
		info: string;
	}[];
	const hobItems = t("resume.hob.items", { returnObjects: true }) as string[];

	return (
		<div className="flex flex-col gap-2 sm:-mt-8">
			<div className="flex items-center justify-end gap-2">
				<LangSwitch className="ghost" />
				<ThemeSwitch className="ghost" />
				<button className="sm" onClick={downloadResume}>
					Print
				</button>
			</div>

			<div className="mx-auto max-w-4xl overflow-hidden rounded-lg border">
				<div className="print-target" ref={resumeRef}>
					<article className="resume" id="#resume">
						<header>
							<h1>Ozan Arslan</h1>
							<p>{t("resume.title")}</p>
						</header>

						<main>
							<div className="left">
								<section>
									<h2>{t("resume.edu.title")}</h2>
									<ul>
										{eduItems.map((item, i) => (
											<li key={i}>
												<h3>
													<span>{item.name}</span>
													<span>{item.date}</span>
												</h3>
												<p>{item.info}</p>
											</li>
										))}
									</ul>
								</section>
								<section>
									<h2>{t("resume.exp.title")}</h2>
									<ul>
										{expItems.map((item, i) => (
											<li key={i}>
												<h3>
													<span>{item.name}</span>
													<span>{item.date}</span>
												</h3>
												<p>{item.info}</p>
											</li>
										))}
									</ul>
								</section>
								<section>
									<h2>{t("resume.soc.title")}</h2>
									<ul>
										<li>
											<p>{socItems.join(", ")}</p>
										</li>
									</ul>
								</section>

								<section>
									<h2>{t("resume.soc.title")}</h2>
									<p>{makeSentence(socItems)}</p>
								</section>

								<section>
									<h2>{t("resume.hob.title")}</h2>
									<p>{makeSentence(hobItems)}</p>
								</section>
							</div>
							<div className="right">
								<img src="/foto.png" alt="Ozan Arslan" width={220} height={220} />

								<section>
									<h2>{t("resume.contact.title")}</h2>
									<ul>
										<li>
											<h4>Ankara, Türkiye</h4>
										</li>
										{contactItems.map((item, i) => (
											<li key={i}>
												<h4>{item.name}</h4>
												<a href={item.href}>{item.label}</a>
											</li>
										))}
									</ul>
								</section>

								<section>
									<h2>{t("resume.languages.title")}</h2>
									<ul>
										{languagesItems.map((item, i) => (
											<li key={i}>
												<h4>{item.name}</h4>
												<p>{item.level}</p>
											</li>
										))}
									</ul>
								</section>

								<section>
									<h2>{t("resume.tech.title")}</h2>
									<ul>
										{techItems.map((item, i) => (
											<li key={i}>
												<h4>{item.name}</h4>
												<Rating value={item.level} />
											</li>
										))}
									</ul>
								</section>

								<section>
									<h2>{t("resume.tool.title")}</h2>
									<ul>
										{toolItems.map((item, i) => (
											<li key={i}>
												<h4>{item.name}</h4>
												<Rating value={item.level} />
											</li>
										))}
									</ul>
								</section>

								<section>
									<h2>{t("resume.cert.title")}</h2>
									<ul>
										{certificateItems.map((item, i) => (
											<li key={i}>
												<h4>{item.name}</h4>
												<p>{item.info}</p>
											</li>
										))}
									</ul>
								</section>
							</div>
						</main>
					</article>
				</div>
			</div>
		</div>
	);
}
