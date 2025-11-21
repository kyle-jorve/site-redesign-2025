"use client";

import { useContext } from "react";
import SiteContext from "@/context/site-context";
import { outputClassNames } from "@/utils";
import { copyrightText } from "@/data/global-data";
import SocialIcons from "@/components/global/social-icons";
import styles from "@/styles/components/layout/footer.module.css";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export default function Footer({ className = "", ...otherProps }: FooterProps) {
	const classes = outputClassNames(["footer", className], [styles]);
	const { hideShell, lightboxOpen } = useContext(SiteContext);

	if (hideShell) return null;

	return (
		<footer
			className={classes}
			{...otherProps}
			inert={lightboxOpen}
		>
			<SocialIcons className={styles["footer-icons"]} />

			<p className={`body-text small ${styles.copyright}`}>
				{copyrightText}
			</p>
		</footer>
	);
}
