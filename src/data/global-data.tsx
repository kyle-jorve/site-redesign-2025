import { SocialMediaType, NavType, NavItemType } from "@/types/global-types";
import CustomLink from "@/components/global/custom-link";

export const pageNotFoundTitle = "Page Not Found";
export const pageNotFoundDescription = (
	<>
		I&apos;m not sure how you got here, but click{" "}
		<CustomLink to="/">here</CustomLink> to find safer ground.
	</>
);

export const errorPageTitle = "I am unwell 🥴";
export const errorPageDescription = (
	<>Something is wrong. Please return later when I&apos;m feeling better.</>
);

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
		Website designed and built by Kyle Jorve.
		<br />
		Photography by{" "}
		<CustomLink
			to="https://katherynmoranphotography.com/"
			target="_blank"
		>
			Katheryn Moran Photography
		</CustomLink>
		.
		<br />
		&copy; Copyright {new Date().getFullYear()} Kyle Jorve. All rights
		reserved.
	</>
);
