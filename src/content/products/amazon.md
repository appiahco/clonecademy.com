---
name: Amazon
kind: E-commerce marketplace
icon: amazon-logo
order: 1
summary: A multi-seller marketplace with search, a cart, checkout, order tracking and recommendations, on the web and in a mobile app.
layers:
  - name: Storefront
    role: frontend
    art: storefront
    detail: Next.js store and Expo shopping app
  - name: Commerce API
    role: backend
    art: api
    detail: Catalog, cart, orders and seller endpoints in Hono
  - name: Recommendations
    role: ai-ml
    art: model
    detail: Related products, search ranking and generated listings
  - name: Data and payments
    role: backend
    art: data
    detail: PostgreSQL schema, Stripe checkout and webhooks
  - name: Infrastructure
    role: cloud
    art: infra
    detail: AWS in Terraform, CI/CD, CDN and autoscaling
deliverables:
  - role: frontend
    items:
      - Storefront with category browsing, search and filters
      - Product pages with image galleries, reviews and stock status
      - Cart, checkout and order history
      - Seller dashboard for listings, inventory and orders
      - Expo shopping app with sign-in, cart and push notifications
  - role: backend
    items:
      - Schema for sellers, products, variants, inventory, carts and orders
      - REST API in Hono with validation and generated API docs
      - Sign-in, sessions and permissions for buyers, sellers and admins
      - Stripe checkout, refunds and payouts, reconciled with webhooks
      - Background jobs for order emails and inventory holds
  - role: cloud
    items:
      - AWS environment in Terraform with staging and production
      - PostgreSQL on RDS with backups and a restore drill
      - Product images on S3 behind CloudFront
      - CI/CD with GitHub Actions and preview deploys
      - Autoscaling, dashboards, alerts and a monthly budget
  - role: ai-ml
    items:
      - Related products and "customers also bought" recommendations
      - Semantic search over the catalog with embeddings
      - Generated product descriptions for sellers, with review before publishing
      - Demand forecast trained with AutoML to warn sellers about low stock
      - Evaluation reports for every model the team ships
sprints:
  - weeks: "4–5"
    goal: Browse and buy one product end to end, deployed to staging
  - weeks: "6–7"
    goal: Sellers, inventory and real Stripe payments
  - weeks: "8–9"
    goal: Search, recommendations and the Expo app
  - weeks: "10–11"
    goal: Order tracking, generated listings and load testing
  - weeks: "12"
    goal: Harden, document and launch to production
---

Amazon is the classic marketplace build. It has the widest backend of any product we clone: catalog, inventory, carts, orders, payments and payouts all have to agree with each other, and the frontend and cloud engineers feel every shortcut the backend takes.

It's the right pick if your own startup sells something, whether that's physical products, bookings, services or software.
