import { CategoryType } from "@/types/gallery-types";
import { printClassNames } from "@/utils";
import CategoryChip from "@/components/global/category-chip";
import styles from "@/styles/components/hero/interior-hero.module.css";
import React from "react";

export type InteriorHeroProps = {
	title: string;
	description: string;
	topBar?: React.ReactElement;
	categories?: CategoryType[];
} & React.HTMLAttributes<HTMLElement>;

export default function InteriorHero({
	title,
	description,
	topBar = undefined,
	categories = [],
	className = "",
	...otherProps
}: InteriorHeroProps) {
	const classes = printClassNames([styles["interior-hero"], className]);

	return (
		<section
			className={classes}
			{...otherProps}
		>
			{!!topBar && <div className={styles["top-bar"]}>{topBar}</div>}

			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>

				{!!categories.length && (
					<div className={styles["categories-row"]}>
						{categories
							.filter((cat) => !cat.hidden)
							.map((cat) => {
								return (
									<CategoryChip
										key={cat.name}
										category={cat}
										size="large"
									/>
								);
							})}
					</div>
				)}

				<p className={`body-text large ${styles.desc}`}>
					{description}
				</p>
			</div>
		</section>
	);
}
