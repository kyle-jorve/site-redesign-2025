// ----- DATA TYPES ----- //

export type SiteContextType = {
	loadStatus: "idle" | "page-out" | "page-in";
	mainRef: React.RefObject<HTMLElement | null> | null;
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
	name: string;
	label: string;
	children: NavItemType[];
};

export type NavType = (NavItemType | NavItemParentType)[];

// ----- COMPONENT PROPS -----//

export type CustomLinkProps = {
	to: string;
	onClick?: React.MouseEventHandler;
} & React.PropsWithChildren &
	Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export type LogoProps = React.HTMLAttributes<HTMLAnchorElement>;

export type NavigationProps = React.HTMLAttributes<HTMLElement>;

export type NavItemProps = {
	url: string;
	onClick?: React.MouseEventHandler;
} & React.PropsWithChildren &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ParentNavItemProps = {
	id: string;
	label: string;
	childItems: NavItemType[];
} & React.HTMLAttributes<HTMLDivElement>;
