import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/navbar";
import Footer from "@/components/footer";
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
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
				/>
			</head>
			<body>
				<main className={montserrat.className + " min-h-screen flex flex-col"}>
					<Navbar />
					<div className="w-11/12 md:w-10/12 m-auto mt-20 flex-grow">
						{children}
					</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
