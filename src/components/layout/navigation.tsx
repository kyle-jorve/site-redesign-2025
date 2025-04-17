import { navItems } from "@/data/global-data";
import { printClassNames } from "@/utils/utils";
import NavItem from "@/components/layout/nav-item";
import ParentNavItem from "@/components/layout/parent-nav-item";
import styles from "@/styles/components/layout/navigation.module.css";

export type NavigationProps = {
	isMobileNav?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Navigation({
	isMobileNav = false,
	className = "",
	...otherProps
}: NavigationProps) {
	const classes = printClassNames([
		isMobileNav ? styles["mobile-navigation"] : styles.navigation,
		className,
	]);

	return (
		<nav
			className={classes}
			{...otherProps}
		>
			{navItems.map((item) => {
				if ("children" in item) {
					return (
						<ParentNavItem
							key={item.name}
							name={item.name}
							label={item.label}
							childItems={item.children}
						/>
					);
				}

				return (
					<NavItem
						key={item.name}
						name={item.name}
						url={item.url}
					>
						{item.label}
					</NavItem>
				);
			})}
		</nav>
	);
}
