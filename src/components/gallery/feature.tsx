"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { ImageDataType } from "@/types/global-types";
import { FeatureType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";
import CategoryChip from "@/components/global/category-chip";
import ButtonLink from "@/components/global/button-link";
import CustomLink from "@/components/global/custom-link";
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
	const articleRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(articleRef);
	const classes = printClassNames([
		styles.feature,
		styles[alignment],
		className,
	]);
	const imagesData = Array.isArray(image) ? image : [image];
	const imageConfig: ImageDataType[] = imagesData.map((image) => ({
		...image,
		sources: [
			{
				minScreenWidth: "64em",
				imageWidth: 640,
				imageHeight: 676,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
				imageHeight: 512,
			},
		],
		mobileSource: {
			imageWidth: 640,
			imageHeight: 640,
		},
	}));
	const Images = imageConfig.map((image) => {
		return (
			<ResponsiveImage
				key={image.name}
				className={styles.image}
				image={image}
			/>
		);
	});

	return (
		<article
			ref={articleRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
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

				{description}

				{!!url && (
					<div className={styles["button-row"]}>
						<ButtonLink
							className={styles.button}
							url={url}
						>
							{buttonText}
						</ButtonLink>
					</div>
				)}
			</div>

			<div className={styles["image-col"]}>
				{!!url ? (
					<CustomLink
						to={url}
						className={styles["image-link"]}
					>
						{Images}
					</CustomLink>
				) : (
					Images
				)}
			</div>
		</article>
	);
}
