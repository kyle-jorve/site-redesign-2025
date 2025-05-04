import { ImageDataType } from "@/types/global-types";
import { MenuTileType } from "@/types/hero-types";
import { printClassNames } from "@/utils/utils";
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
		styles[type],
		className,
	]);
	const headerClasses = printClassNames([
		type !== "long" ? "underline underline-light underline-center" : "",
		styles.header,
	]);
	const imageConfig: ImageDataType | undefined = image
		? {
				...image,
				sources: [
					{
						minScreenWidth: "48em",
						imageWidth: 480,
						imageHeight: 480,
					},
					{
						minScreenWidth: "40em",
						imageWidth: 768,
						imageHeight: 384,
					},
				],
				mobileSource: {
					imageWidth: 640,
					imageHeight: 384,
				},
		  }
		: undefined;

	return (
		<article
			className={classes}
			{...otherProps}
		>
			<header className={headerClasses}>
				<h2 className={`heading-3 ${styles.title}`}>{title}</h2>
			</header>

			<div className={styles["button-row"]}>
				<ButtonLink
					className={styles.button}
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
				{!!imageConfig && (
					<ResponsiveImage
						className={styles["image"]}
						image={imageConfig}
					/>
				)}
			</div>
		</article>
	);
}
