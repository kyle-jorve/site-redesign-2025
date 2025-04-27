"use client";

import { useContext } from "react";
import SiteContext from "@/utils/site-context";
import { usePathname } from "next/navigation";
import { printClassNames } from "@/utils/utils";
import CustomLink from "@/components/global/custom-link";
import styles from "@/styles/components/layout/navigation.module.css";

export type NavItemProps = {
	url: string;
	name: string;
	onClick?: React.MouseEventHandler;
} & React.PropsWithChildren &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavItem({
	url,
	name,
	children,
	className = "",
	onClick = () => {},
	...otherProps
}: NavItemProps) {
	const { headerInnerRef, setHeaderFixed, setHeaderRevealed } =
		useContext(SiteContext);
	const path = usePathname();
	const classes = printClassNames([
		styles["nav-item"],
		styles[name],
		path.startsWith(url) ? styles.current : "",
		className,
	]);

	function handleClick(event: React.MouseEvent) {
		const headerInner = headerInnerRef?.current;

		if (headerInner) {
			headerInner.addEventListener(
				"transitionend",
				() => {
					setHeaderFixed(false);
				},
				{ once: true },
			);
		}

		setHeaderRevealed(false);
		onClick(event);
	}

	return (
		<CustomLink
			className={classes}
			to={url}
			onClick={handleClick}
			{...otherProps}
		>
			{children}
		</CustomLink>
	);
}
