import type { Metadata } from "next";
import Script from "next/script";
import { SiteContextProvider } from "@/utils/site-context";
import { bioImageBody } from "@/data/media-data";
import PreconnectResources from "@/components/layout/preconnect-resources";
import Main from "@/components/layout/main";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "@/styles/base/normalize.css";
import "@/styles/base/theme.css";
import "@/styles/base/typography.css";
import "@/styles/base/global.css";
import "@/styles/base/buttons.css";

const defaultTitle =
	"Kyle Jorve | Design, Development, Illustration, and Writing";
const defaultDescription =
	"Kyle Jorve is a developer, designer, illustrator, writer, and supreme nerd.";

export const metadata: Metadata = {
	metadataBase: new URL("https://kylejorve.com"),
	title: {
		template:
			"%s | Kyle Jorve | Design, Development, Illustration, and Writing",
		default: defaultTitle,
	},
	description: defaultDescription,
	creator: "Kyle Jorve",
	openGraph: {
		title: defaultTitle,
		description: defaultDescription,
		url: "https://kylejorve.com",
		siteName: defaultTitle,
		images: [
			{
				url: `/images/${bioImageBody.pathKey}/${bioImageBody.pathKey}-kyle-jorve-640.jpg`,
				width: 640,
				height: 960,
			},
		],
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: "/icon.png",
	},
	other: {
		robots: "noai, noimageai",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SiteContextProvider>
					<PreconnectResources />
					<Header />
					<Main>{children}</Main>
					<Footer />
				</SiteContextProvider>
				<Script src="https://kit.fontawesome.com/867df664d5.js" />
			</body>
		</html>
	);
}
