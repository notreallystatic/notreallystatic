import Link from "next/link";

const blogPosts = [
	{
		title: "Operating System",
		slug: "operating-system",
		description: "Some content about operating systems",
		tags: ["operating-system", "os"],
		image: "https://images.unsplash.com/photo-1622838320004-4b3b3b3b3b3b",
	},
];

export default function BlogsPage() {
	return (
		<div>
			<h1>Blogs</h1>
			<ul>
				{blogPosts.map((post) => (
					<li key={post.slug}>
						<Link href={`/blogs/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
