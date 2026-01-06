"use client";

import { useState, createContext } from "react";
import { ImageMetaType } from "@/types/global-types";

export type SiteContextType = {
	hideShell: boolean;
	lightboxActiveIndex: number;
	lightboxImages: ImageMetaType[];
	lightboxId: string;
	lightboxOpen: boolean;
	loadStatus: "idle" | "page-out" | "page-in";
	mainTransitionDuration: number;
	visited: boolean;

	closeLightbox: Function;
	openLightbox: (
		contents: SiteContextType["lightboxImages"],
		activeIndex: SiteContextType["lightboxActiveIndex"],
	) => void;
	setHideShell: React.Dispatch<React.SetStateAction<boolean>>;
	setlightboxImages: React.Dispatch<
		React.SetStateAction<SiteContextType["lightboxImages"]>
	>;
	setLoadStatus: React.Dispatch<
		React.SetStateAction<SiteContextType["loadStatus"]>
	>;
	setVisited: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaults: SiteContextType = {
	hideShell: false,
	lightboxActiveIndex: 0,
	lightboxImages: [],
	lightboxId: "project-lightbox",
	lightboxOpen: false,
	loadStatus: "idle",
	mainTransitionDuration: 300,
	visited: false,

	closeLightbox: () => {},
	openLightbox: () => {},
	setHideShell: () => {},
	setlightboxImages: () => {},
	setLoadStatus: () => {},
	setVisited: () => {},
};

const SiteContext = createContext<SiteContextType>(defaults);

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [hideShell, setHideShell] = useState<SiteContextType["hideShell"]>(
		defaults.hideShell,
	);
	const [lightboxActiveIndex, setLightboxActiveIndex] = useState<
		SiteContextType["lightboxActiveIndex"]
	>(defaults.lightboxActiveIndex);
	const [lightboxImages, setlightboxImages] = useState<
		SiteContextType["lightboxImages"]
	>([]);
	const [lightboxOpen, setLightboxOpen] = useState<
		SiteContextType["lightboxOpen"]
	>(defaults.lightboxOpen);
	const [loadStatus, setLoadStatus] = useState<SiteContextType["loadStatus"]>(
		defaults.loadStatus,
	);
	const [visited, setVisited] = useState<SiteContextType["visited"]>(
		defaults.visited,
	);

	function openLightbox(
		contents: SiteContextType["lightboxImages"],
		activeIndex: SiteContextType["lightboxActiveIndex"],
	) {
		setlightboxImages(contents);
		setLightboxActiveIndex(activeIndex);
		setLightboxOpen(true);
	}

	function closeLightbox() {
		setLightboxOpen(false);
	}

	return (
		<SiteContext.Provider
			value={{
				hideShell,
				lightboxActiveIndex,
				lightboxImages,
				lightboxId: defaults.lightboxId,
				lightboxOpen,
				loadStatus,
				mainTransitionDuration: defaults.mainTransitionDuration,
				visited,

				closeLightbox,
				openLightbox,
				setHideShell,
				setlightboxImages,
				setLoadStatus,
				setVisited,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
