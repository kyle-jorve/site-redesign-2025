"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import SiteContext from "@/context/site-context";
import LightboxContext from "@/context/lightbox-context";

export type MainProps = React.PropsWithChildren<
	React.HTMLAttributes<HTMLElement>
>;

export default function Main({ children, ...otherProps }: MainProps) {
	const {
		loadStatus,
		mainTransitionDuration,
		visited,

		setLoadStatus,
		setVisited,
	} = useContext(SiteContext);
	const { lightboxOpen, closeLightbox } = useContext(LightboxContext);
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
