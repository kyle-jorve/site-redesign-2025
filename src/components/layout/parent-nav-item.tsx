"use client";

import { NavItemType } from "@/types/global-types";
import { useState, useEffect, useRef } from "react";
import { printClassNames } from "@/utils/utils";
import NavItem from "@/components/layout/nav-item";
import styles from "@/styles/components/layout/navigation.module.css";

export type ParentNavItemProps = {
	name: string;
	label: string;
	childItems: NavItemType[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function ParentNavItem({
	name,
	label,
	childItems,
	className = "",
	...otherProps
}: ParentNavItemProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const [expanded, setExpanded] = useState<boolean>(false);
	const classes = printClassNames([
		styles["nav-parent"],
		styles[name],
		expanded ? styles.expanded : "",
		className,
	]);
	const dropdownToggleClasses = printClassNames([
		styles["dropdown-toggle"],
		styles[name],
		expanded ? styles.expanded : "",
	]);

	useEffect(() => {
		function handleDocumentClick(event: MouseEvent) {
			const target = event.target as HTMLElement;
			const targetIsNavItem =
				target === rootRef.current ||
				target.closest("[data-parent-root]") === rootRef.current;

			if (!expanded || targetIsNavItem) return;

			setExpanded(false);
		}

		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, [expanded]);

	return (
		<div
			className={classes}
			ref={rootRef}
			data-parent-root
			{...otherProps}
		>
			<button
				className={dropdownToggleClasses}
				aria-label={`toggle ${label} menu`}
				aria-controls={name}
				aria-expanded={expanded}
				onClick={() => setExpanded((prev) => !prev)}
			>
				{label}
			</button>

			<div
				className={styles["dropdown-menu"]}
				id={name}
				aria-hidden={!expanded}
			>
				{childItems.map((child) => {
					return (
						<NavItem
							key={child.name}
							name={child.name}
							className={`${styles["dropdown-nav-item"]} ${
								styles[child.name]
							}`}
							url={child.url}
							onClick={() => setExpanded(false)}
							tabIndex={expanded ? undefined : -1}
						>
							{child.label}
						</NavItem>
					);
				})}
			</div>
		</div>
	);
}
