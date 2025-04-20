"use client";

import React, { useState, useRef } from "react";
import { CategoryType } from "@/types/gallery-types";
import { projectFilters } from "@/data/gallery-data";

export type SiteContextType = {
	favedProjects: string[];
	filters: CategoryType[];
	loadStatus: "idle" | "page-out" | "page-in";
	mainRef: React.RefObject<HTMLElement | null> | null;
	visited: boolean;

	resetFilters: Function;
	setFavedProjects: React.Dispatch<React.SetStateAction<string[]>>;
	setFilters: React.Dispatch<React.SetStateAction<CategoryType[]>>;
	setLoadStatus: React.Dispatch<
		React.SetStateAction<"idle" | "page-out" | "page-in">
	>;
	setVisited: React.Dispatch<React.SetStateAction<boolean>>;
	updateFilters: (id: string) => void;
};

const SiteContext = React.createContext<SiteContextType>({
	favedProjects: [],
	filters: [],
	loadStatus: "idle",
	mainRef: null,
	visited: false,

	resetFilters: () => {},
	setFavedProjects: () => {},
	setFilters: () => {},
	setLoadStatus: () => {},
	setVisited: () => {},
	updateFilters: () => {},
});

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [visited, setVisited] = useState<SiteContextType["visited"]>(false);
	const [favedProjects, setFavedProjects] = useState<string[]>([]);
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const unsetFilters = Object.values(projectFilters).map((filter) => ({
		...filter,
		active: false,
	}));
	const [filters, setFilters] = useState<SiteContextType["filters"]>(
		structuredClone(unsetFilters),
	);
	const mainRef = useRef<HTMLElement>(null);

	function updateFilters(id: string) {
		setFilters((prev) => {
			return prev.map((cat) => {
				const newCat = {
					...cat,
				};

				if (cat.name === id && cat.active) newCat.active = false;
				else if (cat.name === id) newCat.active = true;

				return newCat;
			});
		});
	}

	function resetFilters() {
		setFilters(structuredClone(unsetFilters));
	}

	return (
		<SiteContext.Provider
			value={{
				favedProjects,
				filters,
				loadStatus,
				mainRef,
				visited,

				resetFilters,
				setFavedProjects,
				setFilters,
				setLoadStatus,
				setVisited,
				updateFilters,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
