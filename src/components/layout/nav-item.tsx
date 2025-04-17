"use client";

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
	...otherProps
}: NavItemProps) {
	const path = usePathname();
	const classes = printClassNames([
		styles["nav-item"],
		styles[name],
		path.startsWith(url) ? styles.current : "",
		className,
	]);

	return (
		<CustomLink
			className={classes}
			to={url}
			{...otherProps}
		>
			{children}
		</CustomLink>
	);
}
