import { printClassNames } from "@/utils";
import CustomLink from "../global/custom-link";
import { socialMedia } from "@/data/global-data";
import styles from "@/styles/components/layout/footer.module.css";

export type FooterIconsProps = React.HTMLAttributes<HTMLDivElement>;

export default function FooterIcons({
	className = "",
	...otherProps
}: FooterIconsProps) {
	const classes = printClassNames([styles.social, className]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{Object.entries(socialMedia).map(([key, value]) => {
				return (
					<CustomLink
						key={key}
						className={`${styles["social-icon"]} ${styles[key]} ${
							styles[value.type]
						}`}
						to={value.url}
						target="_blank"
						rel="noreferrer"
						aria-label={`go to Kyle's ${value.label} page`}
					>
						{value.icon}
					</CustomLink>
				);
			})}
		</div>
	);
}
