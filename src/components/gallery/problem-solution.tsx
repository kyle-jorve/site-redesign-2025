import { ProjectType } from "@/types/gallery-types";
import { printClassNames } from "@/utils/utils";
import ContentBox from "@/components/global/content-box";
import "@/styles/components/gallery/project-detail.css";

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
	const classes = printClassNames(["problem-solution-row", className]);
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
						<h2 className="heading-5 title">{item.title}</h2>

						<p className="body-text small desc">{item.desc}</p>
					</ContentBox>
				);
			})}
		</div>
	);
}
