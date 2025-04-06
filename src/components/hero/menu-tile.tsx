import { MenuTileType } from "@/types/hero-types";
import { printClassNames } from "@/utils";
import ButtonLink from "@/components/global/button-link";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/hero/menu-tiles.module.css";

export type MenuTileProps = MenuTileType & React.HTMLAttributes<HTMLElement>;

export default function MenuTile({
	name,
	title,
	url,
	buttonText = "See More",
	image = undefined,
	type = "square",
	className = "",
	...otherProps
}: MenuTileProps) {
	const classes = printClassNames([
		styles["menu-tile"],
		type === "long" ? styles.long : "",
		className,
	]);

	return (
		<article
			className={classes}
			{...otherProps}
		>
			<div className={styles.inner}>
				<h2 className={`heading-3 ${styles.title}`}>{title}</h2>

				<div className={styles["button-row"]}>
					<ButtonLink
						url={url}
						color="dark"
					>
						{buttonText}
					</ButtonLink>
				</div>

				<div
					className={styles.background}
					aria-hidden={!image}
				>
					{!!image && (
						<ResponsiveImage
							className={styles["image"]}
							image={image}
						/>
					)}
				</div>
			</div>
		</article>
	);
}
