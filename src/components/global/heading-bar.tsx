import { printClassNames } from "@/utils";
import { HeadingType } from "@/types/global-types";
import ButtonLinkRow from "@/components/global/button-link-row";
import styles from "@/styles/components/global/heading-bar.module.css";

export type HeadingBarProps = {
	title: string | React.ReactElement;
	url: string;
	width?: "wide" | "narrow";
	heading?: HeadingType;
	buttonText?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function HeadingBar({
	title,
	width = "wide",
	url,
	heading = "h2",
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
		"underline underline-center",
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
				buttonText={buttonText}
			/>
		</header>
	);
}
