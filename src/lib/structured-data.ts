// schema.org objects for JSON-LD. Pages pass these to the layout.
import type { CollectionEntry } from "astro:content";
import { faq } from "../data/faq";
import { pricing } from "../data/pricing";
import { cohort, nextCohort, site } from "../data/site";

export const organization = {
	"@type": "EducationalOrganization",
	"@id": `${site.url}/#organization`,
	name: site.name,
	url: site.url,
	logo: `${site.url}/favicon.svg`,
	email: site.email,
	founder: { "@type": "Person", name: site.founder },
	sameAs: Object.values(site.socials),
};

export const homeGraph = {
	"@context": "https://schema.org",
	"@graph": [
		organization,
		{
			"@type": "WebSite",
			"@id": `${site.url}/#website`,
			url: site.url,
			name: site.name,
			publisher: { "@id": organization["@id"] },
		},
	],
};

export const course = (role: CollectionEntry<"roles">) => ({
	"@context": "https://schema.org",
	"@type": "Course",
	name: `${role.data.title} for founders`,
	description: role.data.summary,
	url: `${site.url}/curriculum/${role.id}`,
	provider: { "@id": organization["@id"], ...organization },
	offers: {
		"@type": "Offer",
		category: "Paid",
		price: pricing.perRole.upfront,
		priceCurrency: pricing.currency,
		url: `${site.url}/pricing`,
	},
	hasCourseInstance: {
		"@type": "CourseInstance",
		courseMode: "Online",
		startDate: nextCohort.starts.toISOString().slice(0, 10),
		// Total study time across the cohort.
		courseWorkload: `PT${cohort.hoursPerWeek * cohort.weeks}H`,
		courseSchedule: {
			"@type": "Schedule",
			repeatFrequency: "P1W",
			repeatCount: cohort.weeks,
		},
	},
});

export const faqPage = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faq.flatMap((group) =>
		group.items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: { "@type": "Answer", text: item.answer },
		})),
	),
};

export const blogPosting = (post: CollectionEntry<"posts">) => ({
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: post.data.title,
	description: post.data.description,
	datePublished: post.data.pubDate.toISOString(),
	author: { "@type": "Person", name: post.data.author },
	publisher: { "@id": organization["@id"], ...organization },
	url: `${site.url}/blog/${post.id}`,
});
