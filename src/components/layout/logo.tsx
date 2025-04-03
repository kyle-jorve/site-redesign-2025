import { printClassNames } from "@/utils";
import CustomLink from "../global/custom-link";
import styles from "@/styles/components/layout/header.module.css";

export type LogoProps = React.HTMLAttributes<HTMLAnchorElement>;

export default function Logo({ className = "", ...otherProps }: LogoProps) {
	const classes = printClassNames([styles.logo, className]);

	return (
		<CustomLink
			className={classes}
			to="/"
			aria-label="go to home page"
			{...otherProps}
		>
			<img
				className={styles["logo-img"]}
				src="/images/logo.svg"
				alt="Kyle Jorve monogram"
				loading="eager"
				fetchPriority="high"
			/>
		</CustomLink>
	);
}
