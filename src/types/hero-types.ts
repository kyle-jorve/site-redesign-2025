import { ImageMetaType } from "@/types/global-types";

export type MenuTileType = {
	name: string;
	title: string;
	url: string;
	buttonText?: string;
	image?: ImageMetaType;
	type?: "square" | "long";
};
