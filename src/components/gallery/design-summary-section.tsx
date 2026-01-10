"use client";

import { useRef, useContext } from "react";
import { useIntersectionObserver } from "@/hooks";
import { outputClassNames } from "@/utils";
import { ProjectType } from "@/types/gallery-types";
import SiteContext from "@/context/site-context";
import ProblemSolution from "@/components/gallery/problem-solution";
import ButtonLinkRow from "@/components/global/button-link-row";
import styles from "@/styles/components/gallery/design-summary-section.module.css";
import projectDetailStyles from "@/styles/components/gallery/project-detail.module.css";

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
	const { intersectionTransition } = useContext(SiteContext);
	const classes = outputClassNames(["design-summary", className], [styles]);

	if (!problemText && !solutionText && !overviewText && !url) return null;

	return (
		<section
			ref={sectionRef}
			className={classes}
			{...otherProps}
			style={{
				...otherProps.style,
				opacity: intersected ? 1 : 0,
				transition: intersectionTransition,
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
					<h2 className={`heading-5 ${projectDetailStyles.title}`}>
						Overview
					</h2>
					<p className="body-text small">{overviewText}</p>
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
