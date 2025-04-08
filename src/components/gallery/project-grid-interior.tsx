import { HeadingType } from "@/types/global-types";
import { ProjectTileType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import ProjectTile from "@/components/gallery/project-tile";
import HeadingBar from "@/components/global/heading-bar";
import styles from "@/styles/components/gallery/projects.module.css";

export type ProjectGridInteriorProps = {
	title: string;
	url: string;
	projects: ProjectTileType[];
	heading?: HeadingType;
	buttonText?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectGridInterior({
	title,
	url,
	projects,
	heading = "h2",
	buttonText = "See All Projects",
	className = "",
	...otherProps
}: ProjectGridInteriorProps) {
	const classes = printClassNames([
		styles["project-grid-interior"],
		className,
	]);

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

			<div className={styles.projects}>
				{projects.map((proj) => {
					return (
						<ProjectTile
							key={proj.name}
							{...proj}
							thumbnail={proj.thumbImage.small}
							variant="small"
							heading="h3"
						/>
					);
				})}
			</div>
		</section>
	);
}
