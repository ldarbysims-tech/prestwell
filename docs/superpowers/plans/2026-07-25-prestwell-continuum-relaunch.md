# Prestwell Continuum Relaunch — Implementation Plan

> **For agentic workers:** Implement task-by-task. User approved immediate build (skip wait for plan approval).

**Goal:** Rebuild Prestwell Continuum site to match `docs/superpowers/specs/2026-07-25-prestwell-continuum-relaunch-design.md`.

**Architecture:** Content modules in `src/content/`, shared UI, App Router pages; keep Resend contact API; navy/gold/cream brand; Playfair + Lato.

**Tech Stack:** Next.js 14, TypeScript, Tailwind, lucide-react, Resend

## Global Constraints

- Colors: Navy `#0B1F3A`, Gold `#C9A227`, Soft Cream `#F8F6F2`, White
- Phone `256-248-9616`, display email `info@prestwellcontinuum.com`
- Full brief copy; no invented prices
- Redirect `/care-options` → `/memberships`, `/how-it-works` → `/services`

## Tasks

1. Brand foundation (tokens, fonts, site.ts, OliveMark)
2. Content modules + Navbar/Footer/shared UI
3. Home, About, Services
4. Memberships, For Professionals, FAQs, Contact
5. Resources hub + 7 articles + checklist downloads
6. Redirects, legal contact updates, images, `npm run build`
