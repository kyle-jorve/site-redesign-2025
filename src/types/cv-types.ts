import { ImageDataType } from "@/types/global-types";

export type BioType = {
	title: string;
	body: React.ReactElement;
	buttonText: React.ReactElement | string;
	image: ImageDataType;
};

export type ResumeItemType = {
	id: string;
	title: string;
	description: React.ReactElement;
	year?: number | string;
	startYear?: number | string;
	endYear?: number | string;
	company?: string;
};
