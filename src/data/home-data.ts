import { ImageDataType } from "@/types/global-types";
import { categories } from "@/data/gallery-data";
import { MenuTileType } from "@/types/hero-types";

export const heroImage: ImageDataType = {
	name: "home-hero-image",
	pathKey: "home-hero",
	sources: [
		{
			minScreenWidth: 1440,
			imageWidth: 1920,
		},
		{
			minScreenWidth: 1024,
			imageWidth: 1440,
		},
		{
			minScreenWidth: 640,
			imageWidth: 1024,
		},
	],
	mobileSource: {
		imageWidth: 640,
	},
	alt: "Photo of Kyle Jorve wearing headphones, smiling, and looking toward the upper-right corner",
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
			pathKey: "pendrakes-chamber",
			sources: [
				{
					minScreenWidth: 768,
					imageWidth: 480,
					imageHeight: 389,
				},
			],
			mobileSource: {
				imageWidth: 768,
				imageHeight: 461,
			},
			alt: `A dioramic illustration of a castle bedchamber in isometric perspective`,
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
			pathKey: "theater-toolkit-design-phase",
			sources: [
				{
					minScreenWidth: 768,
					imageWidth: 480,
					imageHeight: 389,
				},
			],
			mobileSource: {
				imageWidth: 768,
				imageHeight: 461,
			},
			alt: `A dioramic, stylized illustration of a theater owner working with a developer to build the theater owner's website, in isometric perspective`,
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
			pathKey: "the-herbalist",
			sources: [
				{
					minScreenWidth: 768,
					imageWidth: 480,
					imageHeight: 389,
				},
			],
			mobileSource: {
				imageWidth: 768,
				imageHeight: 461,
			},
			alt: `An original character, Belryanne, stands in her greenhouse garden, leaning toward a pot of flowers to inspect them`,
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
