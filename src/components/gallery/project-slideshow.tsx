"use client";

import { useState, useRef, createRef, useEffect } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { printClassNames } from "@/utils/utils";
import { ImageDataType } from "@/types/global-types";
import CircleButton from "@/components/global/circle-button";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/gallery/slideshow.module.css";

export type ProjectSlideshowProps = {
	images: ImageDataType[];
} & React.HTMLAttributes<HTMLElement>;

export default function ProjectSlideshow({
	images,
	className = "",
	...otherProps
}: ProjectSlideshowProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const slideContainerRef = useRef<HTMLDivElement>(null);
	const slideRefs = images.map((_, index) => ({
		ref: createRef<HTMLDivElement>(),
		index,
	}));
	const intersected = useIntersectionObserver(sectionRef);
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const classes = printClassNames([styles.slideshow, className]);

	function getSlideOffset(slideIndex: number) {
		const componentRef = sectionRef.current;
		const slidesRef = slideContainerRef.current;

		if (!componentRef || !slidesRef) return;

		const sidePadding =
			Number(
				getComputedStyle(componentRef)
					.getPropertyValue("--side-padding")
					.replace("rem", ""),
			) * 16;

		if (slideIndex === 0) return -1;
		if (slideIndex === images.length - 1) return slidesRef.scrollWidth;

		const slideRef = slideRefs[slideIndex].ref.current;

		if (!slideRef) return null;

		return (
			slideRef.getBoundingClientRect().left +
			slidesRef.scrollLeft -
			sidePadding
		);
	}

	function handleArrowClick(direction: "forward" | "backward") {
		const slidesRef = slideContainerRef.current;

		if (!slidesRef) return;

		const destinationIndex = (() => {
			if (direction === "forward" && activeSlide === images.length - 1)
				return 0;
			else if (direction === "forward") return activeSlide + 1;

			if (direction === "backward" && activeSlide === 0)
				return images.length - 1;
			else if (direction === "backward") return activeSlide - 1;

			return 0;
		})();
		const destinationOffset = getSlideOffset(destinationIndex);

		if (!destinationOffset) return;

		slidesRef.scroll({
			top: 0,
			left: destinationOffset,
			behavior: "smooth",
		});
	}

	function handleDotClick(index: number) {
		const slidesRef = slideContainerRef.current;

		if (!slidesRef) return;

		const destinationOffset = getSlideOffset(index);

		if (!destinationOffset) return;

		slidesRef.scroll({
			top: 0,
			left: destinationOffset,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		const slidesContainer = slideContainerRef?.current;
		const slides = slideRefs.filter((slide) => slide.ref.current);

		if (!slidesContainer || !slides.length) return;

		let io: IntersectionObserver | null = new IntersectionObserver(
			ioCallback,
			{ threshold: 0.7 },
		);

		function ioCallback(entries: IntersectionObserverEntry[]) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = slides.find(
						(slide) => slide.ref.current === entry.target,
					)?.index;

					if (index === undefined || index === activeSlide) return;

					setActiveSlide(index);
				}
			});
		}

		slides.forEach((slide) => {
			if (slide.ref.current) io?.observe(slide.ref.current);
		});

		return () => {
			io?.disconnect();
			io = null;
		};
	}, [activeSlide, slideRefs]);

	return (
		<section
			ref={sectionRef}
			className={classes}
			style={{
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
			{...otherProps}
		>
			<div className={styles["slide-track"]}>
				<div className={styles.arrows}>
					<CircleButton
						className={`${styles["arrow"]} ${styles["prev"]}`}
						icon="arrow-left"
						aria-label="go to previous slide"
						onClick={() => handleArrowClick("backward")}
					/>

					<CircleButton
						className={`${styles["arrow"]} ${styles["next"]}`}
						icon="arrow-right"
						aria-label="go to next slide"
						onClick={() => handleArrowClick("forward")}
					/>
				</div>
				<div
					ref={slideContainerRef}
					className={styles.slides}
				>
					{images.map((image, index) => {
						const isActiveSlide = activeSlide === index;

						return (
							<div
								key={`slideshow-slide-${image.name}`}
								ref={slideRefs[index].ref}
								className={`${styles.slide}${
									isActiveSlide ? ` ${styles.active}` : ""
								}`}
							>
								<div className={styles["image-wrapper"]}>
									<ResponsiveImage
										className={styles["slide-image"]}
										image={image}
										loading="eager"
										fetchPriority="high"
									/>
								</div>
							</div>
						);
					})}
				</div>
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
