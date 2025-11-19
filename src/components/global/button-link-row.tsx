import { outputClassNames } from "@/utils/utils";
import ButtonLink, { ButtonLinkProps } from "@/components/global/button-link";

export type ButtonLinkRowProps = {
	url: string;
	buttonType?: ButtonLinkProps["type"];
	buttonColor?: ButtonLinkProps["color"];
	buttonText?: string;
	linesClass?: string;
	linesColor?: "red" | "blue";
} & React.HTMLAttributes<HTMLDivElement>;

export default function ButtonLinkRow({
	url,
	buttonType = undefined,
	buttonColor = undefined,
	buttonText = "Visit Website",
	linesClass = undefined,
	linesColor = "red",
	className = "",
	...otherProps
}: ButtonLinkRowProps) {
	const classes = outputClassNames([
		"link-row",
		`lines-${linesColor}`,
		className,
	]);
	const linesClasses = outputClassNames([
		linesClass !== undefined ? linesClass : "",
		"lines",
	]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<span
				className={`${linesClasses} left`}
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
				className={`${linesClasses} right`}
				aria-hidden="true"
			></span>
		</div>
	);
}
