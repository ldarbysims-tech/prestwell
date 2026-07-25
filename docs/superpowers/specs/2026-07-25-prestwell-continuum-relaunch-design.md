# Prestwell Continuum Website Relaunch — Design Spec

**Date:** 2026-07-25  
**Status:** Approved (conversation design); awaiting user review of this written spec  
**Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Resend (existing contact API)

## 1. Goal

Rebuild the Prestwell Continuum marketing site so every section of the client content brief is present, accurate, and on-brand: RN-led concierge care management for older adults and families across Madison, Huntsville, Athens, and North Alabama. Preserve the working contact form, Resend email pipeline, and legal pages. Structure the site so future offerings (NP-led home visits, mobile primary care, telehealth) can be added without a redesign.

## 2. Decisions Locked

| Decision | Choice |
|---|---|
| Approach | Hybrid: new IA + brand + copy; keep contact API, legal pages, Next.js/Tailwind |
| Resources depth | Full hub + individual article pages for all listed topics + checklist placeholders + blog index |
| Visual assets | Royalty-free stock photography in `/public/images` + custom olive-branch SVG wordmark |
| Color | Navy `#0B1F3A`, Gold `#C9A227`, Soft Cream `#F8F6F2`, White |
| Typography | Playfair Display (headings), Lato (body) |
| Contact | Phone `256-248-9616`; public email `info@prestwellcontinuum.com` (placeholder per brief) |
| Mission/Vision | About-page versions in Mission/Vision blocks; founder-page versions inside Meet the Founder |

## 3. Information Architecture

### Primary navigation (exact order)

1. Home → `/`
2. About → `/about`
3. Services → `/services`
4. Memberships → `/memberships`
5. For Professionals → `/for-professionals`
6. Resources → `/resources`
7. FAQs → `/faqs`
8. Contact → `/contact`

Navbar CTA: “Schedule a Consultation” → `/contact` (or contact form with consultation intent).  
Phone in header: `256-248-9616`.

### Route map

| Route | Purpose |
|---|---|
| `/` | Home marketing page |
| `/about` | Story, mission, vision, values, Meet the Founder |
| `/services` | Full service catalog |
| `/memberships` | Heritage / Signature / Prestige + add-ons |
| `/for-professionals` | B2B partnerships + contract services |
| `/resources` | Hub: articles, blog, checklists |
| `/resources/[slug]` | Individual educational articles |
| `/faqs` | FAQ accordion |
| `/contact` | Contact details + consultation / information request form |
| `/privacy-policy`, `/terms-of-service`, `/hipaa-notice` | Keep; update phone/email/branding |
| `/care-options` | Redirect → `/memberships` |
| `/how-it-works` | Redirect → `/services` |

### Footer

- Brand: Prestwell Continuum + olive mark  
- Tagline: RN-Led Concierge Care Management  
- Line: Compassionate Care. Professional Advocacy. Peace of Mind.  
- Serving Madison • Huntsville • Athens • North Alabama  
- Phone, email, Facebook | Instagram | LinkedIn (placeholder `#` hrefs until client provides URLs)  
- Secondary links: nav pages + legal  

## 4. Visual System

### Color tokens (Tailwind)

```
navy:  #0B1F3A  (primary surfaces, headings, footer)
gold:  #C9A227  (accents, CTAs secondary, rules, checkmarks)
cream: #F8F6F2  (page background)
white: #FFFFFF  (cards/surfaces where needed)
```

Supporting shades derived from navy/gold for hover, muted text, borders. Remove sage-led palette as the primary brand language.

### Typography

- Display / H1–H3: Playfair Display  
- Body / UI: Lato  
- Optional italic emphasis on key phrases in hero/section titles (restrained)

### Logo

SVG olive branch (left or above) + “Prestwell” display wordmark + “Continuum” tracking-wide subtitle. Used in Navbar and Footer. Easy to swap for a client-supplied file later (`/public/brand/logo.svg`).

### Photography

Local files under `/public/images/` covering:

