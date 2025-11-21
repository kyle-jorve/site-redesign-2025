import { outputClassNames } from "@/utils";
import styles from "@/styles/components/global/slideshow.module.css";

export type SlideshowSlideCounterProps = {
	slidesLength: number;
	activeSlideIndex: number;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function SlideshowSlideCounter({
	slidesLength,
	activeSlideIndex,
	className = "",
	...otherProps
}: SlideshowSlideCounterProps) {
	const classes = outputClassNames(["slide-counter", className], [styles]);

	return (
		<span
			className={classes}
			{...otherProps}
		>
			{activeSlideIndex + 1} / {slidesLength}
		</span>
	);
}
