import { CategoryType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";
import CustomLink from "@/components/global/custom-link";
import styles from "@/styles/components/global/category-chips.module.css";

export type CategoryChipProps = {
	category: CategoryType;
	addLink?: boolean;
	size?: "large" | "small" | "extra-small";
	color?: "yellow" | "red" | "green";
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
	React.HTMLAttributes<HTMLSpanElement>;

export default function CategoryChip({
	category,
	addLink = true,
	size = "small",
	color = "green",
	className = "",
	...otherProps
}: CategoryChipProps) {
	const classes = printClassNames(
		["category-chip", size, color, className],
		[styles],
	);
	const url = `/projects?categories=${JSON.stringify([category.name])}`;

	return addLink ? (
		<CustomLink
			className={classes}
			to={url}
			{...otherProps}
		>
			{category.label}
		</CustomLink>
	) : (
		<span
			className={classes}
			{...otherProps}
		>
			{category.label}
		</span>
	);
}
