import { ImageDataType } from "@/types/global-types";
import { categories } from "@/data/gallery-data";
import { MenuTileType } from "@/types/hero-types";

export const heroImage: ImageDataType = {
	name: "home-hero-image",
	sources: [
		{
			url: "https://placehold.co/1440x1100",
			minScreenWidth: 1024,
		},
		{
			url: "https://placehold.co/1024x1800",
			minScreenWidth: 640,
		},
	],
	mobileSource: "https://placehold.co/640x1436",
	alt: "Photo of Kyle Jorve",
	width: 640,
	height: 1436,
};
export const supertitle = "Designer, Developer, Illustrator, Writer";
export const title = "Kyle Jorve";
export const featuredLimit = 3;

const menuTileButtonText = "See Projects";
export const menuTiles: MenuTileType[] = [
	{
		name: "design-illustration",
		title: "Design + Illustration",
		url: `/projects?categories=[${categories.design.name},${categories.illustration.name}]`,
		buttonText: menuTileButtonText,
		image: {
			name: "design-illustration-menu-tile-image",
			sources: [
				{
					url: "https://placehold.co/390x316",
					minScreenWidth: 768,
				},
			],
			mobileSource: "https://placehold.co/768x461",
			alt: `Image representing Kyle Jorve's design and illustration capabilities`,
			width: 768,
			height: 461,
		},
	},
	{
		name: "development",
		title: "Development",
		url: `/projects?categories=[${categories.development.name}]`,
		buttonText: menuTileButtonText,
		image: {
			name: "development-menu-tile-image",
			sources: [
				{
					url: "https://placehold.co/390x316",
					minScreenWidth: 768,
				},
			],
			mobileSource: "https://placehold.co/768x461",
			alt: `Image representing Kyle Jorve's development capabilities`,
			width: 768,
			height: 461,
		},
	},
	{
		name: "writing",
		title: "Writing",
		url: `/projects?categories=[${categories.writing.name}]`,
		buttonText: menuTileButtonText,
		image: {
			name: "writing-menu-tile-image",
			sources: [
				{
					url: "https://placehold.co/390x316",
					minScreenWidth: 768,
				},
			],
			mobileSource: "https://placehold.co/768x461",
			alt: `Image representing Kyle Jorve's writing capabilities`,
			width: 768,
			height: 461,
		},
	},
	{
		name: "all-projects",
		title: "All Projects",
		url: "/projects/",
		buttonText: "See All",
		type: "long",
	},
];
