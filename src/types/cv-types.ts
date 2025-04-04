import { ImageDataType } from "@/types/global-types";

export type BioType = {
	title: string;
	body: React.ReactElement;
	buttonText: React.ReactElement | string;
	image: ImageDataType;
};
