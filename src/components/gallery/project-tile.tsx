import { ProjectTileType } from "@/types/gallery-types";
import { HeadingType, ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils";
import CategoryChip from "@/components/global/category-chip";
import CustomLink from "@/components/global/custom-link";
import ResponsiveImage from "@/components/global/responsive-image";
import FavButton from "./fav-button";
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
