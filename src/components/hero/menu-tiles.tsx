import { forwardRef } from "react";
import { printClassNames } from "@/utils";
import { menuTiles } from "@/data/home-data";
import MenuTile from "./menu-tile";
import styles from "@/styles/components/hero/menu-tiles.module.css";

export type MenuTilesProps = React.HTMLAttributes<HTMLDivElement>;

const MenuTiles = forwardRef<HTMLDivElement, MenuTilesProps>(function MenuTiles(
	{ className = "", ...otherProps },
	ref,
) {
	const classes = printClassNames([styles["menu-tiles"], className]);

	return (
		<div
			className={classes}
			ref={ref}
			{...otherProps}
		>
			{menuTiles.map((tile) => {
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
