"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
import SiteContext from "@/utils/site-context";
import { printClassNames /*, getDestinationSlideIndex*/ } from "@/utils/utils";
import CircleButton from "@/components/global/circle-button";
import LightboxImage from "@/components/global/lightbox-image";
import Slideshow, { SlideType } from "@/components/global/slideshow";
import styles from "@/styles/components/global/lightbox.module.css";

export type LightboxProps = React.HTMLAttributes<HTMLDialogElement>;

export default function Lightbox({
	className = "",
	...otherProps
}: LightboxProps) {
	const {
		lightboxActiveIndex,
		lightboxImages,
		lightboxId,
		lightboxOpen,
		closeLightbox,
		// setLightboxActiveIndex,
		setlightboxImages,
	} = useContext(SiteContext);
	// const [status, setStatus] = useState<"in" | "out" | "open" | "closed">(
	// 	"closed",
	// );
	// const [imageStatus, setImageStatus] = useState<"active" | "hidden">(
	// 	"active",
	// );
	// const [arrowButtonsDisabled, setArrowButtonsDisabled] = useState(false);
	// const lightboxRef = useRef<HTMLDialogElement | null>(null);
	// const imageRef = useRef<HTMLImageElement | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);
	const classes = printClassNames(
		["lightbox", lightboxOpen ? "active" : "", /*status,*/ className],
		[styles],
	);
	const slideshowSlides: SlideType[] = lightboxImages.map((image) => ({
		id: image.name,
		content: <LightboxImage image={image} />,
	}));

	function handleTransitionEnd() {
		if (!lightboxOpen) setlightboxImages([]);
		else closeButtonRef.current?.focus();
	}

	return (
		<dialog
			className={classes}
			id={lightboxId}
			open={lightboxOpen}
			// ref={lightboxRef}
			onTransitionEnd={handleTransitionEnd}
			{...otherProps}
		>
			<CircleButton
				ref={closeButtonRef}
				icon="cross"
				aria-label="close lightbox"
				shadowColor="light"
				className={styles["close-button"]}
				onClick={() => closeLightbox()}
			/>

			{!!lightboxImages.length && (
				<Slideshow
					className={styles.slideshow}
					slides={slideshowSlides}
					activeSlideIndex={lightboxActiveIndex}
					useFadeIn={false}
					useLightMode={true}
					controlSlideAspect={false}
					insideLightbox={true}
				/>
			)}
		</dialog>
	);
}
