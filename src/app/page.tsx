import Link from "next/link";
import Navbar from "./navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="px-4">
				<div className="grid grid-cols-12 bg-white m-5 gap-5 p-5">
					<div className="bg-background-100 col-span-3 m-2 p-4 text-foreground-800">
						bg-100
					</div>
					<div className="bg-background-200 col-span-3 m-2 p-4 text-foreground-700">
						bg-200
					</div>
					<div className="bg-background-300 col-span-3 m-2 p-4 text-foreground-600">
						bg-300
					</div>
					<div className="bg-background-400 col-span-3 m-2 p-4 text-foreground-500">
						bg-400
					</div>
					<div className="bg-background-500 col-span-3 m-2 p-4 text-foreground-400">
						bg-500
					</div>
					<div className="bg-background-600 col-span-3 m-2 p-4 text-foreground-300">
						bg-600
					</div>
					<div className="bg-background-700 col-span-3 m-2 p-4 text-foreground-200">
						bg-700
					</div>
					<div className="bg-background-800 col-span-3 m-2 p-4 text-foreground-100">
						bg-800
					</div>
					<div className="bg-foreground-100 col-span-3 m-2 p-4 text-background-100">
						fg-100
					</div>
					<div className="bg-foreground-200 col-span-3 m-2 p-4 text-background-700">
						fg-200
					</div>
					<div className="bg-foreground-300 col-span-3 m-2 p-4 text-background-600">
						fg-300
					</div>
					<div className="bg-foreground-400 col-span-3 m-2 p-4 text-background-500">
						fg-400
					</div>
					<div className="bg-foreground-500 col-span-3 m-2 p-4 text-background-400">
						fg-500
					</div>
					<div className="bg-foreground-600 col-span-3 m-2 p-4 text-background-300">
						fg-600
					</div>
					<div className="bg-foreground-700 col-span-3 m-2 p-4 text-background-200">
						fg-700
					</div>
					<div className="bg-foreground-800 col-span-3 m-2 p-4 text-background-100">
						fg-800
					</div>
				</div>
				<Link href="/blogs">Blogs</Link>
				<br></br>
				<Link href="/about">About us</Link>
			</div>
		</>
	);
}
