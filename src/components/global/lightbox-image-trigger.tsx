import { useContext } from "react";
import { ImageMetaType } from "@/types/global-types";
import LightboxImage from "@/components/global/lightbox-image";
import SiteContext from "@/utils/site-context";
import { printClassNames } from "@/utils/utils";

export type LightboxImageTriggerProps = {
	lightboxImage: ImageMetaType;
} & React.HTMLAttributes<HTMLDivElement> &
	React.PropsWithChildren;

export default function LightboxImageTrigger({
	children,
	lightboxImage,
	className = "",
	...otherProps
}: LightboxImageTriggerProps) {
	const { lightboxId, lightboxOpen, openLightbox } = useContext(SiteContext);
	const classes = printClassNames(["image-container", className]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{children}
			<button
				className="lightbox-trigger-button"
				onClick={() =>
					openLightbox(<LightboxImage image={lightboxImage} />)
				}
				aria-label="open lightbox slideshow"
				aria-controls={lightboxId}
				aria-expanded={lightboxOpen}
			></button>
		</div>
	);
}
