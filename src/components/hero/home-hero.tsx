"use client";

import { useRef, useEffect, useState } from "react";
import { ImageDataType } from "@/types/global-types";
import { MenuTileType } from "@/types/hero-types";
import { printClassNames } from "@/utils/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import MenuTiles from "@/components/hero/menu-tiles";
import styles from "@/styles/components/hero/home-hero.module.css";

export type HomeHeroProps = {
	title: string;
	heroImage: ImageDataType;
	supertitle?: string;
	menuTiles?: MenuTileType[];
} & React.HTMLAttributes<HTMLElement>;

let timeout: ReturnType<typeof setTimeout> | null = null;

export default function HomeHero({
	title,
	heroImage,
	supertitle = undefined,
	menuTiles = undefined,
	className = "",
	...otherProps
}: HomeHeroProps) {
	const [imageIntersecting, setImageIntersecting] = useState<boolean>(false);
	const [contentIntersecting, setContentIntersecting] =
		useState<boolean>(false);
	const [parallaxContent, setParallaxContent] = useState<boolean>(false);
	const [parallaxImage, setParallaxImage] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const classes = printClassNames([styles["home-hero"], className]);
	const breakpoint = 1024;

	// parallax effect for title and image
	useEffect(() => {
		const content = contentRef?.current;
		const image = imageRef?.current;

		if (!content || !image) return;

		let io: IntersectionObserver | null = new IntersectionObserver(
			ioCallback,
		);

		function handleScroll() {
			if (
				window.innerWidth < breakpoint ||
				(!imageIntersecting && !contentIntersecting) ||
				(!content && !image)
			) {
				return;
			}

			const contentMovement = (window.scrollY / 4).toFixed(2);
			const imageMovement = (window.scrollY / 12).toFixed(2);

			if (content) {
				content.style.translate = `0 ${contentMovement}px`;
				setParallaxContent(true);
			}
			if (image) {
				image.style.translate = `0 ${imageMovement}px`;
				setParallaxImage(true);
			}
		}

		function handleResize() {
			if (timeout) clearTimeout(timeout);

			// debounce
			timeout = setTimeout(() => {
				if (window.innerWidth < breakpoint) {
					setParallaxContent(false);
					setParallaxImage(false);
				}
			}, 200);
		}

		function ioCallback(
			entries: IntersectionObserverEntry[],
			_: IntersectionObserver,
		) {
			entries.forEach((entry) => {
				const targetIsContent = entry.target === content;

				if (entry.isIntersecting && targetIsContent) {
					setContentIntersecting(true);
				}
				if (entry.isIntersecting && !targetIsContent) {
					setImageIntersecting(true);
				}
				if (!entry.isIntersecting && targetIsContent) {
					setContentIntersecting(false);
				}
				if (!entry.isIntersecting && !targetIsContent) {
					setImageIntersecting(false);
				}
			});
		}

		[content, image].forEach((el) => io?.observe(el));
		window.addEventListener("scroll", handleScroll);
		["resize", "orientationchange"].forEach((ev) =>
			window.addEventListener(ev, handleResize),
		);

		return () => {
			io?.disconnect();
			io = null;
			window.removeEventListener("scroll", handleScroll);
		};
	}, [
		parallaxContent,
		parallaxImage,
		contentIntersecting,
		imageIntersecting,
	]);

	useEffect(() => {
		const content = contentRef?.current;
		const image = imageRef?.current;

		if (!content || !image || (parallaxContent && parallaxImage)) return;

		if (!parallaxContent) content.style.translate = "";
		if (!parallaxImage) image.style.translate = "";
	}, [parallaxContent, parallaxImage]);

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<div
				ref={contentRef}
				className={styles.content}
			>
				<h1 className={`page-title ${styles.title}`}>
					<span className={`supertitle ${styles.supertitle}`}>
						{supertitle}
					</span>
					{title}
				</h1>
			</div>

			{menuTiles !== undefined && <MenuTiles tiles={menuTiles} />}

			<div className={styles["image-wrapper"]}>
				<ResponsiveImage
					ref={imageRef}
					className={styles.image}
					image={heroImage}
				/>
			</div>
		</section>
	);
}
