import { printClassNames } from "@/utils";
import { bio } from "@/data/cv-data";
import ResponsiveImage from "@/components/global/responsive-image";
import SocialIcons from "@/components/global/social-icons";
import ButtonLink from "@/components/global/button-link";
import styles from "@/styles/components/cv/bio.module.css";

export type BioProps = {
	placement?: "hero" | "body";
} & React.HTMLAttributes<HTMLElement>;

export default function Bio({
	placement = "body",
	className = "",
	...otherProps
}: BioProps) {
	const classes = printClassNames([styles.bio, styles[placement], className]);
	const isHero = placement === "hero";
	const Heading = (isHero ? "h1" : "h2") as React.ElementType;
	const url = "/cv#resume";

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<article className={styles.inner}>
				<div className={`content-box ${styles["content-col"]}`}>
					<Heading className={styles.title}>{bio.title}</Heading>

					{bio.body}

					{isHero ? (
						<SocialIcons className={styles["bio-icons"]} />
					) : (
						<div className={styles["button-row"]}>
							<ButtonLink url={url}>{bio.buttonText}</ButtonLink>
						</div>
					)}
				</div>

				<div className={styles["image-col"]}>
					<div className={styles["image-wrapper"]}>
						<ResponsiveImage
							className={styles.image}
							image={bio.image}
						/>
					</div>
				</div>
			</article>
		</section>
	);
}
