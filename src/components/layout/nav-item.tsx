import { NavItemProps } from "@/types/global-types";
import { useRouter } from "next/router";
import { printClassNames } from "@/utils/utils";
import CustomLink from "./custom-link";
import styles from "@/styles/components/layout/nav.module.css";

export default function NavItem({
	url,
	children,
	className = "",
	...otherProps
}: NavItemProps) {
	const router = useRouter();
	const classes = printClassNames([
		styles["nav-item"],
		router.pathname.startsWith(url) ? styles.current : "",
		...className.trim().split(" "),
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
