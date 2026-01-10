"use client";

import { useRef, useContext } from "react";
import { useIntersectionObserver } from "@/hooks";
import { HeadingType } from "@/types/global-types";
import { ResumeSectionType } from "@/types/cv-types";
import { outputClassNames } from "@/utils";
import SiteContext from "@/context/site-context";
import ResumeItem from "@/components/cv/resume-item";
import styles from "@/styles/components/cv/resume-section.module.css";

export type ResumeSectionProps = Omit<ResumeSectionType, "name"> & {
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ResumeSection({
	title,
	items,
	heading = 3,
	className = "",
	...otherProps
}: ResumeSectionProps) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const { intersectionTransition } = useContext(SiteContext);
	const classes = outputClassNames(["section", className], [styles]);
	const Heading = `h${heading}` as React.ElementType;

	return (
		<div
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: intersectionTransition,
			}}
		>
			<Heading>{title}</Heading>

			<ul className={styles["items-list"]}>
				{items.map((item) => {
					return (
						<ResumeItem
							key={item.name}
							{...item}
						/>
					);
				})}
			</ul>
		</div>
	);
}
