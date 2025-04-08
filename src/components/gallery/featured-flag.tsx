import { printClassNames } from "@/utils";
import styles from "@/styles/components/gallery/projects.module.css";

export type FeaturedFlagProps = {
	size?: "standard" | "small";
} & React.HTMLAttributes<HTMLSpanElement>;

export default function FeaturedFlag({
	size = "standard",
	className = "",
	...otherProps
}: FeaturedFlagProps) {
	const classes = printClassNames([
		styles["featured-flag"],
		styles[size],
		className,
	]);

	return (
		<span
			className={classes}
			{...otherProps}
		>
			Featured
		</span>
	);
}
