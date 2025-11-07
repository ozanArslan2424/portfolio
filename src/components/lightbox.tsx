import type { UseLightboxReturn } from "client/hooks/use-lightbox";
import { cn } from "client/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export function Lightbox({ isOpen, currentIndex, images, onClose, onNext, onPrev, onGoToSlide }: UseLightboxReturn) {
	const { t } = useTranslation("common");
	if (!isOpen) return null;

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
			onClick={handleBackdropClick}
			role="dialog"
			aria-modal="true"
		>
			<button onClick={onClose} className="secondary square absolute top-8 right-8" aria-label={t("close")}>
				<XIcon />
			</button>

			{images.length > 1 && (
				<button onClick={onPrev} className="secondary square" aria-label={t("prev")}>
					<ChevronLeftIcon />
				</button>
			)}

			<div className="relative mx-4 max-h-full max-w-4xl">
				<img
					src={images[currentIndex]?.src}
					alt={images[currentIndex]?.alt}
					className="max-h-[90vh] max-w-full rounded-lg object-contain"
				/>
				{images.length > 1 && (
					<div className="chip sm absolute bottom-4 left-1/2 -translate-x-1/2">
						{currentIndex + 1} / {images.length}
					</div>
				)}
			</div>

			{images.length > 1 && (
				<button onClick={onNext} className="secondary square" aria-label={t("next")}>
					<ChevronRightIcon />
				</button>
			)}

			{images.length > 1 && (
				<div className="absolute bottom-4 left-1/2 flex max-w-full -translate-x-1/2 transform gap-4 overflow-x-auto px-4 py-2">
					{images.map((image, index) => (
						<img
							role="button"
							key={index}
							src={image.src}
							alt={image.alt}
							onClick={() => onGoToSlide(index)}
							className={cn(
								"aspect-video max-h-16 shrink-0 cursor-pointer transition-all",
								index === currentIndex ? "scale-110 ring-2 ring-white" : "",
							)}
						/>
					))}
				</div>
			)}
		</div>
	);
}
