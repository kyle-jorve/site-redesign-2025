"use client";

import { useState, useEffect, forwardRef } from "react";
import { ImageDataType, ImageMetaType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";

export type ResponsiveImageProps = {
	image: ImageDataType;
} & {
	isAnimated?: ImageMetaType["isAnimated"];
	verticalOrientation?: ImageMetaType["verticalOrientation"];
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ResponsiveImage = forwardRef<HTMLImageElement, ResponsiveImageProps>(
	function ResponsiveImage(
		{
			image,
			loading = "lazy",
			fetchPriority = "low",
			isAnimated = false,
			verticalOrientation = "center",
			className = "",
			onLoad = () => {},
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
		const baseImageUrl = `/images/output/${image.pathKey}/${image.pathKey}`;
		const mobileURL = `${baseImageUrl}-${image.mobileSource.imageWidth}.${
			isAnimated ? "gif" : "jpg"
		}`;
		const style = (() => {
			const returnObj = {
				...otherProps.style,
			};

			if (verticalOrientation !== "center") {
				returnObj.objectPosition = `center ${verticalOrientation}`;
			}

			return returnObj;
		})();

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
				{image.sources.map((src) => {
					return formats.map((format) => {
						const url = `${baseImageUrl}-${src.imageWidth}.${format}`;
						const imageFormat = format === "jpg" ? "jpeg" : format;

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
						const url = `${baseImageUrl}-${image.mobileSource.imageWidth}.${format}`;

						return (
							<source
								key={`${image.name}-${format}-${image.mobileSource.imageWidth}-mobile`}
								srcSet={url}
								type={`image/${format}`}
								width={image.mobileSource.imageWidth}
								height={image.mobileSource.imageHeight}
							/>
						);
					})}

				<img
					ref={ref}
					className={classes}
					src={mobileURL}
					alt={image.alt}
					loading={loading}
					fetchPriority={fetchPriority}
					width={image.mobileSource.imageWidth}
					height={image.mobileSource.imageHeight}
					onLoad={handleLoad}
					style={style}
					{...otherProps}
				/>
			</picture>
		);
	},
);

export default ResponsiveImage;
