"use client";

import { useRouter } from "next/router";
import { useContext } from "react";
import Link from "next/link";
import SiteContext from "@/site-context";

export type CustomLinkProps = {
	to: string;
	onClick?: React.MouseEventHandler;
} & React.PropsWithChildren &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function CustomLink({
	to,
	children,
	onClick = () => {},
	className = "",
	target = "_self",
	...otherProps
}: CustomLinkProps) {
	const router = useRouter();
	const { mainRef, setLoadStatus } = useContext(SiteContext);
	const classes = className.trim();
	const linkIsExternal =
		to.includes("http") || target !== "_self" || !!otherProps.download;

	function pageTransition(event: React.MouseEvent) {
		const href = (event.target as HTMLAnchorElement).href;
		const url = new URL(href);

		event.preventDefault();

		if (url.pathname === router.pathname) return;

		mainRef?.current?.addEventListener(
			"transitionend",
			() => {
				router.push(href);
			},
			{ once: true },
		);

		setLoadStatus("page-out");

		onClick(event);
	}

	return linkIsExternal ? (
		<a
			className={classes}
			href={to}
			rel="noreferrer"
			target="_blank"
			onClick={onClick}
			{...otherProps}
		>
			{children}
		</a>
	) : (
		<Link
			className={classes}
			href={to}
			target={target}
			onClick={pageTransition}
			{...otherProps}
		>
			{children}
		</Link>
	);
}
