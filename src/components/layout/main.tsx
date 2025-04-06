"use client";

import { useContext } from "react";
import SiteContext from "@/site-context";

export type MainProps = React.PropsWithChildren<
	React.HTMLAttributes<HTMLElement>
>;

export default function Main({ children, ...otherProps }: MainProps) {
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
