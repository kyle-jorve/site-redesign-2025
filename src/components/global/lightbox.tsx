"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
import SiteContext from "@/utils/site-context";
import { printClassNames, getDestinationSlideIndex } from "@/utils/utils";
import CircleButton from "@/components/global/circle-button";
import styles from "@/styles/components/global/lightbox.module.css";
import LightboxImage from "./lightbox-image";

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
		setLightboxActiveIndex,
		setlightboxImages,
	} = useContext(SiteContext);
	const [status, setStatus] = useState<"in" | "out" | "open" | "closed">(
		"closed",
	);
	const [imageStatus, setImageStatus] = useState<"active" | "hidden">(
		"active",
	);
	const lightboxRef = useRef<HTMLDialogElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const classes = printClassNames(["lightbox", status, className], [styles]);

	function handleImageLoad(_: React.SyntheticEvent<HTMLImageElement>) {
		setImageStatus("active");
	}

	function handleArrowClick(direction: "forward" | "backward") {
		const destinationIndex = getDestinationSlideIndex(
			direction,
			lightboxActiveIndex,
			lightboxImages.length,
		);

		imageRef?.current?.addEventListener(
			"transitionend",
			() => {
				setLightboxActiveIndex(destinationIndex);
			},
			{ once: true },
		);

		setImageStatus("hidden");
	}

	useEffect(() => {
		const lightboxEl = lightboxRef?.current;

		if (!lightboxEl || !lightboxImages.length) return;

		function handleAnimationEnd() {
			setStatus(lightboxOpen ? "open" : "closed");
			if (!lightboxOpen) {
				setLightboxActiveIndex(0);
				setlightboxImages([]);
			}
		}

		lightboxEl.addEventListener("animationend", handleAnimationEnd, {
			once: true,
		});

		setStatus(lightboxOpen ? "in" : "out");

		return () => {
			lightboxEl.removeEventListener("animationend", handleAnimationEnd);
		};
	}, [lightboxOpen]);

	return (
		<dialog
			className={classes}
			id={lightboxId}
			open={lightboxOpen}
			ref={lightboxRef}
			{...otherProps}
		>
			<CircleButton
				icon="cross"
				aria-label="close lightbox"
				shadowColor="light"
				className={styles["close-button"]}
				onClick={() => closeLightbox()}
			/>
			{lightboxImages.length > 1 && (
				<div className={styles.arrows}>
					<CircleButton
						className={styles["arrow-button"]}
						icon="arrow-left"
						shadowColor="light"
						aria-label="go to previous slide"
						onClick={() => handleArrowClick("backward")}
					/>
					<CircleButton
						className={styles["arrow-button"]}
						icon="arrow-right"
						shadowColor="light"
						aria-label="go to next slide"
						onClick={() => handleArrowClick("forward")}
					/>
				</div>
			)}

			{!!lightboxImages.length && (
				<LightboxImage
					ref={imageRef}
					className={styles[imageStatus]}
					image={lightboxImages[lightboxActiveIndex]}
					onLoad={handleImageLoad}
				/>
			)}

			{lightboxImages.length > 1 && (
				<span className={styles["slide-counter"]}>
					{lightboxActiveIndex + 1} / {lightboxImages.length}
				</span>
			)}
		</dialog>
	);
}
