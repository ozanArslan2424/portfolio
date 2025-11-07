import { useState, useCallback, useEffect } from "react";

type LightboxImage = {
	src: string;
	alt: string;
};

export type UseLightboxReturn = {
	onOpen: (index: number) => void;
	isOpen: boolean;
	currentIndex: number;
	images: LightboxImage[];
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
	onGoToSlide: (index: number) => void;
};

export function useLightbox(images: LightboxImage[]): UseLightboxReturn {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const onOpen = useCallback((index: number) => {
		setCurrentIndex(index);
		setIsOpen(true);
	}, []);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	}, [images.length]);

	const onPrev = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	}, [images.length]);

	const onGoToSlide = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			switch (e.key) {
				case "Escape":
					onClose();
					break;
				case "ArrowLeft":
					onPrev();
					break;
				case "ArrowRight":
					onNext();
					break;
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose, onPrev, onNext]);

	// Prevent body scroll when lightbox is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return {
		images,
		isOpen,
		currentIndex,
		onOpen,
		onClose,
		onNext,
		onPrev,
		onGoToSlide,
	};
}
