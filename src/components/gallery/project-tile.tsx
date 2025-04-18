import { ProjectTileType } from "@/types/gallery-types";
import { HeadingType, ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import CategoryChip from "@/components/global/category-chip";
import CustomLink from "@/components/global/custom-link";
import ResponsiveImage from "@/components/global/responsive-image";
import FavButton from "@/components/gallery/fav-button";
import FeaturedFlag from "@/components/gallery/featured-flag";
import styles from "@/styles/components/gallery/projects.module.css";

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
	const classes = printClassNames([
		styles["project-tile"],
		styles[variant],
		className,
	]);
	const Heading = heading as React.ElementType;
	const url = `/projects/${name}/`;
	const primaryCategory =
		categories.find((cat) => cat.primary) || categories[0];

	return (
		<article
			className={classes}
			{...otherProps}
		>
			<div className={styles.content}>
				<CategoryChip
					className={styles.category}
					category={primaryCategory}
					addLink={false}
					size={variant === "small" ? "extra-small" : "small"}
				/>

				<Heading className={styles.title}>
					<CustomLink to={url}>
						<span className={styles["title-text"]}>{title}</span>
					</CustomLink>
				</Heading>
			</div>

			<div className={styles["image-wrapper"]}>
				{featured && <FeaturedFlag />}

				<FavButton
					projectID={name}
					projectTitle={title}
				/>

				<ResponsiveImage
					className={styles.image}
					image={thumbnail}
				/>
			</div>
		</article>
	);
}
