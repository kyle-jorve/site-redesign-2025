"use client";

import { useState, createContext } from "react";

export type SiteContextType = {
	hideShell: boolean;
	intersectionTransition: string;
	loadStatus: "idle" | "page-out" | "page-in";
	mainTransitionDuration: number;
	visited: boolean;

	setHideShell: React.Dispatch<React.SetStateAction<boolean>>;
	setLoadStatus: React.Dispatch<
		React.SetStateAction<SiteContextType["loadStatus"]>
	>;
	setVisited: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaults: SiteContextType = {
	hideShell: false,
	intersectionTransition: "opacity 1s ease",
	loadStatus: "idle",
	mainTransitionDuration: 300, // milliseconds
	visited: false,

	setHideShell: () => {},
	setLoadStatus: () => {},
	setVisited: () => {},
};

const SiteContext = createContext<SiteContextType>(defaults);

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [hideShell, setHideShell] = useState<SiteContextType["hideShell"]>(
		defaults.hideShell,
	);
	const [loadStatus, setLoadStatus] = useState<SiteContextType["loadStatus"]>(
		defaults.loadStatus,
	);
	const [visited, setVisited] = useState<SiteContextType["visited"]>(
		defaults.visited,
	);

	return (
		<SiteContext.Provider
			value={{
				hideShell,
				intersectionTransition: defaults.intersectionTransition,
				loadStatus,
				mainTransitionDuration: defaults.mainTransitionDuration,
				visited,

				setHideShell,
				setLoadStatus,
				setVisited,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