- Hero / aging in place  
- Nurse providing compassionate care  
- Family interaction  
- Warm home interior / welcome  

Prefer authentic, bright, welcoming scenes. No stock-looking “clipboard nurse” clichés if avoidable. Alt text descriptive and respectful.

### Motion

2–3 intentional motions only:

1. Hero entrance (fade-up of brand + headline + CTAs)  
2. Scroll reveal on major section headers / key blocks  
3. Subtle hover lift on primary CTAs and service/membership cards  

Respect `prefers-reduced-motion`.

### Layout principles (client + studio rules)

- Luxury healthcare: clean, modern, welcoming  
- Brand-first hero: Prestwell Continuum is the hero-level signal  
- First viewport: brand, one headline, one supporting sentence, CTA group, one dominant full-bleed visual plane  
- No cards in the hero; cards only where they support interaction or comparison (memberships, service links)  
- One job per section  
- Mobile-responsive throughout  

## 5. Page Specifications

### 5.1 Home `/`

1. **Hero (full-bleed)**  
   - Brand: Prestwell Continuum  
   - Headline: RN-Led Concierge Care Management  
   - Tagline: Compassionate Care. Professional Advocacy. Peace of Mind.  
   - Supporting: Personalized concierge nursing and care management designed to help older adults remain healthy, independent, and confident in the comfort of home.  
   - Service area line: Madison, Huntsville, Athens, and surrounding North Alabama communities  
   - CTAs: Schedule a Complimentary Consultation → `/contact`; Request Information → `/contact?intent=info`

2. **Welcome** — Personalized Nursing Beyond the Doctor's Office (full welcome copy from brief)

3. **Who We Serve** — eight audiences as a clean list or icon row (not a cluttered card grid): Older Adults Aging in Place; Busy Family Caregivers; Long-Distance Family Members; Individuals Managing Chronic Conditions; Seniors Recovering After Hospitalization; Independent Living Communities; Assisted Living Communities; Memory Care Communities

4. **Why Families Choose Prestwell Continuum** — nine checkmark items exactly as brief

5. **Our Services Preview** — four entries with Learn More → `/services` (anchor if possible): Concierge Nursing; Care Management; Hospital-to-Home Support; Professional Partnerships → `/for-professionals`

6. **Closing CTA** — Experience personalized healthcare with a trusted nursing professional. / Schedule Your Consultation Today

### 5.2 About `/about`

1. Our Story (brief copy)  
2. Our Mission (About version)  
3. Our Vision (About version)  
4. Our Core Values: Compassion, Integrity, Professional Excellence, Respect, Advocacy, Collaboration, Personalized Care  
5. **Meet the Founder** — LaToya Darby, MSN, FNP-BC; Founder & Concierge Care Manager; full bio from brief; include founder Mission/Vision paragraphs as closing of this section (distinct from the About Mission/Vision blocks above)

### 5.3 Services `/services`

Sections with listed bullets exactly as brief:

- Concierge Nursing (8 items)  
- Care Management (7 items)  
- Hospital-to-Home Transition (6 items)  
- Physician Care Plan Follow-Through (with description)  
- Family Support (4 items)  

CTA to schedule consultation.

### 5.4 Memberships `/memberships`

Intro: every membership includes personalized nursing oversight, healthcare advocacy, and compassionate support; minimum four-month commitment; annual memberships available with exclusive benefits.

Tiers:

- **Heritage** — Perfect for seniors seeking routine wellness oversight + listed includes  
- **Signature** — Most popular; everything in Heritage plus listed extras  
- **Prestige** — Premier; everything in Signature plus listed extras  

**Concierge Add-On Services** — nine items listed.

No prices in brief → do not invent prices; CTA to contact for details.

### 5.5 For Professionals `/for-professionals`

- Partner intro copy  
- We Partner With — 14 organization types  
- Contract Services — 11 custom offerings  
- CTA: Request a Professional Consultation → `/contact?intent=professional`

### 5.6 Resources `/resources`

Hub sections:

