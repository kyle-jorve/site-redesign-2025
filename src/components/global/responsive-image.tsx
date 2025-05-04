"use client";

import { useState, useEffect, forwardRef } from "react";
import { ImageDataType, ImageMetaType } from "@/types/global-types";
import { printClassNames, mergeImageData } from "@/utils/utils";

export type ResponsiveImageProps = {
	image: ImageDataType;
	mobileImage?: ImageDataType;
} & {
	isAnimated?: ImageMetaType["isAnimated"];
	horizontalOrientation?: ImageMetaType["horizontalOrientation"];
	verticalOrientation?: ImageMetaType["verticalOrientation"];
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ResponsiveImage = forwardRef<HTMLImageElement, ResponsiveImageProps>(
	function ResponsiveImage(
		{
			image,
			mobileImage = undefined,
			loading = "lazy",
			fetchPriority = "low",
			isAnimated = false,
			className = "",
			onLoad = () => {},
			style = undefined,
			...otherProps
		},
		ref,
	) {
		const [loaded, setLoaded] = useState<boolean>(false);
		const classes = printClassNames([
			"image",
			loaded ? "loaded" : "",
			className,
		]);
		const formats = (() => {
			const returnArray = ["avif", "webp"];

			if (isAnimated) returnArray.push("gif");
			else returnArray.push("jpg");

			return returnArray;
		})();
		const baseImageUrl = getBaseUrl(image.pathKey);
		const mobileBaseUrl = mobileImage
			? getBaseUrl(mobileImage.pathKey)
			: baseImageUrl;
		const mobileURL = `${mobileBaseUrl}-${image.mobileSource.imageWidth}.${
			isAnimated ? "gif" : "jpg"
		}`;
		const appliedStyle = {
			...style,
			objectPosition: `${image.horizontalOrientation || "center"} ${
				image.verticalOrientation || "center"
			}`,
		};
		const mergedImageData = mergeImageData(image, mobileImage);

		function getBaseUrl(pathKey: string) {
			return `/images/${pathKey}/${pathKey}-kyle-jorve`;
		}

		// if for whatever reason the load event fails to trigger
		useEffect(() => {
			setTimeout(() => {
				setLoaded(true);
			}, 1000);
		}, []);

		function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
			setLoaded(true);
			onLoad(event);
		}

		return (
			<picture>
				{mergedImageData.sources?.length &&
					mergedImageData.sources.map((src) => {
						return formats.map((format) => {
							const baseUrl = src.pathKey
								? getBaseUrl(src.pathKey)
								: baseImageUrl;
							const url = `${baseUrl}-${src.imageWidth}.${format}`;
							const imageFormat =
								format === "jpg" ? "jpeg" : format;

							return (
								<source
									key={`${image.name}-${format}-${src.imageWidth}-${src.minScreenWidth}`}
									srcSet={url}
									media={`(min-width: ${src.minScreenWidth})`}
									type={`image/${imageFormat}`}
									width={src.imageWidth}
									height={src.imageHeight}
								/>
							);
						});
					})}

				{formats
					.filter((format) => format !== "jpg" && format !== "gif")
					.map((format) => {
						const url = `${mobileBaseUrl}-${mergedImageData.mobileSource.imageWidth}.${format}`;

						return (
							<source
								key={`${mergedImageData.name}-${format}-${mergedImageData.mobileSource.imageWidth}-mobile`}
								srcSet={url}
								type={`image/${format}`}
								width={mergedImageData.mobileSource.imageWidth}
								height={
									mergedImageData.mobileSource.imageHeight
								}
							/>
						);
					})}

				<img
					ref={ref}
					className={classes}
					src={mobileURL}
					alt={mergedImageData.alt}
					loading={loading}
					fetchPriority={fetchPriority}
					width={mergedImageData.mobileSource.imageWidth}
					height={mergedImageData.mobileSource.imageHeight}
					onLoad={handleLoad}
					style={appliedStyle}
					{...otherProps}
				/>
			</picture>
		);
	},
);

export default ResponsiveImage;
