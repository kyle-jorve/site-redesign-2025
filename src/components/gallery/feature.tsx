import { ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils";
import { CategoryType } from "@/types/gallery-types";
import CategoryChip from "@/components/global/category-chip";
import ButtonLink from "@/components/global/button-link";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/feature.module.css";

export type FeatureProps = {
	title: string;
	description: string;
	url: string;
	image: ImageDataType;
	buttonText?: string;
	alignment?: "image-left" | "image-right";
	number?: string;
	category?: CategoryType;
	supertitle?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function Feature({
	title,
	description,
	url,
	image,
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
				{!!number && (
					<span className={`page-title ${styles.number}`}>
						{number}
					</span>
				)}

				{!!category && (
					<CategoryChip
						className={styles.category}
						category={category}
					/>
				)}

				{!!supertitle && (
					<span className={styles.supertitle}>{supertitle}</span>
				)}

				<h2 className={`heading-3 ${styles.title}`}>{title}</h2>

				<p className={`body-text large ${styles.desc}`}>
					{description}
				</p>

				<div className={styles["button-row"]}>
					<ButtonLink url={url}>{buttonText}</ButtonLink>
				</div>
			</div>

			<div className={styles["image-col"]}>
				<div className={styles["image-wrapper"]}>
					<ResponsiveImage
						className={styles.image}
						image={image}
					/>
				</div>
			</div>
		</article>
	);
}
