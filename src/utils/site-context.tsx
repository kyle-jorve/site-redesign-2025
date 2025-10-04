"use client";

import { useState, useRef, createContext, useEffect } from "react";
import { CategoryType } from "@/types/gallery-types";
import { projectFilters } from "@/data/gallery-data";

export type SiteContextType = {
	favedProjects: string[];
	filters: CategoryType[];
	hideShell: boolean;
	lightboxId: string;
	lightboxInitialSlideIndex: number;
	lightboxOpen: boolean;
	loadStatus: "idle" | "page-out" | "page-in";
	mainRef: React.RefObject<HTMLElement | null> | null;
	visited: boolean;

	closeLightbox: Function;
	openLightbox: (slideIndex: number) => void;
	resetFilters: Function;
	setFavedProjects: React.Dispatch<React.SetStateAction<string[]>>;
	setFilters: React.Dispatch<React.SetStateAction<CategoryType[]>>;
	setHideShell: React.Dispatch<React.SetStateAction<boolean>>;
	setLoadStatus: React.Dispatch<
		React.SetStateAction<"idle" | "page-out" | "page-in">
	>;
	setVisited: React.Dispatch<React.SetStateAction<boolean>>;
	updateFilters: (ids: string[]) => void;
};

const defaults: SiteContextType = {
	favedProjects: [],
	filters: [],
	hideShell: false,
	lightboxId: "project-lightbox",
	lightboxInitialSlideIndex: 0,
	lightboxOpen: false,
	loadStatus: "idle",
	mainRef: null,
	visited: false,

	closeLightbox: () => {},
	openLightbox: () => {},
	resetFilters: () => {},
	setFavedProjects: () => {},
	setFilters: () => {},
	setHideShell: () => {},
	setLoadStatus: () => {},
	setVisited: () => {},
	updateFilters: () => {},
};

const SiteContext = createContext<SiteContextType>(defaults);

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [favedProjects, setFavedProjects] = useState<string[]>(
		defaults.favedProjects,
	);
	const [hideShell, setHideShell] = useState<boolean>(defaults.hideShell);
	const [lightboxInitialSlideIndex, setLightboxInitialSlideIndex] =
		useState<number>(defaults.lightboxInitialSlideIndex);
	const [lightboxOpen, setLightboxOpen] = useState<boolean>(
		defaults.lightboxOpen,
	);
	const [loadStatus, setLoadStatus] = useState<SiteContextType["loadStatus"]>(
		defaults.loadStatus,
	);
	const [visited, setVisited] = useState<SiteContextType["visited"]>(
		defaults.visited,
	);
	const unsetFilters = Object.values(projectFilters).map((filter) => ({
		...filter,
		active: false,
	}));
	const [filters, setFilters] = useState<SiteContextType["filters"]>(
		structuredClone(unsetFilters),
	);
	const mainRef = useRef<HTMLElement>(null);
	const favoritesStorageKey = "favorites";

	function openLightbox(slideIndex: number) {
		setLightboxInitialSlideIndex(slideIndex);
		setLightboxOpen(true);
	}

	function closeLightbox() {
		setLightboxInitialSlideIndex(defaults.lightboxInitialSlideIndex);
		setLightboxOpen(false);
	}

	function updateFilters(ids: string[]) {
		setFilters((prev) => {
			return prev.map((cat) => {
				const newCat = {
					...cat,
				};
				const match = ids.some((id) => id === cat.name);

				if (match && cat.active) newCat.active = false;
				else if (match) newCat.active = true;

				return newCat;
			});
		});
	}

	function resetFilters() {
		setFilters(structuredClone(unsetFilters));
	}

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
				filters,
				hideShell,
				lightboxInitialSlideIndex,
				lightboxId: defaults.lightboxId,
				lightboxOpen,
				loadStatus,
				mainRef,
				visited,

				closeLightbox,
				openLightbox,
				resetFilters,
				setFavedProjects,
				setFilters,
				setHideShell,
				setLoadStatus,
				setVisited,
				updateFilters,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
