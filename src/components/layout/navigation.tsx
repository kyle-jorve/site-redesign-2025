import { navItems } from "@/data/global-data";
import { outputClassNames } from "@/utils";
import NavItem from "@/components/layout/nav-item";
import ParentNavItem from "@/components/layout/parent-nav-item";
import styles from "@/styles/components/layout/navigation.module.css";

export type NavigationProps = {
	isMobileNav?: boolean;
	hidden?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Navigation({
	isMobileNav = false,
	hidden = false,
	className = "",
	...otherProps
}: NavigationProps) {
	const classes = outputClassNames(
		[
			isMobileNav ? "mobile-navigation" : "navigation",
			hidden ? "hidden" : "",
			className,
		],
		[styles],
	);

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
