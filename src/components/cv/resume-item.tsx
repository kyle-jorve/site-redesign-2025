import { HeadingType } from "@/types/global-types";
import { ResumeItemType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import ContentBox from "@/components/global/content-box";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeItemProps = Omit<ResumeItemType, "name"> & {
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLLIElement>;

export default function ResumeItem({
	title,
	description,
	heading = "h4",
	company = undefined,
	year = undefined,
	className = "",
	...otherProps
}: ResumeItemProps) {
	const classes = printClassNames([styles["resume-item"], className]);
	const Heading = heading as React.ElementType;

	return (
		<li
			className={classes}
			{...otherProps}
		>
			<ContentBox
				size="small"
				className={styles["resume-item-content"]}
			>
				{year !== undefined && (
					<span className={`heading-5 ${styles.year}`}>{year}</span>
				)}

				<Heading className={styles.title}>{title}</Heading>

				{company !== undefined && (
					<span className={`heading-5 ${styles.company}`}>
						{company}
					</span>
				)}

				<div className={styles.desc}>{description}</div>
			</ContentBox>
		</li>
	);
}
