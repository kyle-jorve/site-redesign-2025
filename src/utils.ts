import { ButtonLinkProps } from "@/components/global/button-link";

function returnCleanClassesArray(array: string[]) {
	return array
		.filter((str) => str)
		.map((str) => str.trim().split(" "))
		.flat();
}

export function outputClassNames(
	classes: string[],
	modules?: {
		readonly [key: string]: string;
	}[],
) {
	const cleanClasses = returnCleanClassesArray(classes);
	const moduleClasses = modules
		? returnCleanClassesArray(
				cleanClasses.map((c) => modules.map((mod) => mod[c])).flat(),
		  )
		: [];
	const joinedClasses = [...cleanClasses, ...moduleClasses];

	return joinedClasses.join(" ");
}

export function deriveButtonShadowColor(
	color: ButtonLinkProps["color"],
	shadowColor: ButtonLinkProps["shadowColor"] = undefined,
) {
	if (shadowColor) return shadowColor;

	if (color === "red") return "dark";
	if (color === "dark") return "light";
	if (color === "light") return undefined;
}

export function getThumbnailUrl({
	pathKey,
	imageWidth,
	format,
}: {
	pathKey: string;
	imageWidth: number;
	format: string;
}) {
	return `/images/${pathKey}/${pathKey}-kyle-jorve-${imageWidth}.${format}`;
}
