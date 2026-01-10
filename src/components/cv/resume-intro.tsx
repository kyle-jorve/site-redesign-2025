"use client";

import { useRef, useContext } from "react";
import { HeadingType } from "@/types/global-types";
import { ResumeIntroType } from "@/types/cv-types";
import { useIntersectionObserver } from "@/hooks";
import SiteContext from "@/context/site-context";

export type ResumeIntroProps = {
	heading?: HeadingType;
} & ResumeIntroType &
	Omit<React.HTMLAttributes<HTMLDivElement>, "content">;

export default function ResumeIntro({
	heading = 3,
	title,
	content,
	...otherProps
}: ResumeIntroProps) {
	const ref = useRef<HTMLDivElement>(null);
	const intersected = useIntersectionObserver(ref);
	const { intersectionTransition } = useContext(SiteContext);
	const Heading = `h${heading}` as React.ElementType;

	return (
		<div
			ref={ref}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: intersectionTransition,
			}}
		>
			<Heading>{title}</Heading>
			{content}
		</div>
	);
}
