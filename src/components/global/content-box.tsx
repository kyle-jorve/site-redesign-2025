import { printClassNames } from "@/utils/utils";

export type ContentBoxProps = {
	size?: "standard" | "small";
} & React.PropsWithChildren &
	React.HTMLAttributes<HTMLDivElement>;

export default function ContentBox({
	children,
	size = "standard",
	className = "",
	...otherProps
}: ContentBoxProps) {
	const classes = printClassNames(["content-box", size, className]);

	return (
		<div
			className={classes}
			{...otherProps}
		>
			{children}
		</div>
	);
}
