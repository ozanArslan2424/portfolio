import { Lightbox } from "client/components/lightbox";
import { useLightbox } from "client/hooks/use-lightbox";
import type { ProjectType } from "client/pages/projects/project.type";
import { useTranslation } from "react-i18next";

export function ProjectCard({ project }: { project: ProjectType }) {
	const { t } = useTranslation("projects");
	const lightbox = useLightbox(
		project.images.map((img) => ({
			src: `/${img.src}`,
			alt: img.alt,
		})),
	);

	return (
		<article className="card">
			<header>
				<div className="flex gap-4">
					{project.icon ? (
						<img
							src={`/${project.icon.src}`}
							alt={project.icon.alt}
							className="h-20 w-20 rounded-lg"
							width={80}
							height={80}
						/>
					) : (
						<div className="bg-background text-foreground/50 flex aspect-square h-20 w-20 shrink-0 items-center justify-center rounded-lg border">
							{t("noIcon")}
						</div>
					)}

					<div className="flex h-20 flex-col justify-between gap-2">
						<h2>{project.title}</h2>
						<nav className="flex items-center gap-3" aria-label={t("links")}>
							{project.links.map((link) => (
								<a key={link.href} href={link.href} target="_blank" className="button sm accent">
									{link.label}
								</a>
							))}
						</nav>
					</div>
				</div>
			</header>
			<div className="flex flex-col gap-3 px-6 py-4">
				<p className="text-pretty">{project.description}</p>

				<section>
					<h3 className="sr-only">{t("techUsed")}</h3>
					<ul className="flex flex-wrap items-center gap-2" aria-label={t("techUsed")}>
						{project.tech.map((tech, i) => (
							<li key={i} className="chip soft xs hover:text-primary">
								{tech}
							</li>
						))}
					</ul>
				</section>

				<section>
					<h3 className="sr-only">{t("images")}</h3>
					<ul className="flex max-w-full items-center gap-3 overflow-auto">
						{lightbox.images.map((image, i) => (
							<li key={i} className="shrink-0">
								<img
									src={image.src}
									alt={image.alt}
									loading="lazy"
									className="aspect-video h-36 shrink-0 cursor-zoom-in rounded-lg transition-all"
									onClick={() => lightbox.onOpen(i)}
								/>
							</li>
						))}
					</ul>
				</section>

				<Lightbox {...lightbox} />
			</div>
		</article>
	);
}
