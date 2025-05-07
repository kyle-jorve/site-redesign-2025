"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import SiteContext from "@/utils/site-context";

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

		main?.addEventListener(
			"transitionend",
			() => {
				setLoadStatus("idle");
			},
			{
				once: true,
			},
		);

		setLoadStatus("page-in");
	}, [path, visited]);

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
