# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Minh Nguyen (marshng.dev) built with Next.js 14 App Router. Features blog posts, guestbook, photo gallery, and GitHub integration via GraphQL.

## Commands

```bash
bun dev          # Start dev server with Turbo on port 3005
bun build        # Production build
bun start        # Start production server
```

## Architecture

**Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Postgres, NextAuth.js

**Data Flow**:
- Blog posts: MDX files in `/content/` parsed by `app/db/blog.ts` using frontmatter
- Database: Postgres via `postgres` package (`app/db/postgres.ts`) for views, guestbook, redirects
- GitHub data: Apollo Client with GitHub GraphQL API (`app/ApolloWrapper.tsx`) - fetches pinned repos on homepage
- Auth: NextAuth.js v5 with GitHub OAuth (`app/auth.ts`)

**Key Patterns**:
- Apollo Client wraps the app for GitHub GraphQL queries (see homepage for pinned repos)
- Blog views tracked in Postgres, incremented on page load via server actions (`app/db/actions.ts`)
- Redirects stored in Postgres and loaded in `next.config.mjs`
- MDX content rendered via `next-mdx-remote` with custom components (`app/components/mdx.tsx`)

**Routes**:
- `/` - Homepage with GitHub repos, links, photo grid
- `/blog/[slug]` - MDX blog posts from `/content/`
- `/guestbook` - GitHub OAuth sign-in required to post
- `/moments` - Photo gallery
- `/work`, `/running`, `/weregettingmarried` - Static content pages

## Environment Variables

Required (see `.env.example`):
- `POSTGRES_URL` - Database connection
- `OAUTH_CLIENT_KEY`, `OAUTH_CLIENT_SECRET` - GitHub OAuth
- `AUTH_SECRET` - NextAuth secret
- `NEXT_PUBLIC_GITHUB_ACCESS_TOKEN` - GitHub GraphQL API
