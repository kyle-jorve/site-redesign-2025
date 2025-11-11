"use client";

import { useContext } from "react";
import SiteContext from "@/utils/site-context";
import { printClassNames } from "@/utils/utils";
import { copyrightText } from "@/data/global-data";
import SocialIcons from "@/components/global/social-icons";
import styles from "@/styles/components/layout/footer.module.css";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export default function Footer({ className = "", ...otherProps }: FooterProps) {
	const classes = printClassNames(["page-footer", className], [styles]);
	const { hideShell } = useContext(SiteContext);

	if (hideShell) return null;

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
