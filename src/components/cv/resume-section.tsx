import { HeadingType } from "@/types/global-types";
import { ResumeSectionType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import ResumeItem from "@/components/cv/resume-item";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeSectionProps = Omit<ResumeSectionType, "name"> & {
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ResumeSection({
	title,
	items,
	heading = "h3",
	className = "",
	...otherProps
}: ResumeSectionProps) {
	const classes = printClassNames([styles["resume-section"], className]);
	const Heading = heading as React.ElementType;

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<Heading className={styles.title}>{title}</Heading>

			<ul className={styles["items-list"]}>
				{items.map((item) => {
					return (
						<ResumeItem
							key={item.name}
							{...item}
						/>
					);
				})}
			</ul>
		</div>
	);
}
