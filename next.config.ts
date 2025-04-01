import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "kylejorve.com",
			},
		],
	},
};

export default nextConfig;
