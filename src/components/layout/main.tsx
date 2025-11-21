"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import SiteContext from "@/context/site-context";

export type MainProps = React.PropsWithChildren<
	React.HTMLAttributes<HTMLElement>
>;

export default function Main({ children, ...otherProps }: MainProps) {
	const {
		lightboxOpen,
		loadStatus,
		mainTransitionDuration,
		visited,

		closeLightbox,
		setLoadStatus,
		setVisited,
	} = useContext(SiteContext);
	const path = usePathname();

	useEffect(() => {
		setTimeout(() => {
			setVisited(true);
		}, 300);
	});

	useEffect(() => {
		if (!visited) return;

		closeLightbox();
		setLoadStatus("page-in");
		setTimeout(() => {
			setLoadStatus("idle");
		}, mainTransitionDuration);
	}, [path, visited]);

	return (
		<main
			className={loadStatus === "page-out" ? "out" : ""}
			{...otherProps}
			style={{
				...otherProps.style,
				transitionDuration: `${mainTransitionDuration}ms`,
			}}
			inert={lightboxOpen}
		>
			{children}
		</main>
	);
}
