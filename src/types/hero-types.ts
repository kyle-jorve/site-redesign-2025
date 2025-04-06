import { ImageDataType } from "@/types/global-types";

export type MenuTileType = {
	name: string;
	title: string;
	url: string;
	buttonText?: string;
	image?: ImageDataType;
	type?: "square" | "long";
};
