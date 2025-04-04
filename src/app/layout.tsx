import type { Metadata } from "next";
import Script from "next/script";
import { SiteContextProvider } from "@/site-context";
import Main from "@/components/layout/main";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
	title: "Kyle Jorve | Design, Development, Illustration, and Writing",
	description:
		"Kyle Jorve is a developer, designer, illustrator, and writer. He is also a supreme nerd.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				<SiteContextProvider>
					<Main>{children}</Main>
				</SiteContextProvider>
				<Footer />
				<Script src="https://kit.fontawesome.com/867df664d5.js" />
			</body>
		</html>
	);
}
