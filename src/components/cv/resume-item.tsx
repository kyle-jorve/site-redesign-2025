import { HeadingType } from "@/types/global-types";
import { ResumeItemType } from "@/types/cv-types";
import { printClassNames } from "@/utils/utils";
import ContentBox from "@/components/global/content-box";
import "@/styles/components/cv/resume.css";

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
	const classes = printClassNames(["resume-item", className]);
	const Heading = heading as React.ElementType;

	return (
		<li
			className={classes}
			{...otherProps}
		>
			<ContentBox
				size="small"
				className="content"
			>
				<header className={"item-header"}>
					{year !== undefined && (
						<span className="heading-5 year">{year}</span>
					)}

					<Heading className="item-title">
						<span className="item-title-text">{title}</span>
					</Heading>

					{company !== undefined && (
						<span className="heading-5 company">{company}</span>
					)}
				</header>

				<div className="desc">{description}</div>
			</ContentBox>
		</li>
	);
}
