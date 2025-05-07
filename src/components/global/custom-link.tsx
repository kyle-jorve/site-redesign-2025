"use client";

import { printClassNames } from "@/utils/utils";
import { useRouter, usePathname } from "next/navigation";
import { useContext } from "react";
import Link from "next/link";
import SiteContext from "@/utils/site-context";

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
	const path = usePathname();
	const { mainRef, setLoadStatus } = useContext(SiteContext);
	const classes = printClassNames([className]);
	const linkIsExternal =
		to.includes("http") ||
		to.includes("mailto:") ||
		to.includes("tel:") ||
		target !== "_self" ||
		!!otherProps.download;

	function pageTransition(event: React.MouseEvent) {
		event.preventDefault();

		if (to === path) return;

		mainRef?.current?.addEventListener(
			"transitionend",
			() => {
				router.push(to);
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
			data-custom-link="true"
			{...otherProps}
		>
			{children}
		</Link>
	);
}
