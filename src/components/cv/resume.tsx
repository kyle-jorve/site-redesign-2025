import { HeadingType } from "@/types/global-types";
import { ResumeType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import HeadingBar from "@/components/global/heading-bar";
import ResumeSection from "@/components/cv/resume-section";
import "@/styles/components/cv/resume.css";

export type ResumeProps = ResumeType & {
	heading?: HeadingType;
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function Resume({
	title,
	sections,
	url,
	buttonText = "Contact Me",
	heading = "h2",
	className = "",
	...otherProps
}: ResumeProps) {
	const classes = printClassNames(["resume", className]);

	return (
		<section
			className={classes}
			id="resume"
			{...otherProps}
		>
			<HeadingBar
				className="header"
				title={title}
				url={url}
				underlineTitle={false}
				heading={heading}
				buttonType="contact"
				buttonText={buttonText}
				linesColor="blue"
				width="narrow"
			/>

			<div className="sections">
				{sections.map((section) => {
					return (
						<ResumeSection
							key={section.name}
							{...section}
						/>
					);
				})}
			</div>
		</section>
	);
}
