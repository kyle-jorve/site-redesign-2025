import { ImageDataType } from "@/types/global-types";
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

export function mergeImageData(
	image: ImageDataType,
	mobileImage: ImageDataType | undefined = undefined,
) {
	if (!mobileImage) return image;
	if (!image.sources?.length) return mobileImage;

	const returnObj = { ...mobileImage };

	if (returnObj.sources) {
		returnObj.sources = returnObj.sources.map((src) => ({
			...src,
			pathKey: mobileImage.pathKey,
		}));
		returnObj.mobileSource.pathKey = mobileImage.pathKey;
	}

	for (const source of image.sources) {
		if (
			returnObj.sources?.some(
				(src) => src.minScreenWidth === source.minScreenWidth,
			)
		)
			continue;

		if (!returnObj.sources?.length) {
			returnObj.sources = [source];
			continue;
		}

		returnObj.sources.push(source);
	}

	returnObj.sources?.sort((a, b) => {
		const widthA = parseInt(a.minScreenWidth);
		const widthB = parseInt(b.minScreenWidth);

		if (widthA < widthB) return 1;
		if (widthA > widthB) return -1;
		return 0;
	});

	return returnObj;
}
