import { forwardRef } from "react";
import { MenuTileType } from "@/types/hero-types";
import { printClassNames } from "@/utils";
import MenuTile from "@/components/hero/menu-tile";
import styles from "@/styles/components/hero/menu-tiles.module.css";

export type MenuTilesProps = {
	tiles: MenuTileType[];
} & React.HTMLAttributes<HTMLDivElement>;

const MenuTiles = forwardRef<HTMLDivElement, MenuTilesProps>(function MenuTiles(
	{ tiles, className = "", ...otherProps },
	ref,
) {
	const classes = printClassNames([styles["menu-tiles"], className]);

	return (
		<div
			className={classes}
			ref={ref}
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
});

export default MenuTiles;
