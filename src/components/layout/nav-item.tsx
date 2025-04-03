import { useRouter } from "next/router";
import { printClassNames } from "@/utils";
import CustomLink from "../global/custom-link";
import styles from "@/styles/components/layout/navigation.module.css";

export type NavItemProps = {
	url: string;
	onClick?: React.MouseEventHandler;
} & React.PropsWithChildren &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

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
