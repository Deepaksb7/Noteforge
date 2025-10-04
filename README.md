# 📝 Noteforge

**Noteforge** is a **multi-tenant, collaborative note-taking SaaS** built with **Next.js 14** and **TypeScript**. It provides a rich, performant, and secure environment for individuals and teams to create, organize, and share notes efficiently.

---

## 🚀 Features

### 🧠 1. Rich-Text Editor
- **WYSIWYG and Markdown Modes:** Seamlessly switch between visual and markdown editing for a flexible writing experience.  
- **Comprehensive Formatting:** Supports headings, paragraphs, lists (bulleted/ordered), bold, italic, strikethrough, underline, code snippets, and blockquotes.  
- **Developer-Focused:** Includes syntax-highlighted code blocks for saving code snippets.

---

### 📚 2. Note & Notebook Management
- **Create and Manage Notebooks:** Organize your work into notebooks. Easily create, update, or delete them.  
- **Create and Manage Notes:** Add, edit, or remove notes within any notebook.  
- **Rich Content Support:** Mix text, code, and media in a single note.

---

### 🔐 3. Authentication & User Management
- **Email & Password Authentication**  
- **Google Login (OAuth)**  
- **Forgot/Reset Password** — Secure email-based password reset.  
- **Email Verification** — New users confirm their account via email before logging in.

---

### 💻 4. User Interface
- **Modern UI:** Built with **Shadcn UI** and **Tailwind CSS** for a clean, minimal aesthetic.  
- **Light & Dark Mode** support.  
- **Fully Responsive** — Works seamlessly across all screen sizes.  
- **Sidebar Navigation:** Collapsible sidebar for easy access to notebooks and notes.

---

### ⚙️ 5. Technology & Performance
- **Next.js App Router:** Utilizes the latest features for optimal performance and developer experience.  
- **React Server Components:** Faster page loads and improved SEO.  
- **Drizzle ORM:** Type-safe database queries with TypeScript-first ORM.  
- **PostgreSQL:** Reliable and powerful relational database.  

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **State Management** | React Context, React Hook Form |
| **Authentication** | better-auth, Google OAuth |
| **Database** | PostgreSQL |
| **ORM** | Drizzle ORM |
| **Deployment** | Vercel |

---

## 📦 Installation

### ✅ Prerequisites
- Node.js v18+  
- npm, yarn, or pnpm  
- PostgreSQL database  

---

### 🧰 Setup

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

