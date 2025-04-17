import { printClassNames } from "@/utils/utils";
import { HeadingType } from "@/types/global-types";
import { ButtonLinkProps } from "@/components/global/button-link";
import ButtonLinkRow from "@/components/global/button-link-row";
import styles from "@/styles/components/global/heading-bar.module.css";

export type HeadingBarProps = {
	title: string | React.ReactElement;
	url: string;
	underlineTitle?: boolean;
	width?: "wide" | "narrow";
	heading?: HeadingType;
	buttonType?: ButtonLinkProps["type"];
	buttonColor?: ButtonLinkProps["color"];
	buttonText?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function HeadingBar({
	title,
	width = "wide",
	url,
	underlineTitle = true,
	heading = "h2",
	buttonType = undefined,
	buttonColor = undefined,
	buttonText = "See More",
	className = "",
	...otherProps
}: HeadingBarProps) {
	const classes = printClassNames([
		styles["heading-bar"],
		styles[width],
		"underline underline-center",
		className,
	]);
	const titleClasses = printClassNames([
		styles.title,
		underlineTitle ? "underline underline-center" : "",
	]);
	const Heading = heading as React.ElementType;

	return (
		<header
			className={classes}
			{...otherProps}
		>
			<Heading className={titleClasses}>{title}</Heading>

			<ButtonLinkRow
				url={url}
				buttonType={buttonType}
				buttonColor={buttonColor}
				buttonText={buttonText}
			/>
		</header>
	);
}
