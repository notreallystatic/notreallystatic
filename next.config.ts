import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		domains: ["images.unsplash.com"],
		unoptimized: true,
	},
	basePath: isProd ? "/portfolio" : "",
	assetPrefix: isProd ? "/portfolio/" : "",
	trailingSlash: true,
	output: "export",
	reactStrictMode: true,
	publicRuntimeConfig: {
		basePath: isProd ? "/portfolio" : "",
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
