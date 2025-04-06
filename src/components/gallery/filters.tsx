"use client";

import { useState, useContext } from "react";
import { printClassNames } from "@/utils";
import SiteContext from "@/site-context";
import FilterChip from "@/components/gallery/filter-chip";
import styles from "@/styles/components/gallery/filters.module.css";

export type FiltersProps = React.HTMLAttributes<HTMLDivElement>;

export default function Filters({
	className = "",
	...otherProps
}: FiltersProps) {
	const context = useContext(SiteContext);
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const classes = printClassNames([styles.filters, className]);
	const filterMenuID = "filter-menu";
	const availableFilters = context.projectFilters.filter(
		(cat) => !cat.active,
	);
	const activeFilters = context.projectFilters.filter((cat) => cat.active);

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
					{availableFilters.map((filter) => {
						return (
							<button
								key={filter.name}
								className={styles["add-filter-button"]}
								aria-label={`add ${filter.label} project filter`}
								onClick={() =>
									context.updateFilters(filter.name)
								}
							>
								{filter.label}
							</button>
						);
					})}
				</div>
			</div>

			<div className={styles["filter-chips"]}>
				{activeFilters.map((filter) => {
					return (
						<FilterChip
							key={filter.name}
							category={filter}
							handleClick={context.updateFilters}
						/>
					);
				})}

				<button
					className={styles["clear-filters-button"]}
					aria-label="remove all project filters"
					onClick={() => context.setProjectFilters([])}
				>
					Clear Filters
				</button>
			</div>
		</div>
	);
}
