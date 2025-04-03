import React, { useState, useRef } from "react";
import { SiteContextType } from "@/types/global-types";

const SiteContext = React.createContext<SiteContextType>({
	loadStatus: "idle",
	mainRef: null,
	setLoadStatus: () => {},
});

export default SiteContext;

export function SiteContextProvider({ children }: React.PropsWithChildren) {
	const [loadStatus, setLoadStatus] =
		useState<SiteContextType["loadStatus"]>("idle");
	const mainRef = useRef<HTMLElement>(null);

	return (
		<SiteContext.Provider
			value={{
				loadStatus,
				mainRef,
				setLoadStatus,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
}
