import { printClassNames } from "@/utils/utils";
import styles from "@/styles/components/gallery/projects.module.css";

export type FeaturedFlagProps = {
	size?: "standard" | "small";
} & React.HTMLAttributes<HTMLSpanElement>;

export default function FeaturedFlag({
	size = "standard",
	className = "",
	...otherProps
}: FeaturedFlagProps) {
	const classes = printClassNames(
		["featured-flag", size, className],
		[styles],
	);

	return (
		<span
			className={classes}
			{...otherProps}
		>
			Featured
		</span>
	);
}
