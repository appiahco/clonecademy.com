// TODO: review every answer, especially prices, dates and refund terms.

import { formatPrice, pricing } from "./pricing";
import { cohort, formatDate, nextCohort } from "./site";

export const faq = [
	{
		topic: "The program",
		items: [
			{
				question: "Do I need to know how to code?",
				answer:
					"No. Every role starts from zero in the foundations weeks. You do need to be comfortable learning something hard in public, with your team watching.",
			},
			{
				question: "Which role should I pick?",
				answer:
					"Pick the role you'd otherwise hire first. Most founders without a technical cofounder start with Frontend, because it lets them build and test ideas fastest. If you're unsure, book a call and we'll help you choose.",
			},
			{
				question: "Why clone a product instead of building my own idea?",
				answer:
					"A clone has a known answer. When your team gets stuck, you can open the real product and see how it behaves, so you spend your time learning engineering instead of debating product decisions. You build your own idea in weeks 13 to 15, once you know how.",
			},
			{
				question: "How much time does it take?",
				answer: `About ${cohort.hoursPerWeek} hours a week for ${cohort.weeks} weeks: two live sessions, sprint rituals with your team and build time you schedule yourself.`,
			},
			{
				question: "Can I take more than one role?",
				answer:
					"Yes, one role per cohort. The Full-stack founder pass covers all four roles across four cohorts at a discount. Taking two roles in the same cohort isn't possible, because each is a full seat on a team.",
			},
		],
	},
	{
		topic: "Teams",
		items: [
			{
				question: "How are teams formed?",
				answer:
					"By default we match you with one founder from each of the other roles, by time zone and the kind of company you're building. You can also enrol with your own cofounders as a team.",
			},
			{
				question: "What if a teammate drops out?",
				answer:
					"We keep a small bench of alumni and instructors who step into the role for the rest of the sprint, and we rebalance teams if someone leaves for good. Your project never stalls.",
			},
			{
				question: "Who owns what we build?",
				answer:
					"Your team owns the clone and your own product. Code you write for your startup in weeks 13 to 15 belongs to that startup.",
			},
		],
	},
	{
		topic: "Admissions and payment",
		items: [
			{
				question: "When does the next cohort start?",
				answer: `Cohort ${nextCohort.number} starts on ${formatDate(nextCohort.starts)}. Each role has ${nextCohort.seatsPerRole} seats.`,
			},
			{
				question: "How much does it cost?",
				answer: `${formatPrice(pricing.perRole.upfront)} per role paid upfront, or ${pricing.perRole.installments.count} monthly payments of ${formatPrice(pricing.perRole.installments.amount)}. Teams of four save ${pricing.teamDiscountPercent}% on every seat.`,
			},
			{
				question: "Can I get a refund?",
				answer: `Yes. If you withdraw within ${pricing.refundDays} days of the cohort starting, we refund everything except the ${formatPrice(pricing.deposit)} deposit.`,
			},
			{
				question: "Is it really remote?",
				answer:
					"Yes. Classes, sprints and demo day all happen online. Sessions are scheduled for the Americas and Europe; recordings cover everyone else.",
			},
		],
	},
];
