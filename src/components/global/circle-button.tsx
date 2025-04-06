import { printClassNames } from "@/utils";

export type CircleButtonProps = {
	icon: "heart" | "heart-solid" | "plus" | "arrow-left" | "arrow-right";
	"aria-label": string;
	color?: "light" | "red" | "dark";
} & Exclude<React.HTMLAttributes<HTMLButtonElement>, "aria-label">;

export default function CircleButton({
	icon,
	color = "red",
	className = "",
	...otherProps
}: CircleButtonProps) {
	const classes = printClassNames(["circle-button", icon, color, className]);

	return (
		<button
			className={classes}
			{...otherProps}
		></button>
	);
}
