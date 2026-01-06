import { CategoryType } from "@/types/gallery-types";
import { FiltersProps } from "@/components/gallery/filters";
import { outputClassNames } from "@/utils";

export type FilterChipProps = {
	category: CategoryType;
	handleClick: FiltersProps["updateFilters"];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FilterChip({
	category,
	handleClick,
	className = "",
	onClick = () => {},
	...otherProps
}: FilterChipProps) {
	const classes = outputClassNames(["filter-chip", className]);

	function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
		handleClick([category.name]);
		onClick(event);
	}

	return (
		<button
			className={classes}
			aria-label={`remove ${category.label} project filter`}
			data-category={category.name}
			onClick={clickHandler}
			{...otherProps}
		>
			{category.label}
		</button>
	);
}
