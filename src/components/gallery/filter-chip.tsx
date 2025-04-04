import { CategoryType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import styles from "@/styles/components/gallery/filters.module.css";

export type FilterChipProps = {
	category: CategoryType;
	onClick: (id: string) => void;
	color?: "dark" | "red" | "light";
} & React.HTMLAttributes<HTMLButtonElement>;

export default function FilterChip({
	category,
	onClick,
	color = "dark",
	className = "",
	...otherProps
}: FilterChipProps) {
	const classes = printClassNames([styles["filter-chip"], className]);

	return (
		<button
			className={classes}
			aria-label={`remove ${category.label} filter`}
			data-category={category.name}
			onClick={() => onClick(category.name)}
			{...otherProps}
		>
			{category.label}
		</button>
	);
}
