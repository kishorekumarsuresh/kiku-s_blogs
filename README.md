# Minimal Blog

A clean, minimal blogging platform built with Next.js 16, MDX, and Tailwind CSS v4. Write blog posts as plain `.mdx` files — no database, no CMS, no registration.

---

## Features

- **MDX-powered posts** — write in Markdown, embed JSX components when needed
- **Auto-discovered posts** — drop an `.mdx` file in `content/blogs/` and it appears automatically
- **Category filter pills** — derived from frontmatter, support multiple categories per post (`"ruby, rails"`)
- **Code blocks with copy button** — all fenced code blocks get a one-click copy icon
- **GFM tables** — full GitHub Flavored Markdown support (tables, strikethrough, etc.)
- **Dark / Light theme** — class-based toggle, respects system preference on first visit, persists to `localStorage`
- **Semantic color tokens** — single-source palette in CSS custom properties, no `dark:` variants scattered in components
- **Fully typed** — TypeScript throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| Content | MDX via `next-mdx-remote` |
| Frontmatter | `gray-matter` |
| Markdown extras | `remark-gfm` |
| Font | Geist Sans / Geist Mono |

---

## Project Structure

```
content/blogs/       ← your .mdx blog posts live here
app/
  layout.tsx         ← root layout, ThemeProvider, ThemeToggle
  blogs/
    page.tsx         ← landing page (blog list)
    [slug]/
      page.tsx       ← individual blog post page
components/
  BlogList.tsx       ← grid + category filter pills
  BlogCard.tsx       ← individual post card
  CodeBlock.tsx      ← <pre> wrapper with copy button
  ThemeProvider.tsx  ← dark/light context
  ThemeToggle.tsx    ← sun/moon icon button
lib/
  blogs.ts           ← getAllBlogs() + getBlogBySlug()
types/
  blogs.ts           ← Blog type
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Writing a Blog Post

1. Create a file in `content/blogs/your-slug.mdx`
2. Add frontmatter at the top:

```yaml
---
title: "Your Post Title"
date: "03 May 2026"
readTime: "5 min read"
category: "javascript"
description: "A short summary shown on the card and detail page."
---
```

3. Write your content below the closing `---`

**Rules:**
- Do **not** add an `# h1` heading — the title is rendered from frontmatter
- Use `##` for top-level sections, `###` for sub-sections
- Fenced code blocks automatically get a copy button
- Multiple categories: `category: "ruby, rails"` — comma-separated

The post will appear on the landing page automatically. The filename becomes the URL slug:
`async-await-guide.mdx` → `/blogs/async-await-guide`

---

## Deployment

### Vercel (recommended)

Push to GitHub, then:

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your repository
3. Leave all settings as defaults (Next.js is auto-detected)
4. Click **Deploy**

Every `git push` to `main` triggers an automatic redeploy.

### CLI

```bash
npm i -g vercel
vercel --prod
```

> **Note:** Blog posts are read from the filesystem at build time. Add a new `.mdx` file, commit, and push — Vercel will rebuild and serve the new post within ~30 seconds.

---

## Color Palette

The entire color system lives in `app/globals.css` as CSS custom properties. Light and dark values are defined once — no `dark:` variants in component classes.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--page-bg` | `#EDECEA` | `#1A1A19` | Page background |
| `--surface` | `#F1EFE8` | `#2C2C2A` | Card container |
| `--card` | `#FFFFFF` | `#2C2C2A` | Blog cards |
| `--border` | `#D3D1C7` | `#444441` | Borders, dividers |
| `--muted` | `#B4B2A9` | `#5F5E5A` | Dates, back link |
| `--sub` | `#888780` | `#888780` | Tags, meta |
| `--body` | `#5F5E5A` | `#B4B2A9` | Body copy |
| `--primary` | `#2C2C2A` | `#F1EFE8` | Titles, headings |
