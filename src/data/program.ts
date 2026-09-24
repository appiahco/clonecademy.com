// How a cohort runs. Weeks must add up to cohort.weeks in site.ts.

export const phases = [
	{
		weeks: [1, 3],
		title: "Foundations",
		summary:
			"Each role learns its stack separately, in small live classes with its own instructor.",
	},
	{
		weeks: [4, 12],
		title: "Clone the product",
		summary:
			"Your team of four builds Amazon or Instagram in two-week sprints, with code review from engineers.",
	},
	{
		weeks: [13, 15],
		title: "Build your own",
		summary:
			"The same team, stack and habits, pointed at one teammate's startup idea.",
	},
	{
		weeks: [16, 16],
		title: "Demo day",
		summary:
			"Every team demos both products to alumni, founders and investors.",
	},
] as const;

// TODO: confirm session days and times.
export const week = [
	{
		title: "Two live sessions",
		detail:
			"Tuesday and Thursday evenings, 90 minutes each, in your role's class. Recorded for anyone in a different time zone.",
	},
	{
		title: "Sprint rituals",
		detail:
			"A Monday planning call and a Friday demo with your team, run the way a startup engineering team runs them.",
	},
	{
		title: "Code review",
		detail:
			"Every pull request is reviewed by an engineer within one working day, plus peer review from your team.",
	},
	{
		title: "Office hours",
		detail:
			"Drop-in help four times a week, and a shared chat where instructors answer questions every day.",
	},
];

export const teamOptions = [
	{
		title: "Get matched",
		detail:
			"Enrol in one role and we'll place you on a team with one founder from each of the other three roles, matched by time zone and the kind of company you want to build.",
	},
	{
		title: "Bring your team",
		detail:
			"Enrol with your cofounders, one per role, and learn together as a team. Teams of four get a discount on every seat.",
	},
];
