import { useContext } from "react";
import { ImageMetaType } from "@/types/global-types";
import LightboxContext from "@/context/lightbox-context";
import { outputClassNames } from "@/utils";
import styles from "@/styles/components/global/lightbox-image-trigger.module.css";

export type LightboxImageTriggerProps = {
	lightboxImages: ImageMetaType[];
	imageTitle: string;
	index: number;
} & React.HTMLAttributes<HTMLDivElement> &
	React.PropsWithChildren;

export default function LightboxImageTrigger({
	lightboxImages,
	imageTitle,
	index,
	children,
	className = "",
	...otherProps
}: LightboxImageTriggerProps) {
	const { lightboxId, lightboxOpen, openLightbox } =
		useContext(LightboxContext);
	const classes = outputClassNames(["image-container", className], [styles]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{children}
			<button
				className={styles["lightbox-trigger-button"]}
				onClick={() => openLightbox(lightboxImages, index)}
				aria-label={`open ${imageTitle} image in lightbox`}
				aria-controls={lightboxId}
				aria-expanded={lightboxOpen}
			></button>
		</div>
	);
}
