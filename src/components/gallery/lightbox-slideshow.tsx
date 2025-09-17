"use client";

import { printClassNames } from "@/utils/utils";
import { ImageMetaType, ImageDataType } from "@/types/global-types";
import { LightboxProps } from "@/components/gallery/lightbox";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/lightbox.module.css";

export type LightboxSlideshowProps = {
	images: LightboxProps["images"];
	activeSlide: LightboxProps["activeSlide"];
} & React.HTMLAttributes<HTMLElement>;

export default function LightboxSlideshow({
	images,
	activeSlide,
	className = "",
	...otherProps
}: LightboxSlideshowProps) {
	const notASlideshow = images.length <= 1;
	const classes = printClassNames([styles["lightbox-slideshow"], className]);
	const imageConfigs: ImageMetaType[] = images.map((image) => ({
		...image,
		sources: [
			{
				minScreenWidth: "90em",
				imageWidth: 1920,
			},
			{
				minScreenWidth: "64em",
				imageWidth: 1440,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
			},
		],
		mobileSource: {
			imageWidth: 640,
		},
	}));

	return (
		<section
			className={classes}
			{...otherProps}
		></section>
	);
}
