// DOCS: https://astro.build/config

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://clonecademy.com",
	integrations: [sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Bricolage Grotesque",
			cssVariable: "--font-bricolage",
			weights: ["400 800"],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Geist",
			cssVariable: "--font-geist",
			weights: ["400 700"],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Geist Mono",
			cssVariable: "--font-geist-mono",
			weights: ["400 600"],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["ui-monospace", "monospace"],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
