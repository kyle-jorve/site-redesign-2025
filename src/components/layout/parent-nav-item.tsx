"use client";

import { NavItemType } from "@/types/global-types";
import { useState, useEffect, useRef } from "react";
import { printClassNames } from "@/utils";
import NavItem from "./nav-item";
import styles from "@/styles/components/layout/navigation.module.css";

export type ParentNavItemProps = {
	id: string;
	label: string;
	childItems: NavItemType[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function ParentNavItem({
	id,
	label,
	childItems,
	className = "",
	...otherProps
}: ParentNavItemProps) {
	const rootRef = useRef<HTMLDivElement>(null);
	const [expanded, setExpanded] = useState<boolean>(false);
	const classes = printClassNames([
		styles["nav-parent"],
		expanded ? styles.expanded : "",
		className,
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
				className={styles["dropdown-toggle"]}
				aria-label={`toggle ${label} menu`}
				aria-controls={id}
				aria-expanded={expanded}
				onClick={() => setExpanded((prev) => !prev)}
			>
				{label}
			</button>

			<div
				className={styles["dropdown-menu"]}
				id={id}
				aria-hidden={!expanded}
			>
				{childItems.map((child) => {
					return (
						<NavItem
							className={`${styles["dropdown-nav-item"]} ${
								styles[child.name]
							}`}
							key={child.name}
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
