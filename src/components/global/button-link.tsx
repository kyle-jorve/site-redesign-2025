import CustomLink from "@/components/global/custom-link";
import { printClassNames } from "@/utils/utils";

export type ButtonLinkProps = {
	url: string;
	color?: "light" | "red" | "dark";
	type?: "standard" | "back" | "contact";
} & React.PropsWithChildren &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function ButtonLink({
	url,
	children,
	color = "red",
	type = "standard",
	className = "",
	...otherProps
}: ButtonLinkProps) {
	const classes = printClassNames(["button", color, type, className]);

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
