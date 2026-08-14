import './globals.css';
import {Mouse_Memoirs} from 'next/font/google';

const Mouse = Mouse_Memoirs({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
});

export const metadata = {
	title: 'Superklok Labs',
	description: 'Superklok Labs is a Winnipeg-based Canadian IT consulting firm specializing in Expert Cloud Engineering, Professional Music Production & Creative Studio Services.',
}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link 
				rel='stylesheet' 
				type='text/css' 
				charSet='UTF-8' 
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' /> 
				<link 
				rel='stylesheet' 
				type='text/css' 
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
			</head>
			<body className={Mouse.className}>{children}</body>
		</html>
	);
}