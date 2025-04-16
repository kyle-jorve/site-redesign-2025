import { printClassNames } from "@/utils";
import CustomLink from "@/components/global/custom-link";
import { socialMedia } from "@/data/global-data";
import styles from "@/styles/components/global/social-icons.module.css";

export type SocialIconsProps = {
	color?: "dark" | "red";
} & React.HTMLAttributes<HTMLDivElement>;

export default function SocialIcons({
	color = "red",
	className = "",
	...otherProps
}: SocialIconsProps) {
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
						} ${styles[color]}`}
						to={value.url}
						target="_blank"
						rel="noreferrer"
						aria-label={
							key === "email"
								? "email Kyle"
								: `go to Kyle's ${value.label} page`
						}
					></CustomLink>
				);
			})}
		</div>
	);
}
