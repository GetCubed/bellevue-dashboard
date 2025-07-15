import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Bellevue',
		default: 'Bellevue',
	},
	description: 'Bellevue Dashboard',
	metadataBase: new URL('https://bellevue-dashboard.vercel.app/'),
	//opengraph image
	openGraph: {
		title: 'Bellevue',
		description: 'Bellevue Dashboard',
		url: 'https://bellevue-dashboard.vercel.app/',
		siteName: 'Bellevue',
		type: 'website',
		images: [
			{
				url: '/opengraph-image.png',
				width: 1200,
				height: 630,
				alt: 'Bellevue Open Graph Image',
			},
		],
	},
};

export default function RootLayout ({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="en"
			className={inter.className}>
			<body className="bg-base0 font-sans text-text antialiased">{children}</body>
		</html>
	);
}
