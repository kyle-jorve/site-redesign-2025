import { useState, useRef, createRef, useEffect, useCallback } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { outputClassNames, getDestinationSlideIndex } from "@/utils/utils";
import CircleButton from "@/components/global/circle-button";
import SlideshowSlide from "@/components/global/slideshow-slide";
import SlideshowDots from "@/components/global/slideshow-dots";
import SlideshowSlideCounter from "@/components/global/slideshow-slide-counter";
import styles from "@/styles/components/global/slideshow.module.css";

export type SlideType = {
	id: string;
	content: React.ReactElement;
};

export type SlideshowProps = {
	slides: SlideType[];
	initialActiveSlideIndex?: number;
	/**
	 * If `useDots` is set to `false`, a slide counter will appear at the bottom of the slideshow instead.
	 *
	 * If `insideLightbox` is set to `true`, `useDots` will automatically be `false`.
	 */
	useDots?: boolean;
	/**
	 * If `insideLightbox` is set to `true`, `useFadeIn` will automatically be `false`.
	 */
	useFadeIn?: boolean;
	/**
	 * Used for areas with dark backgrounds.
	 *
	 * If `insideLightbox` is set to `true`, `useLightMode` will automatically be `true`.
	 */
	useLightMode?: boolean;
	/**
	 * Limit slide aspect ratio to 16:9.
	 *
	 * If `insideLightbox` is set to `true`, `controlSlideAspect` will automatically be `false`.
	 */
	controlSlideAspect?: boolean;
	insideLightbox?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Slideshow({
	slides,
	initialActiveSlideIndex = 0,
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
	const [activeSlide, setActiveSlide] = useState<number>(
		initialActiveSlideIndex,
	);
	const intersected = useIntersectionObserver(sectionRef);
	const useDotsActual = insideLightbox ? false : useDots;
	const useFadeInActual = insideLightbox ? false : useFadeIn;
	const useLightModeActual = insideLightbox ? true : useLightMode;
	const controlSlideAspectActual = insideLightbox
		? false
		: controlSlideAspect;
	const classes = outputClassNames(
		[
			"slideshow",
			notASlideshow ? "single-slide" : "",
			useLightModeActual ? "light-mode" : "",
			controlSlideAspectActual ? "controlled-slide-aspect" : "",
			insideLightbox ? "inside-lightbox" : "",
			className,
		],
		[styles],
	);
	const sectionStyles: React.CSSProperties | undefined = (() => {
		if (!useFadeInActual) return otherProps.style;

		return {
			...otherProps.style,
			opacity: intersected ? 1 : 0,
			transition: "opacity 1s ease",
		};
	})();
	const getSlideOffset = useCallback(
		(slideIndex: number) => {
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
		},
		[slideRefs, slides.length],
	);
	const scrollToSlide = useCallback(
		(slideIndex: number, useSmoothScrolling = true) => {
			const slidesRef = slideContainerRef.current;

			if (!slidesRef) return;

			const offset = getSlideOffset(slideIndex);

			if (!offset) return;

			const scrollOptions: ScrollToOptions = {
				top: 0,
				left: offset,
			};

			if (useSmoothScrolling) scrollOptions.behavior = "smooth";

			slidesRef.scroll(scrollOptions);
		},
		[getSlideOffset],
	);

	function handleArrowClick(direction: "forward" | "backward") {
		const slidesRef = slideContainerRef.current;

		if (!slidesRef) return;

		const destinationIndex = getDestinationSlideIndex(
			direction,
			activeSlide,
			slides.length,
		);

		scrollToSlide(destinationIndex);
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
		if (initialActiveSlideIndex <= 0) return;

		scrollToSlide(initialActiveSlideIndex, false);
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
							shadowColor={
								useLightModeActual ? "light" : undefined
							}
							onClick={() => handleArrowClick("backward")}
						/>

						<CircleButton
							className={`${styles["arrow"]} ${styles["next"]}`}
							icon="arrow-right"
							aria-label="go to next slide"
							shadowColor={
								useLightModeActual ? "light" : undefined
							}
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

			{!notASlideshow && useDotsActual && (
				<SlideshowDots
					slideIDs={slides.map((slide) => slide.id)}
					activeSlideIndex={activeSlide}
					dotClickHandler={handleDotClick}
				/>
			)}

			{!notASlideshow && !useDotsActual && (
				<SlideshowSlideCounter
					slidesLength={slides.length}
					activeSlideIndex={activeSlide}
				/>
			)}
		</section>
	);
}
