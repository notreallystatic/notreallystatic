"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="w-full top-0 left-0 p-4 pb-0 fixed backdrop-blur-sm">
			<div className="container mx-auto flex justify-between items-center border-b-2  border-b-background-500 ">
				<Link href="/">
					<button className="nav-btn">Home</button>
				</Link>
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-gray focus:outline-none">
						{isOpen ? (
							<svg
								width="24px"
								height="24px"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="#000000"
							>
								<path
									d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						) : (
							<svg
								width="24px"
								height="24px"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="#000000"
							>
								<path
									d="M3 5H21"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M3 12H21"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M3 19H21"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
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
						<Link href="/#work" className="nav-btn block md:inline-block">
							Work
						</Link>
						<Link href="/blogs" className="nav-btn block md:inline-block">
							Blogs
						</Link>
						<Link href="/#contact" className="nav-btn block md:inline-block">
							Get in touch!
						</Link>
					</div>
				)}
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="flex flex-col items-center bg-background space-y-4 py-4">
						<Link href="/#work" className="nav-btn">
							Work
						</Link>
						<Link href="/blogs" className="nav-btn">
							Blogs
						</Link>
						<Link href="/#contact" className="nav-btn">
							Get in touch!
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
