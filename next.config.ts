import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		domains: ["images.unsplash.com"],
	},
	basePath: isProd ? "/portfolio" : "",
	assetPrefix: isProd ? "/portfolio/" : "",
	trailingSlash: true,
	output: "export",
	reactStrictMode: true,
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
