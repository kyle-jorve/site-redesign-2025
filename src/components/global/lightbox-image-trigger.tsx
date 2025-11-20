import { useContext } from "react";
import { ImageMetaType } from "@/types/global-types";
import SiteContext from "@/utils/site-context";
import { outputClassNames } from "@/utils/utils";

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
	const { lightboxId, lightboxOpen, openLightbox } = useContext(SiteContext);
	const classes = outputClassNames(["image-container", className]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{children}
			<button
				className="lightbox-trigger-button"
				onClick={() => openLightbox(lightboxImages, index)}
				aria-label={`open ${imageTitle} image in lightbox`}
				aria-controls={lightboxId}
				aria-expanded={lightboxOpen}
			></button>
		</div>
	);
}
