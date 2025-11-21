"use client";

import {
	useContext,
	useRef,
	useState,
	useEffect,
	Suspense,
	useCallback,
} from "react";
import { useIntersectionObserver } from "@/hooks";
import { ProjectTileType } from "@/types/gallery-types";
import { outputClassNames } from "@/utils";
import SiteContext from "@/context/site-context";
import Filters from "@/components/gallery/filters";
import ProjectTile from "@/components/gallery/project-tile";
import styles from "@/styles/components/gallery/projects.module.css";

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
	const [hideGrid, setHideGrid] = useState<boolean>(false);
	const classes = outputClassNames(["project-grid", className], [styles]);
	const projectsClasses = outputClassNames(
		["projects", hideGrid ? "hide" : ""],
		[styles],
	);
	const noResultsMessageClasses = outputClassNames(
		["body-text", "large", "no-results-message"],
		[styles],
	);
	const getFilteredProjects = useCallback(() => {
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
	}, [favedProjects, filters, projects]);
	const [filteredProjects, setFilteredProjects] = useState<ProjectTileType[]>(
		getFilteredProjects(),
	);

	useEffect(() => {
		if (!filteredProjects.length) {
			setFilteredProjects(getFilteredProjects());
			return;
		}

		setHideGrid(true);
	}, [filters]);

	function handleGridTransitionEnd(event: React.TransitionEvent) {
		const projectsEl = projectsRef?.current;

		if (!projectsEl || event.target !== projectsEl || !hideGrid) return;

		setFilteredProjects(getFilteredProjects());
		setHideGrid(false);
	}

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
					onTransitionEnd={handleGridTransitionEnd}
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
