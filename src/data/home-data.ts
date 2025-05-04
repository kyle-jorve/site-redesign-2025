import { ImageMetaType } from "@/types/global-types";
import { categories } from "@/data/gallery-data";
import {
	homeHeroImageDesktop,
	homeHeroImageMobile,
	pendrakesChamber,
	herbalist,
	theaterToolkitDesignPhase,
} from "@/data/images";
import { MenuTileType } from "@/types/hero-types";

export const heroImageDesktop: ImageMetaType = homeHeroImageDesktop;
export const heroImageMobile: ImageMetaType = homeHeroImageMobile;
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
		image: pendrakesChamber,
	},
	{
		name: "development",
		title: "Development",
		url: `/projects?categories=${JSON.stringify([
			categories.development.name,
		])}`,
		buttonText: menuTileButtonText,
		image: theaterToolkitDesignPhase,
	},
	{
		name: "writing",
		title: "Writing",
		url: `/projects?categories=${JSON.stringify([
			categories.writing.name,
		])}`,
		buttonText: menuTileButtonText,
		image: herbalist,
	},
	{
		name: "all-projects",
		title: "All Projects",
		url: "/projects/",
		buttonText: "See All",
		type: "long",
	},
];
