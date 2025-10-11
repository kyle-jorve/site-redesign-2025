import { ImageMetaType, ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import styles from "@/styles/components/global/lightbox.module.css";

export type LightboxImageProps = {
	image: ImageMetaType;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function LightboxImage({
	image,
	className = "",
	...otherProps
}: LightboxImageProps) {
	const classes = printClassNames([styles.image, className]);
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
			{...otherProps}
		/>
	);
}
