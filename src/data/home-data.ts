import { ImageDataType } from "@/types/global-types";
import { categories } from "@/data/gallery-data";
import { MenuTileType } from "@/types/hero-types";

export const heroImage: ImageDataType = {
	name: "home-hero-image",
	sources: [
		{
			url: "https://placehold.co/1920x1467",
			minScreenWidth: 1440,
			width: 1920,
			height: 1467,
		},
		{
			url: "https://placehold.co/1440x1100",
			minScreenWidth: 1024,
			width: 1440,
			height: 1100,
		},
		{
			url: "https://placehold.co/1024x1800",
			minScreenWidth: 640,
			width: 1024,
			height: 1800,
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
		url: `/projects?categories=${JSON.stringify([
			categories.design.name,
			categories.illustration.name,
		])}`,
		buttonText: menuTileButtonText,
		image: {
			name: "design-illustration-menu-tile-image",
			sources: [
				{
					url: "https://placehold.co/390x316",
					minScreenWidth: 768,
					width: 390,
					height: 316,
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
		url: `/projects?categories=${JSON.stringify([
			categories.development.name,
		])}`,
		buttonText: menuTileButtonText,
		image: {
			name: "development-menu-tile-image",
			sources: [
				{
					url: "https://placehold.co/390x316",
					minScreenWidth: 768,
					width: 390,
					height: 316,
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
		url: `/projects?categories=${JSON.stringify([
			categories.writing.name,
		])}`,
		buttonText: menuTileButtonText,
		image: {
			name: "writing-menu-tile-image",
			sources: [
				{
					url: "https://placehold.co/390x316",
					minScreenWidth: 768,
					width: 390,
					height: 316,
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