1. Educational Articles — cards linking to each slug  
2. Monthly Wellness Blog — index section (can start with featured articles or “latest from our library”; structure ready for future posts)  
3. Downloadable Checklists — placeholder downloads (PDF stubs or printable HTML pages) for at least: Hospital Discharge Checklist; Medication Safety; Fall Prevention (aligned with article topics)

### 5.7 Resource articles `/resources/[slug]`

| Slug | Title |
|---|---|
| `medication-safety` | Medication Safety |
| `preventing-falls` | Preventing Falls |
| `healthy-aging` | Healthy Aging |
| `hospital-discharge-checklist` | Hospital Discharge Checklist |
| `caregiver-resources` | Caregiver Resources |
| `blood-pressure-education` | Blood Pressure Education |
| `diabetes-education` | Diabetes Education |

Each article: title, short intro, structured sections with practical guidance, disclaimer that content is educational not medical advice, CTA to consult Prestwell. Content must be original, clinically careful, and useful — not empty stubs.

### 5.8 FAQs `/faqs`

Six Q&As exactly as brief (insurance / replace physician / emergency / family updates / assisted living / organization contracts).

### 5.9 Contact `/contact`

- Heading: Contact Prestwell Continuum / Schedule Your Complimentary Consultation  
- Phone: 256-248-9616  
- Email: info@prestwellcontinuum.com  
- Service area: Madison, Huntsville, Athens, North Alabama  
- Hours: Monday–Friday 8:00 AM – 5:00 PM; evening and weekend by request  
- Form: keep Resend pipeline; update care-type options to match memberships/services/professional interest; support query intents (`consultation`, `info`, `professional`) via URL param to preselect subject/care type  
- Form destination email remains the operational Resend `TO_ADDRESS` (do not change routing without client instruction); public-facing display email is `info@prestwellcontinuum.com`

## 6. Shared Components

- `Navbar`, `Footer` — new links, brand, colors, contact  
- `Button` / primary+secondary CTA styles (navy fill, gold outline/accent)  
- `SectionHeader` — serif title + optional gold rule  
- `CTABanner` — navy/gold treatment, new copy  
- `PageHero` — inner-page hero (navy field, cream/gold accents)  
- `CheckList`, `ServiceBlock`, `MembershipCard`, `FaqAccordion`, `ResourceCard`  
- `OliveMark` SVG component  

## 7. Content & Data

- Prefer typed content modules under `src/content/` (nav, services, memberships, faqs, resources metadata, who-we-serve, why-choose) so pages stay thin and future services are data additions.  
- Site-wide phone/email constants in `src/lib/site.ts` to avoid drift.  
- Update metadata titles/descriptions from “private-duty nursing” framing to “RN-led concierge care management.”

## 8. Out of Scope (this launch)

- Real CMS / MDX blog authoring pipeline (static/typed content is enough; structure allows later CMS)  
- Live social URLs (placeholders)  
- Membership pricing  
- Real client photography/logo swap (stock + SVG until provided)  
- Changing Resend operational `TO_ADDRESS` unless client requests it  
- Building NP/mobile primary care/telehealth pages (architecture only must not block them)

## 9. Success Criteria

- All eight nav destinations exist and match brief copy  
- All homepage, about, services, memberships, professionals, FAQ, contact, and footer content from the brief is present  
- Seven resource articles are readable pages with downloadable checklist affordances  
- Brand palette/typography/logo match the notes  
- Mobile-responsive; contact form still submits via Resend  
- Old `/care-options` and `/how-it-works` redirect cleanly  
- No invented prices; no invented clinical claims beyond educational resources  

## 10. Implementation Notes

- Replace sage-primary styling with navy/gold tokens in `tailwind.config.ts` and `globals.css`.  
- Fonts via `next/font/google`: Playfair_Display + Lato.  
- Redirects via `next.config.ts`.  
- Images optimized with `next/image`.  
- Accessibility: skip link, focus states, FAQ accordion keyboard support, meaningful alt text.
