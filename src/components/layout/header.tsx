import { printClassNames } from "@/utils/utils";
import Logo from "@/components/layout/logo";
import Navigation from "@/components/layout/navigation";
import styles from "@/styles/components/layout/header.module.css";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export default function Header({ className = "", ...otherProps }: HeaderProps) {
	const classes = printClassNames([styles.header, className]);

	return (
		<>
			<header
				className={classes}
				{...otherProps}
			>
				<Logo />
				<Navigation />
			</header>

			<Navigation isMobileNav={true} />
		</>
	);
}
