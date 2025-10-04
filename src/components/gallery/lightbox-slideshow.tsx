"use client";

import { printClassNames } from "@/utils/utils";
import { ImageDataType } from "@/types/global-types";
import { LightboxProps } from "@/components/gallery/lightbox";
import Slideshow from "@/components/global/slideshow";
import styles from "@/styles/components/gallery/lightbox.module.css";

export type LightboxSlideshowProps = {
	images: LightboxProps["images"];
	activeSlide: number;
} & React.HTMLAttributes<HTMLElement>;

export default function LightboxSlideshow({
	images,
	activeSlide,
	className = "",
	...otherProps
}: LightboxSlideshowProps) {
	const classes = printClassNames([styles.slideshow, className]);
	const imageConfigs: ImageDataType[] = images.map((image) => ({
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
		<Slideshow
			className={classes}
			images={imageConfigs}
			currentSlide={activeSlide}
			useFadeIn={false}
			useLightMode={true}
			controlSlideHeights={false}
			{...otherProps}
		/>
	);
}
