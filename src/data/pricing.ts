// TODO: every price here is a draft. Replace with real prices before launch.

export const pricing = {
	currency: "USD",
	perRole: {
		upfront: 2400,
		installments: { count: 4, amount: 650 },
	},
	fullStack: {
		cohorts: 4,
		upfront: 7900,
		installments: { count: 12, amount: 690 },
	},
	teamDiscountPercent: 15,
	deposit: 200,
	refundDays: 14,
};

export const included = [
	"16 weeks of live classes in your role",
	"A team of four and a real product to clone",
	"Code review on every pull request",
	"Office hours four times a week",
	"AWS, Stripe and AI credits for your team",
	"A place at demo day",
	"Lifetime access to recordings and the alumni community",
];

export const formatPrice = (amount: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: pricing.currency,
		maximumFractionDigits: 0,
	}).format(amount);
