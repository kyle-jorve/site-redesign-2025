import { ImageDataType } from "@/types/global-types";

export type CategoryType = {
	name: string;
	label: string;
	primary?: boolean;
	active?: boolean;
	hidden?: boolean;
};

export type CategoriesType = {
	[index: string]: CategoryType;
};

export type FeatureType = {
	name: string;
	title: string;
	description: string;
	image: ImageDataType;
	url?: string;
	buttonText?: string;
	alignment?: "image-left" | "image-right";
	number?: string;
	category?: CategoryType;
	supertitle?: string;
};

export type ProjectTileType = {
	name: string;
	title: string;
	categories: CategoryType[];
	thumbImage: {
		square: ImageDataType;
		long: ImageDataType;
		small: ImageDataType;
		feature: ImageDataType;
	};
	featured?: boolean;
};

export type ProjectType = ProjectTileType & {
	slideshow: ImageDataType[];
	summary: string;
	problemText?: string;
	solutionText?: string;
	link?: {
		url: string;
		text: string;
	};
	progressSteps?: FeatureType[];
	descriptionTitle?: string;
	descriptionBody?: React.ReactElement;
	imageGrid?: ImageDataType[];
};
