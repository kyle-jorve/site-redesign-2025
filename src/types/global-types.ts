export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ImageMetaType = {
	name: string;
	pathKey: string;
	alt: string;
	horizontalOrientation?: string;
	verticalOrientation?: string;
};

export type ImageSourceType = {
	imageWidth: number;
	imageHeight?: number;
	pathKey?: string;
	horizontalOrientation?: string;
	verticalOrientation?: string;
};

export type ImageDataType = {
	mobileSource: ImageSourceType;
	sources?: (ImageSourceType & {
		minScreenWidth: string;
	})[];
} & ImageMetaType;

export type SocialMediaType = {
	url: string;
	type: "standard" | "commerce";
	label: string;
	icon?: React.ReactElement;
};

export type SocialMediaObjectType = SocialMediaType & {
	name: string;
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
