export type SiteContextType = {
	loadStatus: "idle" | "page-out" | "page-in";

	setLoadStatus: Function;
};

export type ImageDataType = {
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
	label: string;
	name: string;
	childItems: NavItemType[];
};

export type NavType = (NavItemType | NavItemParentType)[];
