"use client";

import { createContext, useState, useEffect } from "react";

export type ProjectsContextType = {
	favedProjects: string[];
	setFavedProjects: React.Dispatch<
		React.SetStateAction<ProjectsContextType["favedProjects"]>
	>;
};

const defaults: ProjectsContextType = {
	favedProjects: [],
	setFavedProjects: () => {},
};

const ProjectsContext = createContext<ProjectsContextType>(defaults);

export default ProjectsContext;

export function ProjectsContextProvider({ children }: React.PropsWithChildren) {
	const [favedProjects, setFavedProjects] = useState<
		ProjectsContextType["favedProjects"]
	>(defaults.favedProjects);
	const favoritesStorageKey = "favorites";

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
				setFavedProjects,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
}
