"use client";

import { useState, forwardRef } from "react";
import { ImageDataType, ImageSourceType } from "@/types/global-types";
import { outputClassNames, getThumbnailUrl } from "@/utils/utils";

export type ResponsiveImageProps = {
	image: ImageDataType;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ResponsiveImage = forwardRef<HTMLImageElement, ResponsiveImageProps>(
	function ResponsiveImage(
		{
			image,
			loading = "lazy",
			fetchPriority = "low",
			className = "",
			onLoad = () => {},
			style = undefined,
			...otherProps
		},
		ref,
	) {
		const [loaded, setLoaded] = useState<boolean>(false);
		const classes = outputClassNames([
			"image",
			loaded ? "loaded" : "",
			className,
		]);
		const formats = ["avif", "webp", "jpg"];
		const mobileURL = getThumbnailUrl({
			pathKey: image.mobileSource.pathKey || image.pathKey,
			imageWidth: image.mobileSource.imageWidth,
			format: "jpg",
		});
		const appliedStyle = {
			...style,
			...getObjectPositionStyles(image),
		};

		function getObjectPositionStyles(
			src: ImageSourceType | ImageDataType | undefined,
		): React.CSSProperties {
			if (!src) return {};

			return {
				objectPosition: `${src.horizontalOrientation || "center"} ${
					src.verticalOrientation || "center"
				}`,
			};
		}

		function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
			setLoaded(true);
			onLoad(event);
		}

		return (
			<picture>
				{image.sources?.length &&
					image.sources.map((src) => {
						return formats.map((format) => {
							const url = getThumbnailUrl({
								pathKey: src.pathKey || image.pathKey,
								imageWidth: src.imageWidth,
								format,
							});
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
						const url = getThumbnailUrl({
							pathKey:
								image.mobileSource.pathKey || image.pathKey,
							imageWidth: image.mobileSource.imageWidth,
							format,
						});

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
					style={appliedStyle}
					onLoad={handleLoad}
					{...otherProps}
				/>
			</picture>
		);
	},
);

export default ResponsiveImage;
