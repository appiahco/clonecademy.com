---
name: Instagram
kind: Social media app
icon: instagram-logo
order: 2
summary: A photo and video social app with profiles, follows, a ranked feed, comments, messages and a mobile-first camera.
layers:
  - name: App and feed
    role: frontend
    art: feed
    detail: Expo app with camera, plus a Next.js web client
  - name: Social API
    role: backend
    art: api
    detail: Users, posts, follows, likes and comments in Hono
  - name: Ranking and moderation
    role: ai-ml
    art: model
    detail: Feed ranking, generated alt text and content moderation
  - name: Social graph and media
    role: backend
    art: data
    detail: PostgreSQL follow graph, media metadata and notifications
  - name: Infrastructure
    role: cloud
    art: infra
    detail: Media pipeline, queues and CDN on AWS in Terraform
deliverables:
  - role: frontend
    items:
      - Expo app with camera capture, filters and upload progress
      - Home feed with infinite scroll, likes and comments
      - Profiles, follow lists and search
      - Direct messages with read receipts
      - Next.js web client for browsing and profiles
  - role: backend
    items:
      - Schema for users, follows, posts, media, likes, comments and messages
      - REST API in Hono with cursor pagination for feeds
      - Sign-in, private accounts, blocking and reporting
      - Notifications with fan-out to followers
      - Rate limiting and abuse protection
  - role: cloud
    items:
      - AWS environment in Terraform with staging and production
      - Upload pipeline from S3 to a Lambda that resizes images and video
      - CloudFront CDN for media, with signed URLs for private accounts
      - Queues for notifications and feed fan-out
      - Load test at 10× launch traffic, with dashboards and alerts
  - role: ai-ml
    items:
      - Feed ranking model trained with AutoML on engagement data
      - Generated alt text and caption suggestions for every upload
      - Moderation classifier that flags content for human review
      - Hashtag and account suggestions from embeddings
      - Evaluation reports for every model the team ships
sprints:
  - weeks: "4–5"
    goal: Sign up, post a photo and see it in a feed, deployed to staging
  - weeks: "6–7"
    goal: Follows, likes, comments and the media pipeline
  - weeks: "8–9"
    goal: Ranked feed, generated alt text and notifications
  - weeks: "10–11"
    goal: Messages, moderation and load testing
  - weeks: "12"
    goal: Harden, document and launch to production
---

Instagram is the classic consumer build. It's mobile-first, media-heavy and realtime, which pushes the frontend and cloud engineers hardest: uploads, image processing, feeds and notifications all have to feel instant on a phone.

It's the right pick if your own startup is a community, a consumer app or anything built around user-generated content.
