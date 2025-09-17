"use client";

import { useState } from "react";
import { ImageMetaType } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import styles from "@/styles/components/gallery/lightbox.module.css";

export type LightboxProps = {
	images: ImageMetaType[];
	activeSlide: number;
	open?: boolean;
} & React.HTMLAttributes<HTMLDialogElement>;

export default function Lightbox({
	images,
	activeSlide,
	open = false,
	className = "",
	...otherProps
}: LightboxProps) {
	const classes = printClassNames([styles.lightbox, className]);

	return (
		<dialog
			className={classes}
			{...otherProps}
		></dialog>
	);
}
