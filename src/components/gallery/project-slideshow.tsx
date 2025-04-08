"use client";

import { useState } from "react";
import { printClassNames } from "@/utils";
import { ImageDataType } from "@/types/global-types";
import CircleButton from "@/components/global/circle-button";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/projects.module.css";

export type ProjectSlideshowProps = {
	images: ImageDataType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectSlideshow({
	images,
	className = "",
	...otherProps
}: ProjectSlideshowProps) {
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const classes = printClassNames([styles["project-slideshow"], className]);

	function handleArrowClick(direction: "forward" | "back") {
		setActiveSlide((prev) => {
			if (direction === "forward" && prev + 1 === images.length) return 0;
			if (direction === "forward") return prev + 1;

			if (direction === "back" && prev === 0) return images.length - 1;
			return prev - 1;
		});
	}

	function handleDotClick(index: number) {
		setActiveSlide(index);
	}

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<div className={styles["slide-track"]}>
				<div className={styles.slides}>
					{images.map((image, index) => {
						return (
							<div
								key={`slideshow-slide-${image.name}`}
								className={`${styles.slide}${
									activeSlide === index
										? ` ${styles.active}`
										: ""
								}`}
							>
								<ResponsiveImage
									className={styles["slide-image"]}
									image={image}
								/>
							</div>
						);
					})}
				</div>
			</div>

			<div className={styles.arrows}>
				<CircleButton
					className={`${styles["arrow"]} ${styles["prev"]}`}
					icon="arrow-left"
					aria-label="go to previous slide"
					onClick={() => handleArrowClick("back")}
				/>

				<CircleButton
					className={`${styles["arrow"]} ${styles["next"]}`}
					icon="arrow-right"
					aria-label="go to next slide"
					onClick={() => handleArrowClick("forward")}
				/>
			</div>

			<div className={styles.dots}>
				{images.map((image, index) => {
					return (
						<button
							key={`${image.name}-dot`}
							className={`${styles.dot}${
								index === activeSlide ? ` ${styles.active}` : ""
							}`}
							onClick={() => handleDotClick(index)}
							aria-label={`Go to slide ${index + 1}`}
						></button>
					);
				})}
			</div>
		</section>
	);
}
