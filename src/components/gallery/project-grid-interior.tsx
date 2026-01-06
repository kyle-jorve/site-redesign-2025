"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks";
import { HeadingType } from "@/types/global-types";
import { ProjectTileType } from "@/types/gallery-types";
import { outputClassNames } from "@/utils";
import ProjectTile from "@/components/gallery/project-tile";
import HeadingBar from "@/components/global/heading-bar";
import styles from "@/styles/components/gallery/projects.module.css";

export type ProjectGridInteriorProps = {
	title: string;
	projects: ProjectTileType[];
	url?: string;
	heading?: HeadingType;
	buttonText?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectGridInterior({
	title,
	projects,
	url = undefined,
	heading = "h2",
	buttonText = "See All",
	className = "",
	...otherProps
}: ProjectGridInteriorProps) {
	const gridRef = useRef<HTMLDivElement>(null);
	const intersected = useIntersectionObserver(gridRef);
	const classes = outputClassNames(
		["project-grid-interior", className],
		[styles],
	);

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<HeadingBar
				title={title}
				url={url}
				heading={heading}
				buttonText={buttonText}
			/>

			<div
				ref={gridRef}
				className={styles.projects}
				style={{
					opacity: intersected ? 1 : 0,
					transition: "opacity 1s ease",
				}}
			>
				{projects.slice(0, 3).map((proj) => {
					return (
						<ProjectTile
							key={proj.name}
							name={proj.name}
							title={proj.title}
							categories={proj.categories}
							featured={proj.featured}
							image={proj.thumbImage}
							variant="small"
							heading="h3"
						/>
					);
				})}
			</div>
		</section>
	);
}
