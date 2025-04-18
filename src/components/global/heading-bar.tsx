"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
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
			style={{
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
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
