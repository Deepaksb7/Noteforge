# Noteforge

[![Vercel Deployment](https://vercelbadge.vercel.app/api/noteforge-ten?style=flat-square)](https://noteforge-ten.vercel.app)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](./LICENSE)

<br>

**Noteforge** is a **multi-tenant, collaborative note-taking SaaS** built with **Next.js 14** and **TypeScript**. It offers a rich, performant, and secure environment for individuals and teams to create, organize, and share notes effectively.

## Project Overview

Noteforge provides:

- **Rich-Text Note Creation**: Block-based editor supporting headings, lists, code blocks, images, and checklists.
- **Organizational Tools**: Tags, nested folders, and search to manage and retrieve notes.
- **Collaboration**: Shared workspaces with role-based access (Admin, Editor, Viewer).
- **Data Isolation**: Multi-tenancy ensures each workspace’s data is siloed.
- **Performance Optimizations**: Server components, edge caching, and optimized assets for fast loading.
- **Security**: OAuth with NextAuth.js, JWT authentication, session management, and refresh tokens.

This README will guide you through understanding the project, its setup, and how to extend it.

---

## Features

1. **Rich-Text Editor**
   - WYSIWYG and Markdown modes
   - Headings, paragraphs, lists, code snippets, embedded images
2. **Note Organization**
   - Tags and nested folders
   - Full-text search across notes
3. **Collaboration & Roles**
   - Create and join workspaces
   - Role-based permissions (Admin, Editor, Viewer)
4. **Authentication**
   - OAuth providers (Google) via NextAuth.js
   - Email/password sign-up and login
   - JWT tokens with automatic rotation
5. **Performance**
   - Next.js App Router and Server Components
   - Edge caching for public content
   - Font optimization with `next/font`
6. **Accessibility**
   - WCAG 2.1 AA compliance
   - ARIA labels and keyboard navigation
7. **Extensibility**
   - REST API endpoints
   - Webhooks for integration
   - Plugin-ready architecture

---

## Tech Stack

| Category       | Technology                      |
| -------------- | ------------------------------- |
| Framework      | Next.js 14 (App Router)         |
| Language       | TypeScript                      |
| Styling        | CSS Modules, Tailwind CSS       |
| State Management| React Context, React Query     |
| Authentication | NextAuth.js, JWT                |
| Database       | PostgreSQL via Prisma ORM       |
| Deployment     | Vercel                          |
| Fonts & Assets | next/font, Next.js Image        |

---

## Demo

Live demo: https://noteforge-ten.vercel.app

---

## Installation

### Prerequisites

- Node.js v18+
- npm, yarn, or pnpm
- PostgreSQL database

### Steps

1. **Clone the repo**:
   ```bash
   git clone https://github.com/Deepaksb7/Noteforge.git
   cd Noteforge
   ```
2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Set up environment variables**: Copy `.env.example` to `.env.local` and configure:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/noteforge
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret
   ```

---

## Usage

- **Development**:
  ```bash
  npm run dev
  ```
  Open http://localhost:3000

- **Build & Production**:
  ```bash
  npm run build
  npm start
  ```

---

## Project Structure

```
Noteforge/
├── app/
│   ├── layout.tsx         # Global layout
│   ├── page.tsx           # Landing page
│   └── (workspace)/
│       ├── layout.tsx     # Workspace layout
│       ├── page.tsx       # Workspace dashboard
│       └── notes/
│           ├── new/page.tsx   # Create note
│           └── [id]/page.tsx  # Note detail
├── components/           # Reusable UI components
├── lib/                  # Utility functions and API clients
├── prisma/               # Prisma schema & migrations
├── styles/               # CSS modules and globals
├── public/               # Static assets
├── next.config.js        # Next.js config
└── tsconfig.json         # TypeScript config
```

---

