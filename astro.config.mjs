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
			// The display type uses the width and optical size axes too.
			options: {
				experimental: {
					variableAxis: { opsz: [["12", "96"]], wdth: [["75", "100"]] },
				},
			},
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Instrument Sans",
			cssVariable: "--font-instrument",
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
