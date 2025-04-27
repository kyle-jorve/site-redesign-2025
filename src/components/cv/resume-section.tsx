"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { HeadingType } from "@/types/global-types";
import { ResumeSectionType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import ResumeItem from "@/components/cv/resume-item";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeSectionProps = Omit<ResumeSectionType, "name"> & {
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ResumeSection({
	title,
	items,
	heading = "h3",
	className = "",
	...otherProps
}: ResumeSectionProps) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const classes = printClassNames([styles["resume-section"], className]);
	const Heading = heading as React.ElementType;

	return (
		<div
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
		>
			<Heading className={styles.title}>{title}</Heading>

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
