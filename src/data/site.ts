// Site-wide facts. Anything marked TODO is draft copy waiting on a real value.

export const site = {
	name: "Clonecademy",
	url: "https://clonecademy.com",
	description:
		"The coding bootcamp for founders. In 16 weeks, learn frontend, backend, cloud or AI engineering by shipping an Amazon or Instagram clone with a team, then launch your own product.",
	// TODO: confirm the legal entity name.
	company: "Appiah & Co.",
	founder: "Karthik G. Appiah",
	// TODO: confirm the public inbox.
	email: "hello@clonecademy.com",
	// TODO: replace with the real profiles.
	socials: {
		github: "https://github.com/appiahco",
		linkedin: "https://www.linkedin.com/company/clonecademy",
		x: "https://x.com/clonecademy",
	},
	// The apply flow is a placeholder until the cohort backend exists.
	applyHref: "/apply",
} as const;

// TODO: set the real cohort number and dates.
export const nextCohort = {
	number: 5,
	starts: new Date("2027-01-11"),
	applicationsClose: new Date("2026-12-04"),
	seatsPerRole: 12,
};

export const cohort = {
	weeks: 16,
	hoursPerWeek: 12,
	liveSessionsPerWeek: 2,
	teamSize: 4,
};

export const nav = [
	{ href: "/how-it-works", label: "How it works" },
	{ href: "/curriculum", label: "Curriculum" },
	{ href: "/projects", label: "Projects" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/outcomes", label: "Outcomes" },
	{ href: "/blog", label: "Blog" },
];

export const footerNav = [
	{
		title: "Program",
		links: [
			{ href: "/how-it-works", label: "How it works" },
			{ href: "/curriculum", label: "Curriculum" },
			{ href: "/projects", label: "Projects" },
			{ href: "/pricing", label: "Pricing" },
			{ href: "/faq", label: "FAQ" },
		],
	},
	{
		title: "Clonecademy",
		links: [
			{ href: "/about", label: "About" },
			{ href: "/outcomes", label: "Outcomes" },
			{ href: "/blog", label: "Blog" },
			{ href: "/apply", label: "Apply" },
		],
	},
	{
		title: "Legal",
		links: [
			{ href: "/privacy", label: "Privacy" },
			{ href: "/terms", label: "Terms" },
		],
	},
];

export const formatDate = (date: Date) =>
	date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	});
