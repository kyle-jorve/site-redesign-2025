import { printClassNames } from "@/utils";
import ButtonLink from "@/components/global/button-link";
import styles from "@/styles/components/global/heading-bar.module.css";

export type HeadingBarProps = {
	title: string;
	url: string;
	heading?: "h2" | "h3" | "h4" | "h5" | "h6";
	buttonText?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function HeadingBar({
	title,
	url,
	heading = "h2",
	buttonText = "See More",
	className = "",
	...otherProps
}: HeadingBarProps) {
	const classes = printClassNames([styles["heading-bar"], className]);
	const Heading = heading as React.ElementType;

	return (
		<header
			className={classes}
			{...otherProps}
		>
			<Heading className={styles.title}>{title}</Heading>
			<ButtonLink url={url}>{buttonText}</ButtonLink>
		</header>
	);
}
