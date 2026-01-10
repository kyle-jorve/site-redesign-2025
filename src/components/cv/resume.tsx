import { HeadingType } from "@/types/global-types";
import { ResumeType } from "@/types/cv-types";
import { outputClassNames } from "@/utils";
import HeadingBar from "@/components/global/heading-bar";
import ResumeIntro from "@/components/cv/resume-intro";
import ResumeSection from "@/components/cv/resume-section";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeProps = ResumeType & {
	heading?: HeadingType;
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function Resume({
	title,
	introduction,
	sections,
	url,
	buttonText = "Contact Me",
	heading = 2,
	className = "",
	...otherProps
}: ResumeProps) {
	const classes = outputClassNames(["resume", className], [styles]);
	const introHeadingLevel = (
		heading == 6 ? heading : heading + 1
	) as HeadingType;

	return (
		<section
			className={classes}
			id="resume"
			{...otherProps}
		>
			<HeadingBar
				className={styles.header}
				title={title}
				url={url}
				underlineTitle={false}
				heading={heading}
				buttonType="contact"
				buttonText={buttonText}
				linesColor="blue"
				width="narrow"
			/>

			<div className={styles.sections}>
				<ResumeIntro
					heading={introHeadingLevel}
					title={introduction.title}
					content={introduction.content}
				/>

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
