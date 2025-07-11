import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Bellevue',
		default: 'Bellevue',
	},
	description: 'The official Next.js Learn Dashboard built with App Router.',
	metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout ({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body className="bg-base0 font-sans text-text antialiased">{children}</body>
		</html>
	);
}
