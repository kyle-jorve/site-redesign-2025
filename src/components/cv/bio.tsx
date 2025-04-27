"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { HeadingType } from "@/types/global-types";
import { BioType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import SocialIcons from "@/components/global/social-icons";
import ButtonLink from "@/components/global/button-link";
import ContentBox from "@/components/global/content-box";
import styles from "@/styles/components/cv/bio.module.css";
import socialStyles from "@/styles/components/global/social-icons.module.css";

export type BioProps = BioType & {
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
	const classes = printClassNames([styles.bio, styles[placement], className]);
	const isHero = placement === "hero";
	const Heading = heading as React.ElementType;

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
						<div className={styles["button-row"]}>
							<ButtonLink url={url}>{buttonText}</ButtonLink>
						</div>
					)}
				</ContentBox>

				<div className={styles["image-col"]}>
					<ResponsiveImage
						className={styles.image}
						image={image}
						loading={placement === "hero" ? "eager" : "lazy"}
						fetchPriority={placement === "hero" ? "high" : "low"}
					/>
				</div>
			</article>
		</section>
	);
}
