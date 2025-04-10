import { printClassNames } from "@/utils";
import { ProjectType } from "@/types/gallery-types";
import ProblemSolution from "@/components/gallery/problem-solution";
import ProjectLinkRow from "@/components/gallery/project-link-row";
import styles from "@/styles/components/gallery/project-detail.module.css";

export type DesignSummerySectionProps = {
	problemText?: ProjectType["problemText"];
	solutionText?: ProjectType["solutionText"];
	url?: string;
	buttonText?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function DesignSummarySection({
	problemText = undefined,
	solutionText = undefined,
	url = undefined,
	buttonText = "Visit Website",
	className = "",
	...otherProps
}: DesignSummerySectionProps) {
	const classes = printClassNames([styles["design-summary"], className]);

	if (!problemText && !solutionText && !url) return null;

	return (
		<section
			className={classes}
			{...otherProps}
		>
			{problemText !== undefined && solutionText !== undefined && (
				<ProblemSolution
					problemText={problemText}
					solutionText={solutionText}
				/>
			)}

			{url !== undefined && (
				<ProjectLinkRow
					url={url}
					buttonText={buttonText}
				/>
			)}
		</section>
	);
}
