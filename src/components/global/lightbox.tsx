"use client";

import React, { useContext, useRef } from "react";
import LightboxContext from "@/context/lightbox-context";
import { outputClassNames } from "@/utils";
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
		setlightboxImages,
	} = useContext(LightboxContext);
	const lightboxRef = useRef<HTMLDialogElement | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);
	const classes = outputClassNames(
		["lightbox", lightboxOpen ? "active" : "", className],
		[styles],
	);
	const slideshowSlides: SlideType[] = lightboxImages.map((image) => ({
		id: image.name,
		content: <LightboxImage image={image} />,
	}));
	const otherPropsSansAriaHidden = (() => {
		const otherPropsCopy = structuredClone(otherProps);

		delete otherPropsCopy["aria-hidden"];
		return otherPropsCopy;
	})();

	function handleTransitionEnd(event: React.TransitionEvent) {
		const lightboxEl = lightboxRef?.current;

		if (!lightboxEl || event.target !== lightboxEl) return;

		if (!lightboxOpen) setlightboxImages([]);
		else closeButtonRef.current?.focus();
	}

	return (
		<dialog
			ref={lightboxRef}
			className={classes}
			id={lightboxId}
			open={lightboxOpen}
			onTransitionEnd={handleTransitionEnd}
			inert={!lightboxOpen}
			{...otherPropsSansAriaHidden}
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
					slides={slideshowSlides}
					initialActiveSlideIndex={lightboxActiveIndex}
					useDots={false}
					useFadeIn={false}
					useLightMode={true}
					controlSlideAspect={false}
					insideLightbox={true}
				/>
			)}
		</dialog>
	);
}
