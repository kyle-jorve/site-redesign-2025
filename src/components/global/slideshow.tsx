import { useState, useRef, createRef, useEffect } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { printClassNames, getDestinationSlideIndex } from "@/utils/utils";
import CircleButton from "@/components/global/circle-button";
import SlideshowSlide from "@/components/global/slideshow-slide";
import SlideshowDot from "@/components/global/slideshow-dot";
import styles from "@/styles/components/global/slideshow.module.css";

export type SlideType = {
	id: string;
	content: React.ReactElement;
};

export type SlideshowProps = {
	slides: SlideType[];
	activeSlideIndex?: number;
	useDots?: boolean;
	useFadeIn?: boolean;
	/**
	 * Used for areas with dark backgrounds
	 */
	useLightMode?: boolean;
	/**
	 * Limit slide aspect ratio to 16:9
	 */
	controlSlideAspect?: boolean;
	insideLightbox?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Slideshow({
	slides,
	activeSlideIndex = 0,
	useDots = true,
	useFadeIn = true,
	useLightMode = false,
	controlSlideAspect = true,
	insideLightbox = false,
	className = "",
	...otherProps
}: SlideshowProps) {
	const notASlideshow = slides.length <= 1;
	const sectionRef = useRef<HTMLElement>(null);
	const slideContainerRef = useRef<HTMLDivElement>(null);
	const slideRefs = slides.map((_, index) => ({
		ref: createRef<HTMLDivElement>(),
		index,
	}));
	const [activeSlide, setActiveSlide] = useState<number>(activeSlideIndex);
	const intersected = useIntersectionObserver(sectionRef);
	const classes = printClassNames(
		[
			"slideshow",
			notASlideshow ? "single-slide" : "",
			useLightMode ? "light-mode" : "",
			controlSlideAspect ? "controlled-slide-aspect" : "",
			insideLightbox ? "inside-lightbox" : "",
			className,
		],
		[styles],
	);
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
		if (slideIndex === slides.length - 1) return slidesRef.scrollWidth;

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
			slides.length,
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

	useEffect(() => {
		// TODO: scroll to slide on slideshow render if activeSlideIndex > 0
	}, []);

	if (!slides.length) return null;

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
							shadowColor={useLightMode ? "light" : undefined}
							onClick={() => handleArrowClick("backward")}
						/>

						<CircleButton
							className={`${styles["arrow"]} ${styles["next"]}`}
							icon="arrow-right"
							aria-label="go to next slide"
							shadowColor={useLightMode ? "light" : undefined}
							onClick={() => handleArrowClick("forward")}
						/>
					</div>
				)}

				<div
					ref={slideContainerRef}
					className={styles.slides}
				>
					{slides.map((slide, index) => {
						const isActiveSlide = activeSlide === index;

						return (
							<SlideshowSlide
								key={`slideshow-slide-${slide.id}`}
								ref={slideRefs[index].ref}
								active={isActiveSlide}
							>
								{slide.content}
							</SlideshowSlide>
						);
					})}
				</div>
			</div>

			{!notASlideshow && useDots && (
				<div className={styles.dots}>
					{slides.map((slide, index) => {
						const isActiveDot = activeSlide === index;

						return (
							<SlideshowDot
								key={`${slide.id}-dot`}
								active={isActiveDot}
								onClick={() => handleDotClick(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						);
					})}
				</div>
			)}
		</section>
	);
}
