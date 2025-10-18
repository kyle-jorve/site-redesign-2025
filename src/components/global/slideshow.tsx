import { useState, useRef, createRef, useEffect } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { ImageDataType, ImageMetaType } from "@/types/global-types";
import { printClassNames, getDestinationSlideIndex } from "@/utils/utils";
import CircleButton from "@/components/global/circle-button";
import LightboxImageTrigger from "@/components/global/lightbox-image-trigger";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/global/slideshow.module.css";

export type SlideshowProps = {
	images: ImageDataType[];
	useDots?: boolean;
	useFadeIn?: boolean;
	useLightMode?: boolean; // used for areas with dark backgrounds
	controlSlideHeights?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Slideshow({
	images,
	useDots = true,
	useFadeIn = true,
	useLightMode = false,
	controlSlideHeights = true,
	className = "",
	...otherProps
}: SlideshowProps) {
	const notASlideshow = images.length <= 1;
	const sectionRef = useRef<HTMLElement>(null);
	const slideContainerRef = useRef<HTMLDivElement>(null);
	const slideRefs = images.map((_, index) => ({
		ref: createRef<HTMLDivElement>(),
		index,
	}));
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const intersected = useIntersectionObserver(sectionRef);
	const lightboxImages: ImageMetaType[] = images.map((image) => ({
		name: image.name,
		pathKey: image.pathKey,
		alt: image.alt,
		horizontalOrientation: image.horizontalOrientation,
		verticalOrientation: image.verticalOrientation,
	}));
	const classes = printClassNames([
		styles.slideshow,
		notASlideshow ? styles["single-image"] : "",
		useLightMode ? styles["light-mode"] : "",
		controlSlideHeights ? styles["controlled-slide-heights"] : "",
		className,
	]);
	const sectionStyles: React.CSSProperties | undefined = (() => {
		if (!useFadeIn) return otherProps.style;

		return {
			...otherProps.style,
			opacity: intersected ? 1 : 0,
			transition: "opacity 1s ease",
		};
	})();

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

	function scrollToSlide(slideIndex: number) {
		const slidesRef = slideContainerRef.current;

		if (!slidesRef) return;

		const offset = getSlideOffset(slideIndex);

		if (!offset) return;

		slidesRef.scroll({
			top: 0,
			left: offset,
			behavior: "smooth",
		});
	}

	function handleArrowClick(direction: "forward" | "backward") {
		const slidesRef = slideContainerRef.current;

		if (!slidesRef) return;

		const destinationIndex = getDestinationSlideIndex(
			direction,
			activeSlide,
			images.length,
		);
		const destinationOffset = getSlideOffset(destinationIndex);

		if (!destinationOffset) return;

		slidesRef.scroll({
			top: 0,
			left: destinationOffset,
			behavior: "smooth",
		});
	}

	function handleDotClick(index: number) {
		scrollToSlide(index);
	}

	useEffect(() => {
		if (notASlideshow) return;

		const slidesContainer = slideContainerRef?.current;
		const slides = slideRefs.filter((slide) => slide.ref.current);

		if (!slidesContainer || !slides.length) return;

		// watch for slide intersection
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
	}, [activeSlide, slideRefs, notASlideshow]);

	if (!images.length) return null;

	return (
		<section
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={sectionStyles}
		>
			<div className={styles["slide-track"]}>
				{!notASlideshow && (
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
				)}

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
								<LightboxImageTrigger
									className={styles["image-wrapper"]}
									lightboxImages={lightboxImages}
									index={index}
								>
									<ResponsiveImage
										className={styles["slide-image"]}
										image={image}
										loading="eager"
										fetchPriority="high"
									/>
								</LightboxImageTrigger>
							</div>
						);
					})}
				</div>
			</div>

			{!notASlideshow && useDots && (
				<div className={styles.dots}>
					{images.map((image, index) => {
						return (
							<button
								key={`${image.name}-dot`}
								className={`${styles.dot}${
									index === activeSlide
										? ` ${styles.active}`
										: ""
								}`}
								onClick={() => handleDotClick(index)}
								aria-label={`Go to slide ${index + 1}`}
							></button>
						);
					})}
				</div>
			)}
		</section>
	);
}
