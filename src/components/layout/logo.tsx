import { printClassNames } from "@/utils/utils";
import CustomLink from "@/components/global/custom-link";
import LogoImage from "./logo-image";
import styles from "@/styles/components/layout/header.module.css";

export type LogoProps = {
	color?: "standard" | "dark";
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function Logo({
	color = "standard",
	className = "",
	...otherProps
}: LogoProps) {
	const classes = printClassNames(["logo", className], [styles]);

	return (
		<CustomLink
			className={classes}
			to="/"
			aria-label="go to home page"
			{...otherProps}
		>
			<LogoImage color={color} />
		</CustomLink>
	);
}
