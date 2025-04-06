import { ProjectTileType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import CategoryChip from "@/components/global/category-chip";
import CustomLink from "@/components/global/custom-link";
import ResponsiveImage from "@/components/global/responsive-image";
import CircleButton from "@/components/global/circle-button";
import styles from "@/styles/components/gallery/project-grid.module.css";

export type ProjectTileProps = ProjectTileType & {
	handleFaveClick: (id: string) => void;
	heading?: "h2" | "h3" | "h4" | "h5" | "h6";
	variant?: "standard" | "long" | "small";
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectTile({
	name,
	title,
	categories,
	faved,
	thumbImage,
	handleFaveClick,
	heading = "h2",
	variant = "standard",
	className = "",
	...otherProps
}: ProjectTileProps) {
	const classes = printClassNames([
		styles["project-tile"],
		styles[variant],
		faved ? styles.faved : "",
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
					{categories.map((cat) => {
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
					image={thumbImage}
				/>
			</div>
		</article>
	);
}
