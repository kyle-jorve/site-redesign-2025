import { ProjectTileType } from "@/types/gallery-types";
import {
	HeadingType,
	ImageDataType,
	ImageMetaType,
} from "@/types/global-types";
import { outputClassNames } from "@/utils";
import CategoryChip from "@/components/global/category-chip";
import CustomLink from "@/components/global/custom-link";
import ResponsiveImage from "@/components/global/responsive-image";
import FavButton from "@/components/gallery/fav-button";
import FeaturedFlag from "@/components/gallery/featured-flag";
import styles from "@/styles/components/gallery/project-tile.module.css";

export type ProjectTileProps = Omit<ProjectTileType, "thumbImage"> & {
	image: ImageMetaType;
	heading?: HeadingType;
	variant?: "standard" | "long" | "small";
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectTile({
	name,
	title,
	categories,
	image,
	featured = false,
	heading = 2,
	variant = "standard",
	className = "",
	...otherProps
}: ProjectTileProps) {
	const classes = outputClassNames(
		["project-tile", variant, className],
		[styles],
	);
	const Heading = `h${heading}` as React.ElementType;
	const url = `/projects/${name}/`;
	const primaryCategory =
		categories.find((cat) => cat.primary) || categories[0];
	const imageConfig: ImageDataType = {
		...image,
		sources: (() => {
			// long
			if (variant === "long") {
				return [
					{
						minScreenWidth: "64em",
						imageWidth: 1440,
						imageHeight: 540,
					},
					{
						minScreenWidth: "48em",
						imageWidth: 1024,
						imageHeight: 471,
					},
				];
			}
			// small
			if (variant === "small") {
				return [
					{
						minScreenWidth: "64em",
						imageWidth: 480,
						imageHeight: 343,
					},
					{
						minScreenWidth: "48em",
						imageWidth: 480,
						imageHeight: 534,
					},
				];
			}

			// standard
			return [
				{
					minScreenWidth: "64em",
					imageWidth: 720,
					imageHeight: 480,
				},
				{
					minScreenWidth: "48em",
					imageWidth: 512,
					imageHeight: 410,
				},
			];
		})(),
		mobileSource: (() => {
			// standard
			if (variant === "standard") {
				return {
					imageWidth: 480,
					imageHeight: 534,
				};
			}

			// long and small
			return {
				imageWidth: 768,
				imageHeight: 416,
			};
		})(),
	};

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
					size="extra-small"
				/>

				<Heading className={styles.title}>
					<CustomLink
						className={styles.link}
						to={url}
					>
						<span className={styles["title-text"]}>{title}</span>
					</CustomLink>
				</Heading>
			</div>

			<div className={styles["image-wrapper"]}>
				{featured && (
					<FeaturedFlag className={styles["featured-flag"]} />
				)}

				<FavButton
					className={styles["fav-button"]}
					projectID={name}
					projectTitle={title}
				/>

				<ResponsiveImage
					className={styles.image}
					image={imageConfig}
				/>
			</div>
		</article>
	);
}
