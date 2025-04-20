"use client";

import { useState, useContext, useEffect } from "react";
import { printClassNames } from "@/utils/utils";
import SiteContext from "@/utils/site-context";
import FilterChip from "@/components/gallery/filter-chip";
import styles from "@/styles/components/gallery/filters.module.css";

export type FiltersProps = React.HTMLAttributes<HTMLDivElement>;

export default function Filters({
	className = "",
	...otherProps
}: FiltersProps) {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const { filters, resetFilters, updateFilters } = useContext(SiteContext);
	const classes = printClassNames([styles.filters, className]);
	const filterMenuID = "filter-menu";
	const availableFilters = filters.filter((cat) => !cat.active);
	const activeFilters = filters.filter((cat) => cat.active);

	useEffect(() => {
		function handleDocumentClick(event: MouseEvent) {
			const target = event.target as HTMLElement;
			const targetIsFilters =
				target.dataset.addFilterButton ||
				target.closest("[data-filter-menu]");

			if (!menuOpen || targetIsFilters) return;

			setMenuOpen(false);
		}

		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, [menuOpen]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<div
				className={styles["filter-menu-wrapper"]}
				data-filter-menu
			>
				<button
					className={`button filter ${styles["filter-menu-button"]}`}
					aria-controls={filterMenuID}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					<span className="button-text">Filters</span>
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
								onClick={() => updateFilters(filter.name)}
								data-add-filter-button
							>
								{filter.label}
							</button>
						);
					})}
				</div>
			</div>

			{activeFilters.map((filter) => {
				return (
					<FilterChip
						key={filter.name}
						category={filter}
						handleClick={updateFilters}
					/>
				);
			})}

			{!!activeFilters.length && (
				<button
					className="clear-filters-button"
					aria-label="remove all project filters"
					onClick={() => resetFilters()}
				>
					Clear Filters
				</button>
			)}
		</div>
	);
}
