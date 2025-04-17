import { printClassNames } from "@/utils/utils";

export type CircleButtonProps = {
	icon: "heart" | "arrow-left" | "arrow-right";
	"aria-label": string;
	weight?: "regular" | "solid";
	color?: "light" | "red" | "dark";
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "aria-label">;

export default function CircleButton({
	icon,
	weight = "solid",
	color = "red",
	className = "",
	...otherProps
}: CircleButtonProps) {
	const classes = printClassNames([
		"circle-button",
		icon,
		weight,
		color,
		className,
	]);

	return (
		<button
			className={classes}
			{...otherProps}
		></button>
	);
}
