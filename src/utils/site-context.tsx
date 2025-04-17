"use client";

import React, { useState, useRef } from "react";
import { CategoryType } from "@/types/gallery-types";
import { projectFilters } from "@/data/gallery-data";

export type SiteContextType = {
	favedProjects: string[];
	loadStatus: "idle" | "page-out" | "page-in";
	mainRef: React.RefObject<HTMLElement | null> | null;
	filters: CategoryType[];
	visited: boolean;

	setFavedProjects: React.Dispatch<React.SetStateAction<string[]>>;
	setLoadStatus: React.Dispatch<
		React.SetStateAction<"idle" | "page-out" | "page-in">
	>;
	setFilters: React.Dispatch<React.SetStateAction<CategoryType[]>>;
	updateFilters: (id: string) => void;
	setVisited: React.Dispatch<React.SetStateAction<boolean>>;
};

const SiteContext = React.createContext<SiteContextType>({
	favedProjects: [],
	loadStatus: "idle",
	mainRef: null,
	filters: [],
	visited: false,

	setFavedProjects: () => {},
	setLoadStatus: () => {},
	setFilters: () => {},
	updateFilters: () => {},
	setVisited: () => {},
});

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [visited, setVisited] = useState<SiteContextType["visited"]>(false);
	const [favedProjects, setFavedProjects] = useState<string[]>([]);
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const [filters, setFilters] = useState<SiteContextType["filters"]>(
		Object.values(projectFilters),
	);
	const mainRef = useRef<HTMLElement>(null);

	function updateFilters(id: string) {
		setFilters((prev) => {
			return prev.map((cat) => {
				if (cat.name === id && cat.active) cat.active = false;
				else if (cat.name === id) cat.active = true;
				return cat;
			});
		});
	}

	return (
		<SiteContext.Provider
			value={{
				favedProjects,
				loadStatus,
				mainRef,
				filters,
				visited,

				setFavedProjects,
				setLoadStatus,
				updateFilters,
				setFilters,
				setVisited,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
