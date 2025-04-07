import { ImageDataType } from "@/types/global-types";

export type BioType = {
	title: string;
	body: React.ReactElement;
	image: ImageDataType;
	url?: string;
	buttonText?: React.ReactElement | string;
};

export type ResumeItemType = {
	name: string;
	title: string;
	description: React.ReactElement;
	year?: number | string;
	company?: string;
};

export type ResumeSectionType = {
	name: string;
	title: string;
	items: ResumeItemType[];
};

export type ResumeType = {
	title: string | React.ReactElement;
	sections: ResumeSectionType[];
	url?: string;
	buttonText?: string;
};
