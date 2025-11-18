import { printClassNames } from "@/utils/utils";
import styles from "@/styles/components/global/slideshow.module.css";

export type SlideshowDotProps = {
	active: boolean;
	"aria-label": string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label">;

export default function SlideshowDot({
	active,
	className = "",
	...otherProps
}: SlideshowDotProps) {
	const classes = printClassNames(
		["dot", active ? "active" : "", className],
		[styles],
	);

	return (
		<button
			className={classes}
			{...otherProps}
		></button>
	);
}
