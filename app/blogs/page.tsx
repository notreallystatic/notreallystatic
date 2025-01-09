"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const blogPosts = [
	{
		title: "Operating System",
		slug: "operating-system",
		description: "A detailed overview of operating systems",
		tags: ["operating-system", "os"],
		image:
			"https://images.unsplash.com/photo-1536395268859-7cf1233a5d55?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
	},
];

export default function BlogsPage() {
	const router = useRouter();

	const handleRedirect = (slug: string) => {
		router.push(`/blogs/${slug}`);
	};
	return (
		<div className="my-2 p-2 md:p-4">
			<h1 className="text-6xl pt-2 pb-4">Blogs</h1>
			<div className="grid grid-cols-12 gap-3">
				{/* Make a card for each of the blogs */}
				{blogPosts.map((post, index) => (
					<div
						className="col-span-12 md:col-span-6 lg:col-span-3 hover:cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform"
						key={index}
						onClick={() => handleRedirect(post.slug)}
					>
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<Image
								src={post.image}
								alt={post.title}
								className="w-full h-48 object-cover object-center"
								height={48}
								width={48}
							/>
							<div className="p-4">
								<h2 className="text-2xl font-bold">{post.title}</h2>
								<p className="text-gray-500">{post.description}</p>
								<div className="mt-4">
									{post.tags.map((tag, idx) => (
										<span
											className="text-xs bg-gray-200 px-2 py-1 rounded-full mr-2"
											key={idx}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
