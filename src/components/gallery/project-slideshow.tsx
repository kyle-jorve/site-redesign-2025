"use client";

import { ImageDataType, ImageMetaType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import Slideshow from "@/components/global/slideshow";
import styles from "@/styles/components/gallery/project-detail.module.css";

export type ProjectSlideshowProps = {
	images: ImageMetaType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectSlideshow({
	images,
	className = "",
	...otherProps
}: ProjectSlideshowProps) {
	const classes = printClassNames([styles.slideshow, className]);
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

	return (
		<Slideshow
			className={classes}
			images={imageConfigs}
			{...otherProps}
		/>
	);
}
