import { HeadingType } from "@/types/global-types";
import { ResumeType } from "@/types/cv-types";
import { printClassNames } from "@/utils";
import HeadingBar from "@/components/global/heading-bar";
import ResumeSection from "@/components/cv/resume-section";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeProps = ResumeType & {
	heading?: HeadingType;
} & Omit<React.HTMLAttributes<HTMLElement>, "title">;

export default function Resume({
	title,
	sections,
	url = undefined,
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
				title={title}
				url={url}
				heading={heading}
				buttonText={buttonText}
				width="narrow"
			/>

			{sections.map((section) => {
				return (
					<ResumeSection
						key={section.name}
						{...section}
					/>
				);
			})}
		</section>
	);
}
