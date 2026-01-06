import { usePathname } from "next/navigation";
import { outputClassNames } from "@/utils";
import CustomLink from "@/components/global/custom-link";
import styles from "@/styles/components/layout/navigation.module.css";

export type NavItemProps = {
	url: string;
	name: string;
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
	const classes = outputClassNames(
		["nav-item", name, path.startsWith(url) ? "current" : "", className],
		[styles],
	);

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
