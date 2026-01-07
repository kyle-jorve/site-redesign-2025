import { HeadingType } from "@/types/global-types";
import { ResumeType } from "@/types/cv-types";
import { outputClassNames } from "@/utils";
import HeadingBar from "@/components/global/heading-bar";
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
	const IntroHeading = `h${introHeadingLevel}` as React.ElementType;

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
				<div className={styles.intro}>
					<IntroHeading className={styles.title}>
						{introduction.title}
					</IntroHeading>
					{introduction.content}
				</div>

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
