"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { printClassNames } from "@/utils/utils";
import { HeadingType } from "@/types/global-types";
import { ButtonLinkRowProps } from "@/components/global/button-link-row";
import ButtonLinkRow from "@/components/global/button-link-row";
import styles from "@/styles/components/global/heading-bar.module.css";

export type HeadingBarProps = {
	title: string | React.ReactElement;
	underlineTitle?: boolean;
	url?: string;
	width?: "wide" | "narrow";
	heading?: HeadingType;
	buttonType?: ButtonLinkRowProps["buttonType"];
	buttonColor?: ButtonLinkRowProps["buttonColor"];
	buttonText?: string;
	linesClass?: ButtonLinkRowProps["linesClass"];
	linesColor?: ButtonLinkRowProps["linesColor"];
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function HeadingBar({
	title,
	width = "wide",
	url = undefined,
	underlineTitle = true,
	heading = "h2",
	buttonType = undefined,
	buttonColor = undefined,
	buttonText = "See More",
	linesClass = styles.lines,
	linesColor = undefined,
	className = "",
	...otherProps
}: HeadingBarProps) {
	const headerRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(headerRef);
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
			ref={headerRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
		>
			<Heading className={titleClasses}>{title}</Heading>

			{!!url && (
				<ButtonLinkRow
					className={styles["link-row"]}
					url={url}
					buttonType={buttonType}
					buttonColor={buttonColor}
					buttonText={buttonText}
					linesClass={linesClass}
					linesColor={linesColor}
				/>
			)}
		</header>
	);
}
