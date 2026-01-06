import "@/styles/base/_index.css";
import type { Metadata } from "next";
import Script from "next/script";
import { SiteContextProvider } from "@/context/site-context";
import { ProjectsContextProvider } from "@/context/projects-context";
import { bioImageBody } from "@/data/media-data";
import PreconnectResources from "@/components/layout/preconnect-resources";
import Main from "@/components/layout/main";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Lightbox from "@/components/global/lightbox";

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
					<ProjectsContextProvider>
						<PreconnectResources />
						<Header />
						<Main>{children}</Main>
						<Footer />
						<Lightbox />
					</ProjectsContextProvider>
				</SiteContextProvider>
				<Script src="https://kit.fontawesome.com/867df664d5.js" />
			</body>
		</html>
	);
}
