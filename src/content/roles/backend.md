---
title: Backend engineer
short: Backend
icon: brackets-curly
order: 2
summary: Design the database, build the REST API with Hono inside Next.js, and handle sign-in, permissions and payments.
owns: Data, API, auth and payments
stack:
  - TypeScript
  - Hono
  - Next.js
  - PostgreSQL
  - Drizzle ORM
  - Stripe
foundations:
  - title: Data modeling
    detail: Relational thinking, PostgreSQL, migrations and designing a schema you won't regret in month six.
  - title: APIs with Hono
    detail: REST design, validation, errors and versioning, with Hono mounted inside a Next.js app.
  - title: Identity and money
    detail: Authentication, sessions, role-based permissions, Stripe checkout and verifying webhooks.
outcomes:
  - Design a schema for a real marketplace or social product and migrate it safely
  - Build a documented, validated REST API that other people can build against
  - Implement sign-in, roles and permissions without rolling your own crypto
  - Take payments with Stripe and reconcile them with webhooks
---

Backend engineers own the rules of the business. On a cohort team you design the schema, build the API the frontend and AI/ML engineers depend on, and decide who is allowed to do what.

Your API is written with Hono and mounted inside the team's Next.js app, so there is one repository and one deploy, and the contract between frontend and backend is typed end to end.
