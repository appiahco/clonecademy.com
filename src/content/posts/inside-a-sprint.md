---
title: "Inside a sprint: shipping Amazon's checkout in two weeks"
description: What sprint two of an Amazon clone looks like from each of the four seats on a Clonecademy team.
pubDate: 2026-09-09
---

Sprint two of the Amazon clone has one goal: a buyer can pay a real seller with a real card, and the seller can see the order. Here's how that plays out across a team of four.

## Monday: planning

The team starts by agreeing on the API contract for checkout. What does the cart look like? What happens if stock runs out between adding to the cart and paying? This conversation takes longer than anyone expects, and it's the most valuable hour of the sprint.

## The backend seat

The backend engineer adds orders and payments to the schema, then builds the checkout endpoint in Hono. The hard part isn't calling Stripe, it's the webhook: a payment can succeed after the user has closed the tab, so the order has to be confirmed by Stripe, not by the browser.

## The frontend seat

While the endpoint is being built, the frontend engineer builds the checkout screens against a mocked API, then swaps in the real one mid-week. Loading, error and empty states get as much attention as the happy path.

## The cloud seat

The cloud engineer adds Stripe's webhook secret to the environment through Terraform, sets up a staging webhook endpoint and adds an alert for failed payments. Every merge now deploys a preview the whole team can click through.

## The AI/ML seat

AI/ML starts collecting the order data the recommendations model will train on in sprint three, and writes the first version of the evaluation set.

## Friday: demo

Each team demos a real payment on staging to the rest of the cohort. Something always breaks live. That's the point.
