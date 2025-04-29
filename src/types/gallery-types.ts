import { ImageMetaType } from "@/types/global-types";

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
	description: React.ReactElement;
	image: ImageMetaType | ImageMetaType[];
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
	thumbImage: ImageMetaType;
	featured?: boolean;
};

export type ProjectType = ProjectTileType & {
	slideshow: ImageMetaType[];
	summary: string;
	problemText?: string;
	solutionText?: string;
	overviewText?: React.ReactElement;
	link?: {
		url: string;
		text: string;
	};
	features?: FeatureType[];
	descriptionSupertitle?: string;
	descriptionTitle?: string;
	descriptionBody?: React.ReactElement;
	imageGrid?: ImageMetaType[];
};
