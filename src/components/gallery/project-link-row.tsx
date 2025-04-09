import { printClassNames } from "@/utils";
import ButtonLink from "@/components/global/button-link";
import styles from "@/styles/components/gallery/projects.module.css";

export type ProjectLinkRowProps = {
	url: string;
	buttonText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ProjectLinkRow({
	url,
	buttonText = "Visit Website",
	className = "",
	...otherProps
}: ProjectLinkRowProps) {
	const classes = printClassNames([styles["link-row"], className]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			<ButtonLink url={url}>{buttonText}</ButtonLink>
		</div>
	);
}
