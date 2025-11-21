"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { outputClassNames } from "@/utils";
import SiteContext from "@/context/site-context";
import FilterChip from "@/components/gallery/filter-chip";
import styles from "@/styles/components/gallery/filters.module.css";

export type FiltersProps = React.HTMLAttributes<HTMLDivElement>;

export default function Filters({
	className = "",
	...otherProps
}: FiltersProps) {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const { filters, resetFilters, updateFilters, setFilters } =
		useContext(SiteContext);
	const classes = outputClassNames(["filters", className], [styles]);
	const filterMenuID = "filter-menu";
	const activeFilters = filters.filter((cat) => cat.active);
	const params = useSearchParams();
	const router = useRouter();
	const path = usePathname();

	useEffect(() => {
		const urlCategories: string[] | null = (() => {
			const cats = params.get("categories");

			if (!cats) return null;

			try {
				return JSON.parse(cats);
			} catch {
				return null;
			}
		})();

		if (!urlCategories?.length) {
			resetFilters();
			return;
		}

		setFilters((prev) => {
			const newState = prev.map((filter) => ({
				...filter,
				active: false,
			}));

			return newState.map((filter) => ({
				...filter,
				active: urlCategories.some((cat) => cat === filter.name),
			}));
		});
	}, [params]);

	useEffect(() => {
		const activeFilters = filters.filter((cat) => cat.active);
		const newURL = activeFilters.length
			? `${path}?categories=${JSON.stringify(
					activeFilters.map((cat) => cat.name),
			  )}`
			: path;

		router.replace(newURL, { scroll: false });
	}, [filters]);

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
					{filters.map((filter) => {
						const filterButtonClasses = outputClassNames(
							[
								"add-filter-button",
								filter.active ? "active" : "",
							],
							[styles],
						);

						return (
							<div
								key={filter.name}
								className={styles["filter-row"]}
							>
								<button
									className={filterButtonClasses}
									aria-label={`add ${filter.label} project filter`}
									onClick={() => updateFilters([filter.name])}
									data-add-filter-button
								>
									{filter.label}
								</button>
								{filter.name === "featured" && (
									<span
										className={styles.divider}
										aria-hidden="true"
									></span>
								)}
							</div>
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
