"use client";

import { createContext, useState, useEffect } from "react";
import { CategoryType } from "@/types/gallery-types";
import { projectFilters } from "@/data/gallery-data";

export type ProjectsContextType = {
	favedProjects: string[];
	filters: CategoryType[];

	resetFilters: Function;
	setFavedProjects: React.Dispatch<
		React.SetStateAction<ProjectsContextType["favedProjects"]>
	>;
	setFilters: React.Dispatch<
		React.SetStateAction<ProjectsContextType["filters"]>
	>;
	updateFilters: (ids: string[]) => void;
};

const defaults: ProjectsContextType = {
	favedProjects: [],
	filters: [],

	resetFilters: () => {},
	setFavedProjects: () => {},
	setFilters: () => {},
	updateFilters: () => {},
};

const ProjectsContext = createContext<ProjectsContextType>(defaults);

export default ProjectsContext;

export function ProjectsContextProvider({ children }: React.PropsWithChildren) {
	const [favedProjects, setFavedProjects] = useState<
		ProjectsContextType["favedProjects"]
	>(defaults.favedProjects);
	const initialFilters = Object.values(projectFilters).map((filter) => ({
		...filter,
		active: false,
	}));
	const [filters, setFilters] = useState<ProjectsContextType["filters"]>(
		structuredClone(initialFilters),
	);
	const favoritesStorageKey = "favorites";

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
		setFilters(structuredClone(initialFilters));
	}

	function checkLocalStorageAvailability() {
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
		<ProjectsContext.Provider
			value={{
				favedProjects,
				filters,

				resetFilters,
				setFavedProjects,
				setFilters,
				updateFilters,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
}
