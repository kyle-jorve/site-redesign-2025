"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks";
import {
	HeadingType,
	ImageMetaType,
	ImageDataType,
} from "@/types/global-types";
import { BioType } from "@/types/cv-types";
import { outputClassNames } from "@/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import SocialIcons from "@/components/global/social-icons";
import ButtonLink from "@/components/global/button-link";
import ContentBox from "@/components/global/content-box";
import styles from "@/styles/components/cv/bio.module.css";
import socialStyles from "@/styles/components/global/social-icons.module.css";

export type BioProps = BioType & {
	image: ImageMetaType;
	placement?: "hero" | "body";
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLElement>;

export default function Bio({
	title,
	body,
	image,
	url = "/cv#resume",
	buttonText = <>See R&eacute;sum&eacute;</>,
	placement = "body",
	heading = "h2",
	className = "",
	...otherProps
}: BioProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const classes = outputClassNames(["bio", placement, className], [styles]);
	const isHero = placement === "hero";
	const Heading = heading as React.ElementType;
	const imageConfig: ImageDataType = {
		...image,
		sources: [
			{
				minScreenWidth: "64em",
				imageWidth: 768,
				imageHeight: 914,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
				imageHeight: 680,
			},
		],
		mobileSource: {
			imageWidth: 640,
			imageHeight: 730,
		},
	};

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
			<article className={styles.inner}>
				<ContentBox className={styles["content-col"]}>
					<Heading className={`underline ${styles.title}`}>
						{title}
					</Heading>

					{body}

					{isHero ? (
						<SocialIcons className={socialStyles["bio-icons"]} />
					) : (
						<div className="button-row">
							<ButtonLink url={url}>{buttonText}</ButtonLink>
						</div>
					)}
				</ContentBox>

				<div className={styles["image-col"]}>
					<ResponsiveImage
						className={styles.image}
						image={imageConfig}
						loading={placement === "hero" ? "eager" : "lazy"}
						fetchPriority={placement === "hero" ? "high" : "low"}
					/>
				</div>
			</article>
		</section>
	);
}
