import { HeadingType } from "@/types/global-types";
import { ResumeType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import HeadingBar from "@/components/global/heading-bar";
import ResumeSection from "@/components/cv/resume-section";
import styles from "@/styles/components/cv/resume.module.css";

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
	const classes = printClassNames([styles.resume, className]);

	return (
		<section
			className={classes}
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
				width="narrow"
			/>

			<div className={styles.sections}>
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
