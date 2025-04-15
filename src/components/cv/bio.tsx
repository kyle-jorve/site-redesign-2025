import { HeadingType } from "@/types/global-types";
import { BioType } from "@/types/cv-types";
import { printClassNames } from "@/utils";
import ResponsiveImage from "@/components/global/responsive-image";
import SocialIcons from "@/components/global/social-icons";
import ButtonLink from "@/components/global/button-link";
import ContentBox from "@/components/global/content-box";
import styles from "@/styles/components/cv/bio.module.css";

export type BioProps = BioType & {
	placement?: "hero" | "body";
	heading?: HeadingType;
} & React.HTMLAttributes<HTMLElement>;

export default function Bio({
	title,
	body,
	image,
	url = "/cv#resume",
	buttonText = <>See R&eacute;sum&eacute;</>,
	placement = "body",
	heading = "h2",
	className = "",
	...otherProps
}: BioProps) {
	const classes = printClassNames([styles.bio, styles[placement], className]);
	const isHero = placement === "hero";
	const Heading = heading as React.ElementType;

	return (
		<section
			className={classes}
			{...otherProps}
		>
			<article className={styles.inner}>
				<ContentBox className={styles["content-col"]}>
					<Heading className={`underline ${styles.title}`}>
						{title}
					</Heading>

					{body}

					{isHero ? (
						<SocialIcons className={styles["bio-icons"]} />
					) : (
						<div className={styles["button-row"]}>
							<ButtonLink url={url}>{buttonText}</ButtonLink>
						</div>
					)}
				</ContentBox>

				<div className={styles["image-col"]}>
					<div className={styles["image-wrapper"]}>
						<ResponsiveImage
							className={styles.image}
							image={image}
						/>
					</div>
				</div>
			</article>
		</section>
	);
}
