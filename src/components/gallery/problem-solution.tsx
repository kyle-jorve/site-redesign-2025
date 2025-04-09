import { ProjectType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import ContentBox from "@/components/global/content-box";
import styles from "@/styles/components/gallery/projects.module.css";

export type ProblemSolutionProps = {
	problemText: ProjectType["problemText"];
	solutionText: ProjectType["solutionText"];
} & React.HTMLAttributes<HTMLDivElement>;

export default function ProblemSolution({
	problemText,
	solutionText,
	className = "",
	...otherProps
}: ProblemSolutionProps) {
	const classes = printClassNames([
		styles["problem-solution-row"],
		className,
	]);
	const data = [
		{
			name: "problem",
			title: "Problem",
			desc: problemText,
		},
		{
			name: "solution",
			title: "Solution",
			desc: solutionText,
		},
	];

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{data.map((item) => {
				return (
					<ContentBox
						key={item.name}
						size="small"
					>
						<h2 className={`heading-5 ${styles.title}`}>
							{item.title}
						</h2>

						<p className={`body-text small ${styles.desc}`}>
							{item.desc}
						</p>
					</ContentBox>
				);
			})}
		</div>
	);
}
