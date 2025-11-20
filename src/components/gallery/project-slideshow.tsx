"use client";

import { ImageDataType, ImageMetaType } from "@/types/global-types";
import { outputClassNames } from "@/utils/utils";
import Slideshow, { SlideType } from "@/components/global/slideshow";
import LightboxImageTrigger from "@/components/global/lightbox-image-trigger";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/project-detail.module.css";
import slideshowStyles from "@/styles/components/global/slideshow.module.css";

export type ProjectSlideshowProps = {
	images: ImageMetaType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectSlideshow({
	images,
	className = "",
	...otherProps
}: ProjectSlideshowProps) {
	const classes = outputClassNames(["slideshow", className], [styles]);
	const imageConfigs: ImageDataType[] = images.map((image) => ({
		...image,
		sources: [
			{
				minScreenWidth: "90em",
				imageWidth: 1920,
				imageHeight: 968,
			},
			{
				minScreenWidth: "64em",
				imageWidth: 1440,
				imageHeight: 726,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
				imageHeight: 516,
			},
		],
		mobileSource: {
			imageWidth: 640,
			imageHeight: 480,
		},
	}));
	const slideshowSlides: SlideType[] = imageConfigs.map((config, index) => ({
		id: config.name,
		content: (
			<LightboxImageTrigger
				className={slideshowStyles["image-wrapper"]}
				lightboxImages={images}
				imageTitle={config.title}
				index={index}
			>
				<ResponsiveImage
					className={slideshowStyles["slide-image"]}
					image={config}
					loading="eager"
					fetchPriority="high"
				/>
			</LightboxImageTrigger>
		),
	}));

	return (
		<Slideshow
			className={classes}
			slides={slideshowSlides}
			{...otherProps}
		/>
	);
}
