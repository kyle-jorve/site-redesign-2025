"use client";

import { useEffect, useContext } from "react";
import { printClassNames } from "@/utils/utils";
import { SocialMediaObjectType } from "@/types/global-types";
import SiteContext from "@/utils/site-context";
import ButtonLink from "@/components/global/button-link";
import styles from "@/styles/components/hero/links.module.css";

export type LinksProps = {
	socialLinks: SocialMediaObjectType[];
	commerceLinks?: SocialMediaObjectType[];
} & React.HTMLAttributes<HTMLDivElement>;

export type LinkListProps = {
	links: SocialMediaObjectType[];
} & React.HTMLAttributes<HTMLUListElement>;

export function LinkList({
	links,
	className = "",
	...otherProps
}: LinkListProps) {
	const classes = printClassNames(["link-list", className], [styles]);
	const { setHideShell } = useContext(SiteContext);

	useEffect(() => {
		setHideShell(true);

		return () => {
			setHideShell(false);
		};
	}, []);

	return (
		<ul
			className={classes}
			{...otherProps}
		>
			{links.map((link) => {
				return (
					<li
						key={link.name}
						className={styles["link-item"]}
					>
						<ButtonLink
							className={`${styles.link} ${styles[link.name]}`}
							url={link.url}
							target="_blank"
						>
							{link.label}
						</ButtonLink>
					</li>
				);
			})}
		</ul>
	);
}

export default function Links({
	socialLinks,
	commerceLinks = undefined,
	className = "",
	...otherProps
}: LinksProps) {
	const classes = printClassNames(["links", className], [styles]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{!!commerceLinks && (
				<>
					<h2 className={styles["list-heading"]}>Shop</h2>
					<LinkList links={commerceLinks} />
				</>
			)}

			<h2 className={styles["list-heading"]}>Explore</h2>
			<LinkList links={socialLinks} />
		</div>
	);
}
