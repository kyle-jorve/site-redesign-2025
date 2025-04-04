"use client";

import { CategoryType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import { useState } from "react";
import FilterChip from "@/components/gallery/filter-chip";
import styles from "@/styles/components/gallery/filters.module.css";

export type FiltersProps = {
	categories: CategoryType[];
	activeCategories: CategoryType[];
	handleChipClick: (id: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Filters({
	categories,
	activeCategories,
	handleChipClick,
	className = "",
	...otherProps
}: FiltersProps) {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const classes = printClassNames([styles.filters, className]);
	const filterMenuID = "filter-menu";
	const availableFilters = categories.filter(
		(cat) => !activeCategories.some((acat) => acat.name === cat.name),
	);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<div className={styles["filter-menu-wrapper"]}>
				<button
					className={`button filter ${styles["filter-menu-button"]}`}
					aria-controls={filterMenuID}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					Filters
					<span
						className="icon"
						aria-hidden="true"
					></span>
				</button>

				<div
					className={`${styles["filter-menu"]}${
						menuOpen ? ` ${styles.open}` : ""
					}`}
					id={filterMenuID}
					aria-hidden={!menuOpen}
				>
					{availableFilters.map((filter) => {})}
				</div>
			</div>
		</div>
	);
}
