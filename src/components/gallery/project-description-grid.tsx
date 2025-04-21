"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { printClassNames } from "@/utils/utils";
import { ImageDataType } from "@/types/global-types";
import { ProjectType } from "@/types/gallery-types";
import ContentBox from "@/components/global/content-box";
import ButtonLink from "@/components/global/button-link";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/project-detail.module.css";

export type ProjectDescriptionGridProps = {
	title: ProjectType["descriptionTitle"];
	bodyText: ProjectType["descriptionBody"];
	url?: string;
	buttonText?: string;
	images?: ImageDataType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectDescriptionGrid({
	title,
	bodyText,
	url = undefined,
	buttonText = "Visit Website",
	images = [],
	className = "",
	...otherProps
}: ProjectDescriptionGridProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const classes = printClassNames([styles["description-grid"], className]);

	return (
		<section
			ref={sectionRef}
			className={classes}
			style={{
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
			{...otherProps}
		>
			<ContentBox className={styles["desc-box"]}>
				<h2 className={`underline ${styles.title}`}>{title}</h2>

				<div className={styles.desc}>{bodyText}</div>

				{url !== undefined && (
					<div className={styles["button-row"]}>
						<ButtonLink url={url}>{buttonText}</ButtonLink>
					</div>
				)}
			</ContentBox>

			{!!images.length && (
				<div className={styles["image-grid"]}>
					{images.map((image) => {
						return (
							<div
								key={`project-image-grid-${image.name}`}
								className={styles["image-wrapper"]}
							>
								<ResponsiveImage
									className={styles.image}
									image={image}
								/>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
}
