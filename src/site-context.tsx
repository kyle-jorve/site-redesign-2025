import React, { useState, useRef } from "react";
import { CategoriesType } from "@/types/gallery-types";
import { categories } from "@/data/gallery-data";

export type SiteContextType = {
	favedProjects: string[];
	loadStatus: "idle" | "page-out" | "page-in";
	mainRef: React.RefObject<HTMLElement | null> | null;
	projectFilters: CategoriesType;

	setFavedProjects: Function;
	setLoadStatus: Function;
	setProjectFilters: Function;
	updateFilters: (id: string) => void;
};

const SiteContext = React.createContext<SiteContextType>({
	favedProjects: [],
	loadStatus: "idle",
	mainRef: null,
	projectFilters: [],

	setFavedProjects: () => {},
	setLoadStatus: () => {},
	setProjectFilters: () => {},
	updateFilters: () => {},
});

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [favedProjects, setFavedProjects] = useState<string[]>([]);
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const [projectFilters, setProjectFilters] =
		useState<SiteContextType["projectFilters"]>(categories);
	const mainRef = useRef<HTMLElement>(null);

	function updateFilters(id: string) {
		setProjectFilters((prev) => {
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
				projectFilters,

				setFavedProjects,
				setLoadStatus,
				updateFilters,
				setProjectFilters,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
