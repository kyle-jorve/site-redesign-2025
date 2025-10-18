import { ButtonLinkProps } from "@/components/global/button-link";

export function printClassNames(classes: string[]) {
	const cleanClasses = classes
		.filter((c) => c)
		.map((cl) => cl.trim().split(" "))
		.flat();

	return cleanClasses.join(" ");
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
