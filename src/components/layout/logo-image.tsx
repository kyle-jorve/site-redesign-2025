import { LogoProps } from "./logo";
import { printClassNames } from "@/utils/utils";
import styles from "@/styles/components/layout/header.module.css";

export type LogoImageProps = {
	color?: LogoProps["color"];
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function LogoImage({
	color = "standard",
	className = "",
	...otherProps
}: LogoImageProps) {
	const classes = printClassNames([styles["logo-img"], className]);
	const srcUrl =
		color === "standard" ? "/images/logo.svg" : "/images/logo-dark.svg";

	return (
		<img
			className={classes}
			src={srcUrl}
			alt="Kyle Jorve monogram"
			loading="eager"
			fetchPriority="high"
			{...otherProps}
		/>
	);
}
