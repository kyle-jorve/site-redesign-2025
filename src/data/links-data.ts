import { socialMedia } from "@/data/global-data";
import { SocialMediaObjectType } from "@/types/global-types";

export const standardLinks: SocialMediaObjectType[] = [
	{
		name: "website",
		url: "/",
		type: "standard",
		label: "Website",
	},
	{
		name: "instagram",
		url: socialMedia.instagram.url,
		type: "standard",
		label: "Instagram",
	},
	{
		name: "bluesky",
		url: socialMedia.bluesky.url,
		type: "standard",
		label: "Bluesky",
	},
	{
		name: "linkedin",
		url: socialMedia.linkedin.url,
		type: "standard",
		label: "LinkedIn",
	},
	{
		name: "youtube",
		url: socialMedia.youtube.url,
		type: "standard",
		label: "YouTube",
	},
	{
		name: "email",
		url: socialMedia.email.url,
		type: "standard",
		label: "Email",
	},
];

export const commerceLinks: SocialMediaObjectType[] = [
	{
		name: "gumroad",
		url: socialMedia.gumroad.url,
		type: "commerce",
		label: "Gumroad",
	},
];
