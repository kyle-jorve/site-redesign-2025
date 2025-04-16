import { SocialMediaType, NavType, NavItemType } from "@/types/global-types";
import GumroadIcon from "@/components/icons/gumroad-icon";

export const socialMedia: {
	[index: string]: SocialMediaType;
} = {
	instagram: {
		url: "https://www.instagram.com/kylejorve/",
		type: "standard",
		label: "Instagram",
	},
	bluesky: {
		url: "https://bsky.app/profile/kylejorve.bsky.social",
		type: "standard",
		label: "Bluesky",
	},
	linkedin: {
		url: "https://www.linkedin.com/in/kyle-jorve/",
		type: "standard",
		label: "LinkedIn",
	},
	youtube: {
		url: "https://www.youtube.com/@KyleJorve/videos",
		type: "standard",
		label: "YouTube",
	},
	email: {
		url: "mailto:kyle.jorve.art@gmail.com?subject=Hello From Your Website",
		type: "standard",
		label: "Email",
	},
	gumroad: {
		url: "https://gumroad.com/kylejorve",
		type: "commerce",
		label: "Shop",
		icon: <GumroadIcon />,
	},
} as const;

export const navItems: NavType = [
	{
		name: "projects",
		label: "Projects",
		url: "/projects",
	},
	{
		name: "cv",
		label: "CV",
		url: "/cv",
	},
	{
		name: "social",
		label: "Social",
		children: Object.entries(socialMedia).map(([key, value]) => {
			return {
				name: key,
				label: value.label,
				url: value.url,
			} as NavItemType;
		}),
	},
] as const;

export const copyrightText = (
	<>
		&copy; Copyright {new Date().getFullYear()} Kyle Jorve. All rights
		reserved.
		<br />
		Website designed and built by Kyle Jorve.
	</>
);
