import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { iconNames } from "./lib/icons";

// A role is one seat on a cohort team. Every role works on the same product.
const roles = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/roles" }),
	schema: z.object({
		title: z.string(),
		short: z.string(),
		icon: z.enum(iconNames),
		order: z.number(),
		summary: z.string(),
		owns: z.string(),
		stack: z.array(z.string()),
		foundations: z.array(z.object({ title: z.string(), detail: z.string() })),
		outcomes: z.array(z.string()),
	}),
});

// A product is what a cohort team clones. Its layers drive the teardown
// drawing, and each layer belongs to the role that builds it.
const products = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
	schema: z.object({
		name: z.string(),
		kind: z.string(),
		icon: z.enum(iconNames),
		order: z.number(),
		summary: z.string(),
		layers: z.array(
			z.object({
				name: z.string(),
				role: reference("roles"),
				art: z.enum(["storefront", "feed", "api", "data", "infra", "model"]),
				detail: z.string(),
			}),
		),
		deliverables: z.array(
			z.object({ role: reference("roles"), items: z.array(z.string()) }),
		),
		sprints: z.array(z.object({ weeks: z.string(), goal: z.string() })),
	}),
});

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string().default("Karthik G. Appiah"),
		draft: z.boolean().default(false),
	}),
});

export const collections = { roles, products, posts };
