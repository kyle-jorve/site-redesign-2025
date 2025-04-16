import { printClassNames } from "@/utils";
import { HeadingType } from "@/types/global-types";
import ButtonLinkRow from "@/components/global/button-link-row";
import styles from "@/styles/components/global/heading-bar.module.css";

export type HeadingBarProps = {
	title: string | React.ReactElement;
	width?: "wide" | "narrow";
	url?: string;
	heading?: HeadingType;
	buttonText?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function HeadingBar({
	title,
	width = "wide",
	url = undefined,
	heading = "h2",
	buttonText = "See More",
	className = "",
	...otherProps
}: HeadingBarProps) {
	const classes = printClassNames([
		styles["heading-bar"],
		styles[width],
		url === undefined ? "underline underline-center" : "",
		className,
	]);
	const titleClasses = printClassNames([
		styles.title,
		url !== undefined ? "underline underline-center" : "",
	]);
	const Heading = heading as React.ElementType;

	return (
		<header
			className={classes}
			{...otherProps}
		>
			<Heading className={titleClasses}>{title}</Heading>

			{url !== undefined && (
				<ButtonLinkRow
					url={url}
					buttonText={buttonText}
				/>
			)}
		</header>
	);
}
