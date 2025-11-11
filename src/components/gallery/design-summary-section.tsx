"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks";
import { printClassNames } from "@/utils/utils";
import { ProjectType } from "@/types/gallery-types";
import ProblemSolution from "@/components/gallery/problem-solution";
import ButtonLinkRow from "@/components/global/button-link-row";
import styles from "@/styles/components/gallery/project-detail.module.css";

export type DesignSummerySectionProps = {
	problemText?: ProjectType["problemText"];
	solutionText?: ProjectType["solutionText"];
	overviewText?: ProjectType["overviewText"];
	url?: string;
	buttonText?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function DesignSummarySection({
	problemText = undefined,
	solutionText = undefined,
	overviewText = undefined,
	url = undefined,
	buttonText = "Visit Website",
	className = "",
	...otherProps
}: DesignSummerySectionProps) {
	const sectionRef = useRef<HTMLElement>(null);
	const intersected = useIntersectionObserver(sectionRef);
	const classes = printClassNames(["design-summary", className], [styles]);

	if (!problemText && !solutionText && !overviewText && !url) return null;

	return (
		<section
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: "opacity 1s ease",
			}}
		>
			{problemText !== undefined && solutionText !== undefined && (
				<ProblemSolution
					problemText={problemText}
					solutionText={solutionText}
				/>
			)}

			{overviewText !== undefined && (
				<div
					className={`content-box small ${styles["design-overview"]}`}
				>
					<h2 className={`heading-5 ${styles.title}`}>Overview</h2>
					<p className={`body-text small ${styles.desc}`}>
						{overviewText}
					</p>
				</div>
			)}

			{url !== undefined && (
				<ButtonLinkRow
					url={url}
					buttonText={buttonText}
					linesColor="blue"
				/>
			)}
		</section>
	);
}
