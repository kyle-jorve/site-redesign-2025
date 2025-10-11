"use client";

import { useContext, useState, useEffect, useRef } from "react";
import SiteContext from "@/utils/site-context";
import { printClassNames } from "@/utils/utils";
import CircleButton from "@/components/global/circle-button";
import styles from "@/styles/components/global/lightbox.module.css";

export type LightboxProps = React.HTMLAttributes<HTMLDialogElement>;

export default function Lightbox({
	className = "",
	...otherProps
}: LightboxProps) {
	const {
		lightboxChildren,
		lightboxId,
		lightboxOpen,
		closeLightbox,
		setLightboxChildren,
	} = useContext(SiteContext);
	const [status, setStatus] = useState<"in" | "out" | "open" | "closed">(
		"closed",
	);
	const lightboxRef = useRef<HTMLDialogElement | null>(null);
	const classes = printClassNames([
		styles.lightbox,
		styles[status],
		className,
	]);

	useEffect(() => {
		const lightboxEl = lightboxRef?.current;

		if (!lightboxEl) return;

		function handleAnimationEnd() {
			setStatus(lightboxOpen ? "open" : "closed");
			if (!lightboxOpen) setLightboxChildren(<></>);
		}

		lightboxEl.addEventListener("animationend", handleAnimationEnd, {
			once: true,
		});

		setStatus(lightboxOpen ? "in" : "out");

		return () => {
			lightboxEl.removeEventListener("animationend", handleAnimationEnd);
		};
	}, [lightboxOpen]);

	return (
		<dialog
			className={classes}
			id={lightboxId}
			open={lightboxOpen}
			ref={lightboxRef}
			{...otherProps}
		>
			<CircleButton
				icon="cross"
				aria-label="close lightbox"
				shadowColor="light"
				className={styles["close-button"]}
				onClick={() => closeLightbox()}
			/>
			{lightboxChildren}
		</dialog>
	);
}
