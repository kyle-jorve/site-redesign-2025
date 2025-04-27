"use client";

import { useEffect, useRef, useContext, useState } from "react";
import SiteContext from "@/utils/site-context";
import { printClassNames } from "@/utils/utils";
import Logo from "@/components/layout/logo";
import Navigation from "@/components/layout/navigation";
import styles from "@/styles/components/layout/header.module.css";
import navStyles from "@/styles/components/layout/navigation.module.css";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export default function Header({ className = "", ...otherProps }: HeaderProps) {
	const {
		dropdownOpen,
		headerFixed,
		headerInnerRef,
		headerRevealed,
		loadStatus,
		setHeaderFixed,
		setHeaderRevealed,
		visited,
	} = useContext(SiteContext);
	const headerRef = useRef<HTMLElement>(null);
	const [headerBuffer, setHeaderBuffer] = useState<number>(0);
	const [mobileNavHidden, setMobileNavHidden] = useState<boolean>(false);
	const [componentLoaded, setComponentLoaded] = useState<boolean>(false);
	const classes = printClassNames([
		styles.header,
		dropdownOpen ? styles["dropdown-open"] : "",
		headerFixed ? styles.fixed : "",
		headerRevealed ? styles.reveal : "",
		!componentLoaded ? styles.hide : "",
		className,
	]);

	// set header fixed state on scroll
	useEffect(() => {
		const header = headerRef?.current;

		if (!header) return;

		function handleScroll() {
			if (!header) return;

			const bottom = header.getBoundingClientRect().bottom;

			if (bottom <= -200) setHeaderFixed(true);
			else setHeaderFixed(false);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [setHeaderFixed]);

	// set header buffer and reveal state
	useEffect(() => {
		const headerInner = headerInnerRef?.current;

		if (!headerFixed) setHeaderRevealed(false);

		// set header buffer
		if (headerFixed && headerInner)
			setHeaderBuffer(headerInner.offsetHeight);
		else if (!headerFixed) setHeaderBuffer(0);

		// set revealed state
		let prevScrollPos = 0;

		function handleScroll() {
			if (!headerFixed) return;

			if (window.scrollY < prevScrollPos - 10) setHeaderRevealed(true);
			else if (window.scrollY > prevScrollPos + 10)
				setHeaderRevealed(false);

			prevScrollPos = window.scrollY;
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [headerFixed, headerInnerRef, setHeaderRevealed]);

	// set mobile nav hidden state on scroll
	useEffect(() => {
		let prevScrollPos = 0;

		function handleScroll() {
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

	// set component loaded state on page load
	useEffect(() => {
		if (!visited) {
			setComponentLoaded(false);
			return;
		}

		setComponentLoaded(false);

		if (loadStatus === "idle") setComponentLoaded(true);
	}, [loadStatus, visited]);

	return (
		<>
			<header
				ref={headerRef}
				className={classes}
				{...otherProps}
				style={{
					...otherProps.style,
					paddingTop: `${headerBuffer}px`,
				}}
			>
				<div
					ref={headerInnerRef}
					className={styles.inner}
				>
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
