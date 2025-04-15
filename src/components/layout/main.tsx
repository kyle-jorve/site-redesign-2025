"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import SiteContext from "@/site-context";

export type MainProps = React.PropsWithChildren<
	React.HTMLAttributes<HTMLElement>
>;

export default function Main({ children, ...otherProps }: MainProps) {
	const { mainRef, loadStatus, visited, setLoadStatus, setVisited } =
		useContext(SiteContext);
	const path = usePathname();

	useEffect(() => {
		setTimeout(() => {
			setVisited(true);
		}, 300);
	});

	useEffect(() => {
		if (!visited) return;

		const main = mainRef?.current;

		function handleTransition() {
			setLoadStatus("idle");
		}

		main?.addEventListener("transitionend", handleTransition, {
			once: true,
		});

		setLoadStatus("page-in");

		return () => {
			main?.removeEventListener("transitionend", handleTransition);
		};
	}, [path]);

	return (
		<main
			className={loadStatus === "page-out" ? "out" : ""}
			ref={mainRef}
			{...otherProps}
		>
			{children}
		</main>
	);
}
