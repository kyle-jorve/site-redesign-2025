import { deriveButtonShadowColor, printClassNames } from "@/utils/utils";

export type CircleButtonProps = {
	icon: "heart" | "arrow-left" | "arrow-right" | "cross";
	"aria-label": string;
	weight?: "regular" | "solid";
	color?: "light" | "red" | "dark";
	shadowColor?: "light" | "red" | "dark";
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "aria-label">;

export default function CircleButton({
	icon,
	weight = "solid",
	color = "red",
	shadowColor = undefined,
	className = "",
	...otherProps
}: CircleButtonProps) {
	const derivedShadowColor = deriveButtonShadowColor(color, shadowColor);
	const classes = printClassNames([
		"circle-button",
		derivedShadowColor ? `shadow-${derivedShadowColor}` : "",
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
