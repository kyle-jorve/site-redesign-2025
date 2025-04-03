import { navItems } from "@/data/global-data";
import { printClassNames } from "@/utils";
import NavItem from "./nav-item";
import ParentNavItem from "./parent-nav-item";
import styles from "@/styles/components/layout/navigation.module.css";

export type NavigationProps = React.HTMLAttributes<HTMLElement>;

export default function Navigation({
	className = "",
	...otherProps
}: NavigationProps) {
	const classes = printClassNames([styles.navigation, className]);

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
