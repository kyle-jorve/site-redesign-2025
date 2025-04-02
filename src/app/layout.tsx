import type { Metadata } from "next";
import Script from "next/script";
import { SiteContextProvider } from "@/context/global-context";
import Main from "@/components/layout/main";

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
		<SiteContextProvider>
			<html lang="en">
				<body>
					<Main>{children}</Main>
					<Script src="https://kit.fontawesome.com/867df664d5.js" />
				</body>
			</html>
		</SiteContextProvider>
	);
}
