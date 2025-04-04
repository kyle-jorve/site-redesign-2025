import { CategoryType } from "@/types/gallery-types";
import { NavItemType } from "@/types/global-types";
import { printClassNames } from "@/utils";
import { navItems } from "@/data/global-data";
import CustomLink from "@/components/global/custom-link";
import styles from "@/styles/components/global/category-chips.module.css";

export type CategoryChipProps = {
	category: CategoryType;
	addLink?: boolean;
	size?: "large" | "small";
	color?: "yellow" | "red" | "green";
} & Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
	React.HTMLAttributes<HTMLSpanElement>;

export default function CategoryChip({
	category,
	addLink = true,
	size = "small",
	color = "green",
	className = "",
	...otherProps
}: CategoryChipProps) {
	const classes = printClassNames([
		styles["category-chip"],
		styles[size],
		styles[color],
		className,
	]);
	const url = `${
		(navItems.find((item) => item.name === "projects") as NavItemType).url
	}?categories=[${category.name}]`;

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
