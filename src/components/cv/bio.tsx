"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import {
	HeadingType,
	ImageMetaType,
	ImageDataType,
} from "@/types/global-types";
import { BioType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import SocialIcons from "@/components/global/social-icons";
import ButtonLink from "@/components/global/button-link";
import ContentBox from "@/components/global/content-box";
import "@/styles/components/cv/bio.css";
import "@/styles/components/global/social-icons.css";

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
	const classes = printClassNames(["bio", placement, className]);
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
			<article className="inner">
				<ContentBox className="content-col">
					<Heading className="underline title">{title}</Heading>

					{body}

					{isHero ? (
						<SocialIcons className="bio-icons" />
					) : (
						<div className="button-row">
							<ButtonLink url={url}>{buttonText}</ButtonLink>
						</div>
					)}
				</ContentBox>

				<div className="image-col">
					<ResponsiveImage
						className="image"
						image={imageConfig}
						loading={placement === "hero" ? "eager" : "lazy"}
						fetchPriority={placement === "hero" ? "high" : "low"}
					/>
				</div>
			</article>
		</section>
	);
}
