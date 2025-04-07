"use client";

import { useRef } from "react";
import { ImageDataType } from "@/types/global-types";
import { MenuTileType } from "@/types/hero-types";
import { printClassNames } from "@/utils";
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
	const menuTilesRef = useRef<HTMLDivElement>(null);
	const classes = printClassNames([styles["home-hero"], className]);

	function scrollSection() {
		const offset = (
			menuTilesRef.current as HTMLDivElement
		).getBoundingClientRect().top;

		window.scroll({
			left: 0,
			top: offset,
			behavior: "smooth",
		});
	}

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<div className={styles.content}>
				<h1 className={`page-title ${styles.title}`}>
					<span className={`supertitle ${styles.supertitle}`}>
						{supertitle}
					</span>
					{title}
				</h1>

				<div className={styles["cursor-wrapper"]}>
					<button
						className={styles["cursor-button"]}
						aria-label="scroll down to next section"
						onClick={scrollSection}
					>
						<span
							className={styles.cursor}
							aria-hidden="true"
						></span>
						<span
							className={styles["cursor-arrow"]}
							aria-hidden="true"
						></span>
					</button>
				</div>
			</div>

			{menuTiles !== undefined && (
				<MenuTiles
					tiles={menuTiles}
					ref={menuTilesRef}
				/>
			)}

			<div className={styles["image-wrapper"]}>
				<ResponsiveImage
					className={styles.image}
					image={heroImage}
				/>
			</div>
		</section>
	);
}
