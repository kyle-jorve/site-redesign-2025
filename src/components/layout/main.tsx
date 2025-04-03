"use client";

import { useContext } from "react";
import SiteContext from "@/site-context";

export default function Main({
	children,
	...otherProps
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
	const context = useContext(SiteContext);

	return (
		<main
			ref={context.mainRef}
			{...otherProps}
		>
			{children}
		</main>
	);
}
