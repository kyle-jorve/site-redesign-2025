"use client";

import { useState, useEffect, forwardRef } from "react";
import { ImageDataType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";

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
					return (
						<source
							key={`${image.name}-${src.minScreenWidth}`}
							srcSet={src.url}
							media={`(min-width: ${src.minScreenWidth}px)`}
							width={src.width}
							height={src.height}
						/>
					);
				})}

				<img
					ref={ref}
					className={classes}
					src={image.mobileSource}
					alt={image.alt}
					loading={loading}
					fetchPriority={fetchPriority}
					width={image.width}
					height={image.height}
					onLoad={handleLoad}
					{...otherProps}
				/>
			</picture>
		);
	},
);

export default ResponsiveImage;
