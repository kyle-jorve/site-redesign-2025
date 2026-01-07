import { HeadingType } from "@/types/global-types";
import { ResumeItemType } from "@/types/cv-types";
import { outputClassNames } from "@/utils";
import ContentBox from "@/components/global/content-box";
import styles from "@/styles/components/cv/resume.module.css";

export type ResumeItemProps = Omit<ResumeItemType, "name"> & {
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLLIElement>;

export default function ResumeItem({
	title,
	description,
	heading = 4,
	company = undefined,
	year = undefined,
	className = "",
	...otherProps
}: ResumeItemProps) {
	const classes = outputClassNames(["resume-item", className], [styles]);
	const Heading = `h${heading}` as React.ElementType;

	return (
		<li
			className={classes}
			{...otherProps}
		>
			<ContentBox
				size="small"
				className={styles.content}
			>
				<header className={styles["item-header"]}>
					{year !== undefined && (
						<span className={`heading-5 ${styles.year}`}>
							{year}
						</span>
					)}

					<Heading className={styles["item-title"]}>
						<span className={styles["item-title-text"]}>
							{title}
						</span>
					</Heading>

					{company !== undefined && (
						<span className={`heading-5 ${styles.company}`}>
							{company}
						</span>
					)}
				</header>

				<div className={styles.desc}>{description}</div>
			</ContentBox>
		</li>
	);
}
