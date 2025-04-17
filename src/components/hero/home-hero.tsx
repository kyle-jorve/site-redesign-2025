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

export default function HomeHero({
	title,
	heroImage,
	supertitle = undefined,
	menuTiles = undefined,
	className = "",
	...otherProps
}: HomeHeroProps) {
	const [parallaxApplied, setParallaxApplied] = useState<boolean>(false);
	const [stopParallaxEffect, setStopParallaxEffect] =
		useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const classes = printClassNames([styles["home-hero"], className]);
	const breakpoint = 1024;

	useEffect(() => {
		const content = contentRef?.current;
		let io: IntersectionObserver | null = new IntersectionObserver(
			ioCallback,
		);

		function removeParallax() {
			if (content && parallaxApplied) content.style.translate = "";
			setParallaxApplied(false);
		}

		// parallax effect for title
		function handleScroll() {
			if (window.innerWidth < breakpoint || stopParallaxEffect) {
				removeParallax();
				return;
			}

			const movement = window.scrollY / 4;

			if (content) {
				content.style.translate = `0 ${movement}px`;
				setParallaxApplied(true);
			}
		}

		function ioCallback(
			entries: IntersectionObserverEntry[],
			_: IntersectionObserver,
		) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setStopParallaxEffect(false);
					window.addEventListener("scroll", handleScroll);
				} else {
					setStopParallaxEffect(true);
				}
			});
		}

		if (content) io.observe(content);

		return () => {
			io?.disconnect();
			io = null;
			window.removeEventListener("scroll", handleScroll);
		};
	}, [parallaxApplied, stopParallaxEffect]);

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<div
				className={styles.content}
				ref={contentRef}
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
					className={styles.image}
					image={heroImage}
				/>
			</div>
		</section>
	);
}
