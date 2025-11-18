import { forwardRef } from "react";
import { printClassNames } from "@/utils/utils";
import styles from "@/styles/components/global/slideshow.module.css";

export type SlideshowSlideProps = {
	active: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
	React.PropsWithChildren;

const SlideshowSlide = forwardRef<HTMLDivElement, SlideshowSlideProps>(
	function SlideshowSlide(
		{ active, children, className = "", ...otherProps },
		ref,
	) {
		const classes = printClassNames(
			["slide", active ? "active" : "", className],
			[styles],
		);

		return (
			<div
				ref={ref}
				className={classes}
				{...otherProps}
			>
				<div className={styles["slide-inner"]}>{children}</div>
			</div>
		);
	},
);

export default SlideshowSlide;
