import { printClassNames } from "@/utils";
import Logo from "./logo";
import Navigation from "./navigation";
import styles from "@/styles/components/layout/header.module.css";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export default function Header({ className = "", ...otherProps }: HeaderProps) {
	const classes = printClassNames([styles.header, className]);

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
