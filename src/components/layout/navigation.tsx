import { NavigationProps } from "@/types/global-types";
import { navItems } from "@/data/global-data";
import { printClassNames } from "@/utils/utils";
import NavItem from "./nav-item";
import ParentNavItem from "./parent-nav-item";
import styles from "@/styles/components/layout/nav.module.css";

export default function Navigation({
	className = "",
	...otherProps
}: NavigationProps) {
	const classes = printClassNames([
		styles.navigation,
		...className.trim().split(" "),
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
							id={item.name}
							label={item.label}
							childItems={item.children}
						/>
					);
				}

				return (
					<NavItem
						key={item.name}
						url={item.url}
					>
						{item.label}
					</NavItem>
				);
			})}
		</nav>
	);
}
