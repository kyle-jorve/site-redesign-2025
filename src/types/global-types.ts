export type ImageDataType = {
	name: string;
	sources: {
		url: string;
		minScreenWidth: number;
	}[];
	mobileSource: string;
	alt: string;
	width: number;
	height: number;
};

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
