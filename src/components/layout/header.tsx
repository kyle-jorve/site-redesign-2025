"use client";

import { useEffect, useRef, useContext, useState } from "react";
import SiteContext from "@/utils/site-context";
import { outputClassNames } from "@/utils/utils";
import Logo from "@/components/layout/logo";
import Navigation from "@/components/layout/navigation";
import styles from "@/styles/components/layout/header.module.css";
import navStyles from "@/styles/components/layout/navigation.module.css";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export default function Header({ className = "", ...otherProps }: HeaderProps) {
	const { hideShell } = useContext(SiteContext);
	const headerRef = useRef<HTMLElement>(null);
	const [mobileNavHidden, setMobileNavHidden] = useState<boolean>(false);
	const classes = outputClassNames(["header", className], [styles]);
	const breakpoint = 640;

	// set mobile nav hidden state on scroll
	useEffect(() => {
		let prevScrollPos = 0;

		function handleScroll() {
			if (window.innerWidth >= breakpoint) return;

			if (window.scrollY < prevScrollPos - 10) setMobileNavHidden(false);
			else if (window.scrollY > prevScrollPos + 10)
				setMobileNavHidden(true);

			prevScrollPos = window.scrollY;
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	if (hideShell) return null;

	return (
		<>
			<header
				ref={headerRef}
				className={classes}
				{...otherProps}
			>
				<div className={styles.inner}>
					<Logo />
					<Navigation />
				</div>
			</header>

			<Navigation
				isMobileNav={true}
				className={mobileNavHidden ? navStyles.hidden : ""}
			/>
		</>
	);
}
