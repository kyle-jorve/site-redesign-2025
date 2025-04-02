import { LogoProps } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import CustomLink from "./custom-link";
import styles from "@/styles/components/layout/header.module.css";

export default function Logo({ className = "", ...otherProps }: LogoProps) {
	const classes = printClassNames([
		styles.logo,
		...className.trim().split(" "),
	]);

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
