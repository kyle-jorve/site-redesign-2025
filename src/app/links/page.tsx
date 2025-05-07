import type { Metadata } from "next";
import { standardLinks, commerceLinks } from "@/data/links-data";
import CustomLink from "@/components/global/custom-link";
import LogoImage from "@/components/layout/logo-image";
import Links from "@/components/hero/links";
import styles from "@/styles/components/hero/links.module.css";

export const metadata: Metadata = {
	title: "Links",
};

export default function LinksPage() {
	return (
		<>
			<section className={styles["links-main"]}>
				<header className={styles.header}>
					<CustomLink
						className={styles.logo}
						to="/"
						target="_blank"
						aria-label="go to home page"
					>
						<LogoImage className={styles["logo-img"]} />
					</CustomLink>
					<h1 className={styles.title}>Links</h1>
				</header>
				<Links
					socialLinks={standardLinks}
					commerceLinks={commerceLinks}
				/>
			</section>
		</>
	);
}
