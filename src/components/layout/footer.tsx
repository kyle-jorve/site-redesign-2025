import { printClassNames } from "@/utils/utils";
import { copyrightText } from "@/data/global-data";
import SocialIcons from "@/components/global/social-icons";
import styles from "@/styles/components/layout/footer.module.css";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export default function Footer({ className = "", ...otherProps }: FooterProps) {
	const classes = printClassNames([styles.footer, className]);

	return (
		<footer
			className={classes}
			{...otherProps}
		>
			<SocialIcons className={styles["footer-icons"]} />

			<p className={`body-text small ${styles.copyright}`}>
				{copyrightText}
			</p>
		</footer>
	);
}
