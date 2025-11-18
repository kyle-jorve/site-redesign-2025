import { forwardRef } from "react";
import { deriveButtonShadowColor, printClassNames } from "@/utils/utils";

export type CircleButtonProps = {
	icon: "heart" | "arrow-left" | "arrow-right" | "cross";
	"aria-label": string;
	weight?: "regular" | "solid";
	color?: "light" | "red" | "dark";
	shadowColor?: "light" | "red" | "dark";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label">;

const CircleButton = forwardRef<HTMLButtonElement, CircleButtonProps>(
	function CircleButton(
		{
			icon,
			weight = "solid",
			color = "red",
			shadowColor = undefined,
			className = "",
			...otherProps
		},
		ref,
	) {
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
				ref={ref}
				className={classes}
				{...otherProps}
			></button>
		);
	},
);

export default CircleButton;
