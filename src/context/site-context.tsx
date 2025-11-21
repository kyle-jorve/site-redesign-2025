"use client";

import { useState, createContext, useEffect } from "react";
import { ImageMetaType } from "@/types/global-types";
// import { CategoryType } from "@/types/gallery-types";
// import { projectFilters } from "@/data/gallery-data";

export type SiteContextType = {
	favedProjects: string[];
	// filters: CategoryType[];
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
	// resetFilters: Function;
	setFavedProjects: React.Dispatch<React.SetStateAction<string[]>>;
	// setFilters: React.Dispatch<React.SetStateAction<CategoryType[]>>;
	setHideShell: React.Dispatch<React.SetStateAction<boolean>>;
	setlightboxImages: React.Dispatch<
		React.SetStateAction<SiteContextType["lightboxImages"]>
	>;
	setLoadStatus: React.Dispatch<
		React.SetStateAction<SiteContextType["loadStatus"]>
	>;
	setVisited: React.Dispatch<React.SetStateAction<boolean>>;
	// updateFilters: (ids: string[]) => void;
};

const defaults: SiteContextType = {
	favedProjects: [],
	// filters: [],
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
	// resetFilters: () => {},
	setFavedProjects: () => {},
	// setFilters: () => {},
	setHideShell: () => {},
	setlightboxImages: () => {},
	setLoadStatus: () => {},
	setVisited: () => {},
	// updateFilters: () => {},
};

const SiteContext = createContext<SiteContextType>(defaults);

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [favedProjects, setFavedProjects] = useState<
		SiteContextType["favedProjects"]
	>(defaults.favedProjects);
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
	// const unsetFilters = Object.values(projectFilters).map((filter) => ({
	// 	...filter,
	// 	active: false,
	// }));
	// const [filters, setFilters] = useState<SiteContextType["filters"]>(
	// 	structuredClone(unsetFilters),
	// );
	const favoritesStorageKey = "favorites";

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

	// function updateFilters(ids: string[]) {
	// 	setFilters((prev) => {
	// 		return prev.map((cat) => {
	// 			const newCat = {
	// 				...cat,
	// 			};
	// 			const match = ids.some((id) => id === cat.name);

	// 			if (match && cat.active) newCat.active = false;
	// 			else if (match) newCat.active = true;

	// 			return newCat;
	// 		});
	// 	});
	// }

	// function resetFilters() {
	// 	setFilters(structuredClone(unsetFilters));
	// }

	function checkLocalStorageAvailability() {
		return (() => {
			const test = "__storage_test__";

			try {
				localStorage.setItem(test, test);
				localStorage.removeItem(test);
				return true;
			} catch (error) {
				return (
					error instanceof DOMException &&
					error.name === "QuotaExceededError" &&
					localStorage?.length !== 0
				);
			}
		})();
	}

	useEffect(() => {
		const localStorageAvailable = checkLocalStorageAvailability();

		if (!localStorageAvailable) return;

		const favs = (() => {
			const storedFavs = localStorage.getItem(favoritesStorageKey);

			if (!storedFavs) return null;

			try {
				return JSON.parse(storedFavs);
			} catch {
				return null;
			}
		})();

		if (!favs) return;

		setFavedProjects(favs);
	}, []);

	useEffect(() => {
		const localStorageAvailable = checkLocalStorageAvailability();

		if (!localStorageAvailable) return;

		localStorage.setItem(
			favoritesStorageKey,
			JSON.stringify(favedProjects),
		);
	}, [favedProjects]);

	return (
		<SiteContext.Provider
			value={{
				favedProjects,
				// filters,
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
				// resetFilters,
				setFavedProjects,
				// setFilters,
				setHideShell,
				setlightboxImages,
				setLoadStatus,
				setVisited,
				// updateFilters,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
