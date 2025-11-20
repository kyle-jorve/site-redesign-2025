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

export function getElementTransition(element: HTMLElement | null | undefined) {
	const transitionProperty =
		!!element &&
		getComputedStyle(element).getPropertyValue("transition-duration");

	return transitionProperty ? parseFloat(transitionProperty) * 1000 : 300;
}

export function getDestinationSlideIndex(
	direction: "forward" | "backward",
	currentIndex: number,
	slidesLength: number,
): number {
	if (direction === "forward" && currentIndex === slidesLength - 1) return 0;
	else if (direction === "forward") return currentIndex + 1;

	if (direction === "backward" && currentIndex === 0) return slidesLength - 1;
	else if (direction === "backward") return currentIndex - 1;

	return 0;
}
