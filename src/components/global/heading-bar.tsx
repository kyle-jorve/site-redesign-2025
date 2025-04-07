import { printClassNames } from "@/utils";
import { HeadingType } from "@/types/global-types";
import ButtonLink from "@/components/global/button-link";
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
		className,
	]);
	const Heading = heading as React.ElementType;

	return (
		<header
			className={classes}
			{...otherProps}
		>
			<Heading className={styles.title}>{title}</Heading>

			{url !== undefined && (
				<ButtonLink url={url}>{buttonText}</ButtonLink>
			)}
		</header>
	);
}
