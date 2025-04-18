"use client";

import { useContext } from "react";
import { ProjectTileType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";
import SiteContext from "@/utils/site-context";
import Filters from "@/components/gallery/filters";
import ProjectTile from "@/components/gallery/project-tile";
import styles from "@/styles/components/gallery/projects.module.css";

export type ProjectGridProps = {
	projects: ProjectTileType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectGrid({
	projects,
	className = "",
	...otherProps
}: ProjectGridProps) {
	const { filters, favedProjects } = useContext(SiteContext);
	const classes = printClassNames([styles["project-grid"], className]);
	const filteredProjects = (() => {
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
	})();

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<Filters />

			<div className={styles.projects}>
				{filteredProjects.map((proj, index) => {
					const isLong = index === 0 && proj.featured;

					return (
						<ProjectTile
							key={proj.name}
							name={proj.name}
							title={proj.title}
							categories={proj.categories}
							featured={proj.featured}
							thumbnail={
								isLong
									? proj.thumbImage.long
									: proj.thumbImage.square
							}
							variant={isLong ? "long" : "standard"}
						/>
					);
				})}
			</div>
		</section>
	);
}
