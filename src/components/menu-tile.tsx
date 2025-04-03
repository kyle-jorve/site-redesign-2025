import { ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils";
import ButtonLink from "./global/button-link";
import ResponsiveImage from "./global/responsive-image";
import styles from "@/styles/components/menu-tile.module.css";

export type MenuTileProps = {
	title: string;
	url: string;
	buttonText: string;
	image?: ImageDataType;
	type?: "square" | "long";
} & React.HTMLAttributes<HTMLElement>;

export default function MenuTile({
	title,
	url,
	buttonText,
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
				<h2 className={styles.title}>{title}</h2>

				<div className={styles["button-row"]}>
					<ButtonLink
						className="button dark"
						url={url}
						color="dark"
					></ButtonLink>
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
