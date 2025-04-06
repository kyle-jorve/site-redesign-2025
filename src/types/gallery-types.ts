import { ImageDataType } from "@/types/global-types";

export type CategoryType = {
	name: string;
	label: string;
	active?: boolean;
};

export type CategoriesType = CategoryType[];

export type FeatureType = {
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
	categories: CategoriesType;
	faved: boolean;
	thumbImage: ImageDataType;
};

export type ProjectType = ProjectTileType & {
	slideshow: ImageDataType[];
	summary?: string;
	problemText?: string;
	solutionText?: string;
	progressSteps?: FeatureType[];
	descriptionTitle?: string;
	descriptionBody?: React.ReactElement;
	imageGrid?: ImageDataType[];
};
