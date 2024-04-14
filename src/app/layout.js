import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		default: 'Juan Pablo Canedo Portfolio',
	},
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={` ${inter.className}  bg-zinc-950 text-white`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}