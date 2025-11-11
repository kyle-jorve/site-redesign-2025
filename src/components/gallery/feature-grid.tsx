import { HeadingType } from "@/types/global-types";
import { FeatureType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";
import Feature from "@/components/gallery/feature";
import HeadingBar from "@/components/global/heading-bar";
import styles from "@/styles/components/gallery/feature-grid.module.css";

export type FeatureGridProps = {
	slides: FeatureType[];
	heading?: HeadingType;
	title?: string;
	url?: string;
	headingBarButtonText?: string;
	slideButtonText?: string;
	useLightbox?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function FeatureGrid({
	slides,
	heading = "h2",
	title = "Featured Work",
	url = undefined,
	headingBarButtonText = "See All",
	slideButtonText = "See More",
	useLightbox = false,
	className = "",
	...otherProps
}: FeatureGridProps) {
	const classes = printClassNames(["feature-grid", className], [styles]);
	const hasHeadingBar = title !== undefined && url !== undefined;

	return (
		<section
			className={classes}
			{...otherProps}
		>
			{hasHeadingBar && (
				<HeadingBar
					className={styles.header}
					title={title}
					heading={heading}
					url={url}
					buttonText={headingBarButtonText}
				/>
			)}

			<div className={styles.features}>
				{slides.map((slide, index) => {
					const isOdd = (index + 1) % 2 !== 0;

					return (
						<Feature
							key={slide.name}
							{...slide}
							alignment={isOdd ? "image-right" : "image-left"}
							buttonText={slideButtonText}
							number={String(index + 1).padStart(2, "0")}
							useLightbox={useLightbox}
						/>
					);
				})}
			</div>
		</section>
	);
}
