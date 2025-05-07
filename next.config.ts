import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "kylejorve.com",
			},
		],
	},
	experimental: {
		cssChunking: "strict",
	},
};

export default nextConfig;
