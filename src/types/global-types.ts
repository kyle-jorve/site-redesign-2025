export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ImageMetaType = {
	name: string;
	pathKey: string;
	alt: string;
	isAnimated?: boolean;
	verticalOrientation?: "top" | "center" | "bottom";
};

export type ImageDataType = {
	sources: {
		minScreenWidth: string;
		imageWidth: number;
		imageHeight?: number;
	}[];
	mobileSource: {
		imageWidth: number;
		imageHeight?: number;
	};
} & ImageMetaType;

export type SocialMediaType = {
	url: string;
	type: "standard" | "commerce";
	icon?: React.ReactElement;
	label?: string;
};

export type NavItemType = {
	name: string;
	label: string;
	url: string;
};

export type NavItemParentType = {
	name: string;
	label: string;
	children: NavItemType[];
};

export type NavType = (NavItemType | NavItemParentType)[];
