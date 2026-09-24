// PATH: /scripts/og-image.mjs
// Renders public/og.png, the default social share image. Run with
// `pnpm og` after changing the headline or brand colors.

import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";

const WIDTH = 1200;
const HEIGHT = 630;

const colors = {
	background: "#ffffff",
	foreground: "#0e1417",
	muted: "#5f7479",
	ink: "#0e7c73",
	inkSoft: "#d6ece9",
	inkSide: "#a9d6d0",
	grid: "#eef6f5",
	plate: "#f3fbfa",
};

// Static instances of the site's fonts, as TrueType for resvg. The
// instanced Bricolage file names its family after the axes it was cut at.
const fontCss = await fetch(
	"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@96,87.5,700&family=Instrument+Sans:wght@400;500",
	{ headers: { "User-Agent": "Mozilla/4.0" } },
).then((response) => response.text());
const fontUrls = [...fontCss.matchAll(/url\((https:[^)]+\.ttf)\)/g)].map(
	(match) => match[1],
);
// resvg loads fonts from disk, so park them in a temp directory.
const fontDir = await mkdtemp(join(tmpdir(), "og-fonts-"));
const fontFiles = await Promise.all(
	fontUrls.map(async (url, index) => {
		const file = join(fontDir, `${index}.ttf`);
		await writeFile(file, Buffer.from(await (await fetch(url)).arrayBuffer()));
		return file;
	}),
);

const grid = [];
for (let x = 0; x <= WIDTH; x += 30) {
	grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${HEIGHT}" />`);
}
for (let y = 0; y <= HEIGHT; y += 30) {
	grid.push(`<line x1="0" y1="${y}" x2="${WIDTH}" y2="${y}" />`);
}

// The same exploded plates as the site's teardown drawing.
const cx = 930;
const halfW = 170;
const halfH = 85;
const thickness = 8;
const gap = 80;
const top = 150;
const plates = [4, 3, 2, 1, 0].map((index) => {
	const cy = top + index * gap;
	const k = halfW / 200;
	return `
		<polygon points="${cx - halfW},${cy} ${cx},${cy + halfH} ${cx},${cy + halfH + thickness} ${cx - halfW},${cy + thickness}" fill="${colors.inkSoft}" />
		<polygon points="${cx},${cy + halfH} ${cx + halfW},${cy} ${cx + halfW},${cy + thickness} ${cx},${cy + halfH + thickness}" fill="${colors.inkSide}" />
		<g transform="matrix(${k} ${k / 2} ${-k} ${k / 2} ${cx} ${cy - halfH})">
			<rect width="200" height="200" fill="${colors.plate}" />
			<rect x="18" y="18" width="${70 + index * 12}" height="80" rx="6" fill="none" />
			<rect x="18" y="116" width="164" height="22" rx="6" fill="none" />
			<rect x="${110 + index * 6}" y="18" width="${72 - index * 6}" height="80" rx="6" fill="none" />
			<rect x="18" y="154" width="${90 - index * 10}" height="28" rx="6" fill="none" />
		</g>
		<polygon points="${cx},${cy - halfH} ${cx + halfW},${cy} ${cx},${cy + halfH} ${cx - halfW},${cy}" fill="none" />`;
});

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
	<rect width="100%" height="100%" fill="${colors.background}" />
	<g stroke="${colors.grid}" stroke-width="1">${grid.join("")}</g>
	<g stroke="${colors.ink}" stroke-width="2" stroke-linejoin="round">${plates.join("")}</g>

	<g transform="translate(72 72)">
		<rect x="2" y="2" width="28" height="28" rx="5" fill="none" stroke="${colors.foreground}" stroke-width="4" />
		<rect x="14" y="14" width="28" height="28" rx="5" fill="none" stroke="${colors.ink}" stroke-width="4" stroke-dasharray="6 4.4" />
		<text x="58" y="32" font-family="Bricolage Grotesque 96pt SemiCondensed" font-weight="700" font-size="36" letter-spacing="-1" fill="${colors.foreground}">clonecademy</text>
	</g>

	<g font-family="Bricolage Grotesque 96pt SemiCondensed" font-weight="700" font-size="80" letter-spacing="-3" fill="${colors.foreground}">
		<text x="68" y="262" fill="${colors.ink}">Stop outsourcing</text>
		<text x="68" y="342">your product.</text>
		<text x="68" y="422"><tspan fill="${colors.ink}">Build it</tspan> by yourself.</text>
	</g>
	<text x="72" y="540" font-family="Instrument Sans" font-weight="400" font-size="30" fill="${colors.muted}">A 16-week remote cohort for founders</text>
</svg>`;

const png = new Resvg(svg, {
	font: {
		fontFiles,
		loadSystemFonts: false,
		defaultFontFamily: "Instrument Sans",
	},
	fitTo: { mode: "width", value: WIDTH },
})
	.render()
	.asPng();

await writeFile(new URL("../public/og.png", import.meta.url), png);
console.log(`Wrote public/og.png (${Math.round(png.length / 1024)} KB)`);
