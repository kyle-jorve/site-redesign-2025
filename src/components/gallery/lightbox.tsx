"use client";

import { useContext } from "react";
import { createPortal } from "react-dom";
import SiteContext from "@/utils/site-context";
import { ImageMetaType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import LightboxSlideshow from "@/components/gallery/lightbox-slideshow";
import CircleButton from "@/components/global/circle-button";
import styles from "@/styles/components/gallery/lightbox.module.css";

export type LightboxProps = {
	images: ImageMetaType[];
} & React.HTMLAttributes<HTMLDialogElement>;

export default function Lightbox({
	images,
	className = "",
	...otherProps
}: LightboxProps) {
	const {
		lightboxId,
		lightboxInitialSlideIndex,
		lightboxOpen,
		closeLightbox,
	} = useContext(SiteContext);
	const classes = printClassNames([
		styles.lightbox,
		lightboxOpen ? styles.open : "",
		className,
	]);

	return createPortal(
		<dialog
			className={classes}
			id={lightboxId}
			open={lightboxOpen}
			{...otherProps}
		>
			<CircleButton
				icon="cross"
				aria-label="close lightbox"
				shadowColor="light"
				className={styles["close-button"]}
				onClick={() => closeLightbox()}
			/>
			<LightboxSlideshow
				images={images}
				activeSlide={lightboxInitialSlideIndex}
			/>
		</dialog>,
		document.body,
	);
}
