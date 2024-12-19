import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				"background-100": "var(--background-100)",
				"background-200": "var(--background-200)",
				"background-300": "var(--background-300)",
				"background-400": "var(--background-400)",
				"background-500": "var(--background-500)",
				"background-600": "var(--background-600)",
				"background-700": "var(--background-700)",
				"background-800": "var(--background-800)",
				foreground: "var(--foreground)",
				"foreground-100": "var(--foreground-100)",
				"foreground-200": "var(--foreground-200)",
				"foreground-300": "var(--foreground-300)",
				"foreground-400": "var(--foreground-400)",
				"foreground-500": "var(--foreground-500)",
				"foreground-600": "var(--foreground-600)",
				"foreground-700": "var(--foreground-700)",
				"foreground-800": "var(--foreground-800)",
			},
		},
	},
	plugins: [],
} satisfies Config;
