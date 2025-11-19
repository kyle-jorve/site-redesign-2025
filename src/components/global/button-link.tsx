import CustomLink from "@/components/global/custom-link";
import { outputClassNames, deriveButtonShadowColor } from "@/utils/utils";

export type ButtonLinkProps = {
	url: string;
	color?: "light" | "red" | "dark";
	shadowColor?: "light" | "red" | "dark";
	type?: "standard" | "back" | "contact";
} & React.PropsWithChildren &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function ButtonLink({
	url,
	children,
	color = "red",
	shadowColor = undefined,
	type = "standard",
	className = "",
	...otherProps
}: ButtonLinkProps) {
	const derivedShadowColor = deriveButtonShadowColor(color, shadowColor);
	const classes = outputClassNames([
		"button",
		derivedShadowColor ? `shadow-${derivedShadowColor}` : "",
		color,
		type,
		className,
	]);

	return (
		<CustomLink
			className={classes}
			to={url}
			{...otherProps}
		>
			<span className="button-text">{children}</span>
		</CustomLink>
	);
}
