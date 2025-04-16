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
