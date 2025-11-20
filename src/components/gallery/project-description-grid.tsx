"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { outputClassNames } from "@/utils/utils";
import { ImageDataType, ImageMetaType } from "@/types/global-types";
import { ProjectType } from "@/types/gallery-types";
import ContentBox from "@/components/global/content-box";
import ButtonLink from "@/components/global/button-link";
import LightboxImageTrigger from "@/components/global/lightbox-image-trigger";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/project-detail.module.css";

export type ProjectDescriptionGridProps = {
	title: ProjectType["descriptionTitle"];
	bodyText: ProjectType["descriptionBody"];
	supertitle?: ProjectType["descriptionSupertitle"];
	url?: string;
	buttonText?: string;
	images?: ImageMetaType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectDescriptionGrid({
	title,
	bodyText,
	supertitle = undefined,
	url = undefined,
	buttonText = "Visit Website",
	images = [],
	className = "",
	...otherProps
}: ProjectDescriptionGridProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const classes = outputClassNames(["description-grid", className], [styles]);
	const imageConfigs: ImageDataType[] = images.map((image) => ({
		...image,
		sources: [
			{
				minScreenWidth: "90em",
				imageWidth: 1920,
				imageHeight: 1920,
			},
			{
				minScreenWidth: "64em",
				imageWidth: 1440,
				imageHeight: 1440,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
				imageHeight: 576,
			},
		],
		mobileSource: {
			imageWidth: 640,
			imageHeight: 512,
		},
	}));

	return (
		<section
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
		>
			<ContentBox className={styles["desc-box"]}>
				{!!supertitle && (
					<span className="superheading">{supertitle}</span>
				)}

				<h2 className={`underline ${styles.title}`}>{title}</h2>

				<div className={styles.desc}>{bodyText}</div>

				{url !== undefined && (
					<div className="button-row">
						<ButtonLink url={url}>{buttonText}</ButtonLink>
					</div>
				)}
			</ContentBox>

			{!!images.length && (
				<div className={styles["image-grid"]}>
					{imageConfigs.map((image, index) => {
						return (
							<LightboxImageTrigger
								key={image.name}
								lightboxImages={images}
								imageTitle={image.title}
								index={index}
								className={styles["image-wrapper"]}
							>
								<ResponsiveImage
									className={styles.image}
									image={image}
								/>
							</LightboxImageTrigger>
						);
					})}
				</div>
			)}
		</section>
	);
}
