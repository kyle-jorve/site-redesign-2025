import { HeaderProps } from "@/types/global-types";
import { printClassNames } from "@/utils/utils";
import Logo from "./logo";
import Navigation from "./navigation";
import styles from "@/styles/components/layout/header.module.css";

export default function Header({ className = "", ...otherProps }: HeaderProps) {
	const classes = printClassNames([
		styles.header,
		...className.trim().split(" "),
	]);

	return (
		<header
			className={classes}
			{...otherProps}
		>
			<Logo />
			<Navigation />
		</header>
	);
}
