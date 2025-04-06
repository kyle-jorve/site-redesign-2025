import { ImageDataType } from "@/types/global-types";
import { MenuTileType } from "@/types/hero-types";

export const heroImage: ImageDataType = {
	name: "home-hero-image",
	sources: [
		{
			url: "/images/fake-url.jpg",
			minScreenWidth: 640,
		},
	],
	mobileSource: "/images/fake-url.jpg",
	alt: "Photo of Kyle Jorve",
	width: 640,
	height: 640,
};
export const supertitle = "Designer, Developer, Illustrator, Writer";
export const title = "Kyle Jorve";
export const featuredLimit = 3;

const menuTileButtonText = "See Projects";
export const menuTiles: MenuTileType[] = [
	{
		name: "design-illustration",
		title: "Design + Illustration",
		url: `/projects?categories=[design,illustration]`,
		buttonText: menuTileButtonText,
		image: {
			name: "design-illustration-menu-tile-image",
			sources: [
				{
					url: "/images/fake-url.jpg",
					minScreenWidth: 640,
				},
			],
			mobileSource: "/images/fake-url.jpg",
			alt: `Image representing Kyle Jorve's design and illustration capabilities`,
			width: 640,
			height: 460,
		},
	},
	{
		name: "development",
		title: "Development",
		url: `/projects?categories=[development]`,
		buttonText: menuTileButtonText,
		image: {
			name: "development-menu-tile-image",
			sources: [
				{
					url: "/images/fake-url.jpg",
					minScreenWidth: 640,
				},
			],
			mobileSource: "/images/fake-url.jpg",
			alt: `Image representing Kyle Jorve's development capabilities`,
			width: 640,
			height: 460,
		},
	},
	{
		name: "writing",
		title: "Writing",
		url: `/projects?categories=[writing]`,
		buttonText: menuTileButtonText,
		image: {
			name: "writing-menu-tile-image",
			sources: [
				{
					url: "/images/fake-url.jpg",
					minScreenWidth: 640,
				},
			],
			mobileSource: "/images/fake-url.jpg",
			alt: `Image representing Kyle Jorve's writing capabilities`,
			width: 640,
			height: 460,
		},
	},
	{
		name: "all-projects",
		title: "All Projects",
		url: "/projects/",
		buttonText: menuTileButtonText,
		type: "long",
	},
];
