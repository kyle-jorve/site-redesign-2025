"use client";

import { useRef, useState, useEffect } from "react";
import { getThumbnailUrl } from "@/utils/utils";
import { useIntersectionObserver } from "@/utils/hooks";
import { ImageDataType } from "@/types/global-types";
import { FeatureType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";
import CategoryChip from "@/components/global/category-chip";
import ButtonLink from "@/components/global/button-link";
import CustomLink from "@/components/global/custom-link";
import ResponsiveImage from "@/components/global/responsive-image";
import LightboxImageTrigger from "@/components/global/lightbox-image-trigger";
import "@/styles/components/gallery/feature-grid.css";

export type FeatureProps = Omit<FeatureType, "name"> & {
	useLightbox?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function Feature({
	title,
	description,
	image,
	videoSrc = undefined,
	imageAspect = "standard",
	url = undefined,
	buttonText = "See More",
	alignment = "image-right",
	number = undefined,
	category = undefined,
	supertitle = undefined,
	useLightbox = false,
	className = "",
	...otherProps
}: FeatureProps) {
	const articleRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(articleRef);
	const [activeImage, setActiveImage] = useState<number>(0);
	const imagesData = Array.isArray(image) ? image : [image];
	const classes = printClassNames(["feature", alignment, className]);
	const mobileSource = {
		imageWidth: 640,
		imageHeight: 640,
	};
	const imageConfig: ImageDataType[] = imagesData.map((image) => ({
		...image,
		sources: [
			{
				minScreenWidth: "64em",
				imageWidth: 640,
				imageHeight: 676,
			},
			{
				minScreenWidth: "40em",
				imageWidth: 1024,
				imageHeight: 512,
			},
		],
		mobileSource,
	}));
	const Images = videoSrc ? (
		<video
			className="video"
			autoPlay
			loop
			muted
			playsInline
			poster={getThumbnailUrl({
				pathKey: imagesData[0].pathKey,
				imageWidth: mobileSource.imageWidth,
				format: "jpg",
			})}
		>
			<source
				src={videoSrc}
				type="video/mp4"
			/>
		</video>
	) : (
		imageConfig.map((image, index) => {
			const classes = printClassNames([
				imagesData.length > 1 && activeImage !== index ? "hide" : "",
				"image-container",
			]);

			return useLightbox && !url ? (
				<LightboxImageTrigger
					key={image.name}
					lightboxImages={imagesData}
					index={index}
					className={classes}
				>
					<ResponsiveImage
						className="image"
						image={image}
					/>
				</LightboxImageTrigger>
			) : (
				<div
					className={classes}
					key={image.name}
				>
					<ResponsiveImage
						key={image.name}
						className="image"
						image={image}
					/>
				</div>
			);
		})
	);

	useEffect(() => {
		if (imagesData.length <= 1) return;

		let interval: ReturnType<typeof setInterval> | null = null;

		if (interval) clearInterval(interval);

		interval = setInterval(() => {
			setActiveImage((prev) => {
				if (prev === imagesData.length - 1) return 0;
				return prev + 1;
			});
		}, 2250);

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [imagesData.length]);

	return (
		<article
			ref={articleRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
		>
			<div className="content-col">
				{!!number && <span className="number">{number}</span>}

				{!!category && (
					<CategoryChip
						className="category"
						category={category}
					/>
				)}

				{!!supertitle && (
					<span className="superheading supertitle">
						{supertitle}
					</span>
				)}

				<h2 className="heading-3">{title}</h2>

				{description}

				{!!url && (
					<div className="button-row">
						<ButtonLink
							className="button"
							url={url}
						>
							{buttonText}
						</ButtonLink>
					</div>
				)}
			</div>

			<div className={`image-col ${imageAspect}-aspect`}>
				{!!url ? (
					<CustomLink
						to={url}
						className="image-link"
					>
						{Images}
					</CustomLink>
				) : (
					Images
				)}
			</div>
		</article>
	);
}
