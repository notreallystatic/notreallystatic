import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/navbar";
import Script from "next/script";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
	title: "notreallystatic",
	description: "Portoflio website of Sachin Kumar",
};

const montserrat = Montserrat({
	weight: "variable",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					src="https://kit.fontawesome.com/54803697a8.js"
					crossOrigin="anonymous"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
			</head>
			<body>
				<main className={montserrat.className}>
					<Navbar />
					<div className="w-11/12 md:w-10/12 m-auto mt-20">{children}</div>
				</main>
			</body>
		</html>
	);
}
