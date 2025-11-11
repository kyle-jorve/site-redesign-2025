import type { Metadata } from "next";
import { standardLinks, commerceLinks } from "@/data/links-data";
import CustomLink from "@/components/global/custom-link";
import LogoImage from "@/components/layout/logo-image";
import Links from "@/components/hero/links";
import "@/styles/components/hero/links.css";

export const metadata: Metadata = {
	title: "Links",
};

export default function LinksPage() {
	return (
		<>
			<section className={"links-section"}>
				<header className={"links-header"}>
					<CustomLink
						className={"links-logo"}
						to="/"
						target="_blank"
						aria-label="go to home page"
					>
						<LogoImage className={"links-logo-img"} />
					</CustomLink>
					<h1 className={"links-title"}>Links</h1>
				</header>
				<Links
					socialLinks={standardLinks}
					commerceLinks={commerceLinks}
				/>
			</section>
		</>
	);
}
