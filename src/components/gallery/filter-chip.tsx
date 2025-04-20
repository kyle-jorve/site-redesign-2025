import { CategoryType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";

export type FilterChipProps = {
	category: CategoryType;
	handleClick: (id: string) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function FilterChip({
	category,
	handleClick,
	className = "",
	onClick = () => {},
	...otherProps
}: FilterChipProps) {
	const classes = printClassNames(["filter-chip", className]);

	function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
		handleClick(category.name);
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
