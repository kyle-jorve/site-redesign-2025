"use client";

import { useState, createContext } from "react";
import { ImageMetaType } from "@/types/global-types";

export type LightboxContextType = {
	lightboxActiveIndex: number;
	lightboxImages: ImageMetaType[];
	lightboxId: string;
	lightboxOpen: boolean;

	closeLightbox: Function;
	openLightbox: (
		contents: LightboxContextType["lightboxImages"],
		activeIndex: LightboxContextType["lightboxActiveIndex"],
	) => void;
	setlightboxImages: React.Dispatch<
		React.SetStateAction<LightboxContextType["lightboxImages"]>
	>;
};

const defaults: LightboxContextType = {
	lightboxActiveIndex: 0,
	lightboxImages: [],
	lightboxId: "project-lightbox",
	lightboxOpen: false,

	closeLightbox: () => {},
	openLightbox: () => {},
	setlightboxImages: () => {},
};

const LightboxContext = createContext<LightboxContextType>(defaults);

export default LightboxContext;

export function LightboxContextProvider({ children }: React.PropsWithChildren) {
	const [lightboxActiveIndex, setLightboxActiveIndex] = useState<
		LightboxContextType["lightboxActiveIndex"]
	>(defaults.lightboxActiveIndex);
	const [lightboxImages, setlightboxImages] = useState<
		LightboxContextType["lightboxImages"]
	>([]);
	const [lightboxOpen, setLightboxOpen] = useState<
		LightboxContextType["lightboxOpen"]
	>(defaults.lightboxOpen);

	function openLightbox(
		contents: LightboxContextType["lightboxImages"],
		activeIndex: LightboxContextType["lightboxActiveIndex"],
	) {
		setlightboxImages(contents);
		setLightboxActiveIndex(activeIndex);
		setLightboxOpen(true);
	}

	function closeLightbox() {
		setLightboxOpen(false);
	}

	return (
		<LightboxContext.Provider
			value={{
				lightboxActiveIndex,
				lightboxImages,
				lightboxId: defaults.lightboxId,
				lightboxOpen,

				closeLightbox,
				openLightbox,
				setlightboxImages,
			}}
		>
			{children}
		</LightboxContext.Provider>
	);
}
