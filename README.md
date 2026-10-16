# QMAX Careers

A careers page for an electronics engineering services company, built with Next.js and shadcn/ui. Visitors can search, filter and expand job openings.

**Live demo:** https://qmax-careers.vercel.app <!-- Source: GitHub repo "homepage" field -->

## What it does

This is a single-page careers site. It has a hero section, an overview of roles grouped by category, a detailed list of openings, and a call to action for sending applications by email. Job data is defined in the components; there is no backend.

## Key features

- **Job search and filtering:** free-text search across title, description, level and type, plus filters for location and category.
- **Full-time / Internship tabs** that split the openings list.
- **Expandable job cards** showing responsibilities, qualifications and required skills grouped by category, with an "expand all / collapse all" control.
- **Role overview** grouped by category (Engineering, Software & Web, Business). Clicking a role smooth-scrolls to its card and briefly highlights it.
- Empty "no results" state, plus accessibility attributes on the controls (`aria-expanded`, `aria-controls`, labelled filters).
- Responsive navbar and a footer with office contacts in several regions.
- Vercel Analytics integration.

<!-- TODO: the "Apply Now" buttons have no action/link yet; applications currently go through the email CTA section. -->

## Tech stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| UI | Tailwind CSS v4, shadcn/ui (Radix UI, "new-york" style), lucide-react |
| Analytics | `@vercel/analytics` |
| Hosting | Vercel |

## Project structure

```
app/                    # layout, page, global styles
components/
  careers/              # hero, openings-list, current-openings (search/filter/cards), cta, ...
  navbar.tsx, footer.tsx
  ui/                   # shadcn/ui primitives
public/careers/         # page imagery
```

## Getting started

**Prerequisites:** Node.js 18+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts: `pnpm build`, `pnpm start` and `pnpm lint`.

No environment variables are required.

> Note: `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so type errors do not fail the build.

## Author

Built by [Kaviarasu S](https://github.com/kaviarasuns), Full Stack Developer.
