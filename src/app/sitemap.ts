import { MetadataRoute } from "next";
import { internalNavItems } from "@/data/global-data";
import { projectsSitemapData } from "@/data/gallery-data";

export default function Sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://kylejorve.com";

	return [
		...internalNavItems.map((item) => ({
			url: `${baseUrl}${item.url}`,
			lastModified: new Date(),
		})),
		...projectsSitemapData.map((item) => ({
			url: `${baseUrl}/projects/${item.name}`,
			lastModified: new Date(),
			images: [
				`${baseUrl}/images/${item.imageKey}/${item.imageKey}-kyle-jorve-640.jpg`,
			],
		})),
	];
}
