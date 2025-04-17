"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { MenuTileType } from "@/types/hero-types";
import { printClassNames } from "@/utils/utils";
import MenuTile from "@/components/hero/menu-tile";
import styles from "@/styles/components/hero/menu-tiles.module.css";

export type MenuTilesProps = {
	tiles: MenuTileType[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function MenuTiles({
	tiles,
	className = "",
	...otherProps
}: MenuTilesProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const intersected = useIntersectionObserver(containerRef);
	const classes = printClassNames([styles["menu-tiles"], className]);

	return (
		<div
			ref={containerRef}
			className={classes}
			style={{
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
			{...otherProps}
		>
			{tiles.map((tile) => {
				return (
					<MenuTile
						key={`${tile.name}-menu-tile`}
						{...tile}
					/>
				);
			})}
		</div>
	);
}
