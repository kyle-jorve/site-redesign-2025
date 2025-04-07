import { useContext } from "react";
import { ProjectTileType } from "@/types/gallery-types";
import { HeadingType, ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils";
import SiteContext from "@/site-context";
import CategoryChip from "@/components/global/category-chip";
import CustomLink from "@/components/global/custom-link";
import ResponsiveImage from "@/components/global/responsive-image";
import CircleButton from "@/components/global/circle-button";
import FeaturedFlag from "@/components/gallery/featured-flag";
import styles from "@/styles/components/gallery/project-grid.module.css";

export type ProjectTileProps = Omit<ProjectTileType, "thumbImage"> & {
	thumbnail: ImageDataType;
	heading?: HeadingType;
	variant?: "standard" | "long" | "small";
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectTile({
	name,
	title,
	categories,
	thumbnail,
	featured = false,
	heading = "h2",
	variant = "standard",
	className = "",
	...otherProps
}: ProjectTileProps) {
	const { favedProjects, setFavedProjects } = useContext(SiteContext);
	const faved = favedProjects.includes(name);
	const classes = printClassNames([
		styles["project-tile"],
		styles[variant],
		faved ? styles.faved : "",
		className,
	]);
	const Heading = heading as React.ElementType;
	const url = `/projects/${name}/`;

	function handleFaveClick(id: string) {
		setFavedProjects((prev) => {
			const isFaved = prev.includes(id);

			if (isFaved) return prev.filter((fav) => fav !== id);
			return [...prev, id];
		});
	}

	return (
		<article
			className={classes}
			{...otherProps}
		>
			<div className={styles.content}>
				<div className={styles["categories-row"]}>
					{categories
						.filter((cat) => !cat.hidden)
						.map((cat) => {
							return (
								<CategoryChip
									key={`${name}-${cat.name}`}
									category={cat}
									addLink={false}
									size={
										variant === "small"
											? "extra-small"
											: "small"
									}
								/>
							);
						})}
				</div>

				<Heading className={styles.title}>
					<CustomLink to={url}>{title}</CustomLink>
				</Heading>
			</div>

			<div className={styles["image-wrapper"]}>
				{featured && <FeaturedFlag />}

				<CircleButton
					className={styles["fave-button"]}
					icon={faved ? "heart-solid" : "heart"}
					color="light"
					aria-label={`${faved ? "remove" : "add"} ${title} ${
						faved ? "from" : "to"
					} favorites`}
					onClick={() => handleFaveClick(name)}
				/>

				<ResponsiveImage
					className={styles.image}
					image={thumbnail}
				/>
			</div>
		</article>
	);
}
