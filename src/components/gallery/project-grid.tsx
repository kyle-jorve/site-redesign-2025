"use client";

import { useContext, useRef, useState, useEffect, Suspense } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { ProjectTileType, CategoryType } from "@/types/gallery-types";
import { getElementTransition, printClassNames } from "@/utils/utils";
import SiteContext from "@/utils/site-context";
import Filters from "@/components/gallery/filters";
import ProjectTile from "@/components/gallery/project-tile";
import "@/styles/components/gallery/projects.css";

export type ProjectGridProps = {
	projects: ProjectTileType[];
	noResultsMessage: string;
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectGrid({
	projects,
	noResultsMessage,
	className = "",
	...otherProps
}: ProjectGridProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const { filters, favedProjects } = useContext(SiteContext);
	const [filteredProjects, setFilteredProjects] = useState<ProjectTileType[]>(
		getFilteredProjects(),
	);
	const [hideGrid, setHideGrid] = useState<boolean>(false);
	const classes = printClassNames(["project-grid", className]);
	const projectsClasses = printClassNames([
		"projects",
		hideGrid ? "hide" : "",
	]);
	const noResultsMessageClasses = printClassNames([
		"body-text",
		"large",
		"no-results-message",
	]);

	function getFilteredProjects() {
		const activeFilters = filters.filter((filter) => filter.active);
		const featuredFilterActive = activeFilters.some(
			(filter) => filter.name === "featured",
		);
		const favedFilterActive = activeFilters.some(
			(filter) => filter.name === "favorited",
		);

		if (!activeFilters.length) return projects;

		return projects.filter((proj) => {
			if (featuredFilterActive && proj.featured) return true;
			if (favedFilterActive && favedProjects.includes(proj.name))
				return true;

			return proj.categories.some((cat) =>
				activeFilters.some((af) => af.name === cat.name),
			);
		});
	}

	useEffect(() => {
		if (!filteredProjects.length) {
			setFilteredProjects(getFilteredProjects());
			return;
		}

		const transition = getElementTransition(projectsRef?.current);

		setHideGrid(true);
		setTimeout(() => {
			setFilteredProjects(getFilteredProjects());
			setHideGrid(false);
		}, transition);
	}, [filters]);

	return (
		<section
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
		>
			<Suspense fallback={null}>
				<Filters />
			</Suspense>

			{!filteredProjects.length ? (
				<p className={noResultsMessageClasses}>{noResultsMessage}</p>
			) : (
				<div
					ref={projectsRef}
					className={projectsClasses}
				>
					{filteredProjects.map((proj, index) => {
						const isLong =
							(index === 0 && proj.featured) ||
							(index === filteredProjects.length - 1 &&
								(index + 1) % 2 === 0);

						return (
							<ProjectTile
								key={proj.name}
								name={proj.name}
								title={proj.title}
								categories={proj.categories}
								featured={proj.featured}
								image={proj.thumbImage}
								variant={isLong ? "long" : "standard"}
							/>
						);
					})}
				</div>
			)}
		</section>
	);
}
