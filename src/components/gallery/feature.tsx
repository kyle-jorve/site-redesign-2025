import { FeatureType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import CategoryChip from "@/components/global/category-chip";
import ButtonLink from "@/components/global/button-link";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/feature-grid.module.css";

export type FeatureProps = Omit<FeatureType, "name"> &
	React.HTMLAttributes<HTMLElement>;

export default function Feature({
	title,
	description,
	image,
	url = undefined,
	buttonText = "See More",
	alignment = "image-right",
	number = undefined,
	category = undefined,
	supertitle = undefined,
	className = "",
	...otherProps
}: FeatureProps) {
	const classes = printClassNames([styles.feature, alignment, className]);

	return (
		<article
			className={classes}
			{...otherProps}
		>
			<div className={styles["content-col"]}>
				{!!number && <span className={styles.number}>{number}</span>}

				{!!category && (
					<CategoryChip
						className={styles.category}
						category={category}
					/>
				)}

				{!!supertitle && (
					<span className={`superheading ${styles.supertitle}`}>
						{supertitle}
					</span>
				)}

				<h2 className={`heading-3 ${styles.title}`}>{title}</h2>

				<p className={`body-text large ${styles.desc}`}>
					{description}
				</p>

				{!!url && (
					<div className={styles["button-row"]}>
						<ButtonLink url={url}>{buttonText}</ButtonLink>
					</div>
				)}
			</div>

			<div className={styles["image-col"]}>
				<ResponsiveImage
					className={styles.image}
					image={image}
				/>
			</div>
		</article>
	);
}
