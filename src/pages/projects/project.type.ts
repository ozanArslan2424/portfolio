export type ProjectType = {
	title: string;
	description: string;
	tech: string[];
	links: { label: string; href: string }[];
	icon: { alt: string; src: string } | undefined;
	images: { alt: string; src: string }[];
};
