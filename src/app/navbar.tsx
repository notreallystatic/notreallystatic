"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="w-full top-0 left-0 border-b-2  border-b-background-500 mb-5">
			<div className="container mx-auto flex justify-between items-center p-4">
				<div className="text-gray text-lg font-bold">
					<Link href="/">
						<button className="nav-btn">Home</button>
					</Link>
				</div>
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-gray focus:outline-none">
						{isOpen ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								></path>
							</svg>
						)}
					</button>
				</div>
				{!isOpen && (
					<div
						className={`md:flex space-x-6 ${
							isOpen ? "block" : "hidden"
						} md:block`}
					>
						<Link href="/about" className="nav-btn block md:inline-block">
							About me
						</Link>
						<Link href="/work" className="nav-btn block md:inline-block">
							Work
						</Link>
						<Link href="/blogs" className="nav-btn block md:inline-block">
							Blogs
						</Link>
						<Link href="/contact" className="nav-btn block md:inline-block">
							Get in touch!
						</Link>
					</div>
				)}
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="flex flex-col items-center bg-background space-y-4 py-4">
						<Link href="/about" className="nav-btn">
							About me
						</Link>
						<Link href="/work" className="nav-btn">
							My work timeline
						</Link>
						<Link href="/blogs" className="nav-btn">
							Blogs
						</Link>
						<Link href="/contact" className="nav-btn">
							Contact me
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
