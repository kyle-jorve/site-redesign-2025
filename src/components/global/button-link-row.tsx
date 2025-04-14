import { printClassNames } from "@/utils";
import ButtonLink from "@/components/global/button-link";

export type ButtonLinkRowProps = {
	url: string;
	buttonText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ButtonLinkRow({
	url,
	buttonText = "Visit Website",
	className = "",
	...otherProps
}: ButtonLinkRowProps) {
	const classes = printClassNames(["link-row", className]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<span
				className="lines left"
				aria-hidden="true"
			></span>
			<ButtonLink url={url}>{buttonText}</ButtonLink>
			<span
				className="lines right"
				aria-hidden="true"
			></span>
		</div>
	);
}
