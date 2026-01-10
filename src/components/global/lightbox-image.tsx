import { ImageMetaType, ImageDataType } from "@/types/global-types";
import { outputClassNames } from "@/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/global/lightbox-image.module.css";

export type LightboxImageProps = {
	image: ImageMetaType;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function LightboxImage({
	image,
	className = "",
	...otherProps
}: LightboxImageProps) {
	const classes = outputClassNames(["lightbox-image", className], [styles]);
	const imageConfig: ImageDataType = {
		...image,
		sources: [
			{
				minScreenWidth: "90em",
				imageWidth: 1920,
			},
			{
				minScreenWidth: "64em",
				imageWidth: 1440,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
			},
		],
		mobileSource: {
			imageWidth: 640,
		},
	};

	return (
		<ResponsiveImage
			className={classes}
			image={imageConfig}
			loading="eager"
			fetchPriority="high"
			{...otherProps}
		/>
	);
}
