import { outputClassNames } from "@/utils";
import styles from "@/styles/components/global/slideshow-dots.module.css";

export type SlideshowDotsProps = {
	slideIDs: string[];
	activeSlideIndex: number;
	dotClickHandler: (index: number) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SlideshowDots({
	slideIDs,
	activeSlideIndex,
	dotClickHandler,
	className = "",
	...otherProps
}: SlideshowDotsProps) {
	const classes = outputClassNames(["slideshow-dots", className], [styles]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{slideIDs.map((id, index) => {
				const dotClasses = outputClassNames(
					[
						"slideshow-dot",
						activeSlideIndex === index ? "active" : "",
					],
					[styles],
				);

				return (
					<button
						key={`${id}-dot`}
						className={dotClasses}
						onClick={() => dotClickHandler(index)}
						aria-label={`Go to slide ${index + 1}`}
					></button>
				);
			})}
		</div>
	);
}
