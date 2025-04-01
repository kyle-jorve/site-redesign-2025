import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Kyle Jorve | Design, Development, Illustration, and Writing',
	description:
		'Kyle Jorve is a developer, designer, illustrator, and writer. He is also a supreme nerd.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
