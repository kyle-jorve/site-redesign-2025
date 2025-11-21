"use client";

import { createContext, useState } from "react";
import { CategoryType } from "@/types/gallery-types";
import { projectFilters } from "@/data/gallery-data";

export type ProjectsContextType = {
	filters: CategoryType[];
	resetFilters: Function;
	setFilters: React.Dispatch<React.SetStateAction<CategoryType[]>>;
	updateFilters: (ids: string[]) => void;
};

const ProjectsContext = createContext<ProjectsContextType>({
	filters: [],
	resetFilters: () => {},
	setFilters: () => {},
	updateFilters: () => {},
});

export default ProjectsContext;

export function ProjectsContextProvider({ children }: React.PropsWithChildren) {
	const unsetFilters = Object.values(projectFilters).map((filter) => ({
		...filter,
		active: false,
	}));
	const [filters, setFilters] = useState<ProjectsContextType["filters"]>(
		structuredClone(unsetFilters),
	);

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

	return (
		<ProjectsContext.Provider
			value={{
				filters,
				resetFilters,
				setFilters,
				updateFilters,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
}
