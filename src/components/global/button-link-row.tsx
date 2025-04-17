import { printClassNames } from "@/utils/utils";
import ButtonLink, { ButtonLinkProps } from "@/components/global/button-link";

export type ButtonLinkRowProps = {
	url: string;
	buttonType?: ButtonLinkProps["type"];
	buttonColor?: ButtonLinkProps["color"];
	buttonText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ButtonLinkRow({
	url,
	buttonType = undefined,
	buttonColor = undefined,
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
			<ButtonLink
				url={url}
				type={buttonType}
				color={buttonColor}
			>
				{buttonText}
			</ButtonLink>
			<span
				className="lines right"
				aria-hidden="true"
			></span>
		</div>
	);
}
