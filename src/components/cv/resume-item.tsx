import { printClassNames } from "@/utils";
import { ResumeItemType } from "@/types/cv-types";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeItemProps = Exclude<ResumeItemType, "id"> &
	React.HTMLAttributes<HTMLLIElement>;

export default function ResumeItem({
	title,
	description,
	startYear = undefined,
	endYear = undefined,
	company = undefined,
	year = undefined,
	className = "",
	...otherProps
}: ResumeItemProps) {
	const classes = printClassNames([styles["resume-item"], className]);
	const yearString = (() => {
		if (startYear !== undefined && endYear !== undefined)
			return `${startYear} - ${endYear}`;
		if (year !== undefined) return String(year);
		return null;
	})();

	return (
		<li
			className={classes}
			{...otherProps}
		>
			<div
				className={`content-box medium ${styles["resume-item-content"]}`}
			>
				{!!yearString && (
					<span className={`heading-5 ${styles.year}`}>
						{yearString}
					</span>
				)}

				<h4 className={styles.title}>{title}</h4>

				{company !== undefined && (
					<span className={`heading-5 ${styles.company}`}>
						{company}
					</span>
				)}

				<div className={styles.desc}>{description}</div>
			</div>
		</li>
	);
}
