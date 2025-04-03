import CustomLink from "./custom-link";
import { printClassNames } from "@/utils";

export type ButtonLinkType = {
	url: string;
	color?: "light" | "red" | "dark";
	type?: "standard" | "filter" | "back" | "contact";
} & React.PropsWithChildren &
	Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function ButtonLink({
	url,
	children,
	color = "red",
	type = "standard",
	className = "",
	...otherProps
}: ButtonLinkType) {
	const classes = printClassNames(["button", color, type, className]);

	return (
		<CustomLink
			className={classes}
			to={url}
			{...otherProps}
		>
			{children}
			<span
				className="icon"
				aria-hidden="true"
			></span>
		</CustomLink>
	);
}
