export type HeadingType = 1 | 2 | 3 | 4 | 5 | 6;

export type ImageMetaType = {
	name: string;
	title: string;
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
