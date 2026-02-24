# ReadThis.md — Project Brief for AI Assistants

> Read this before touching anything. It covers what this project is, how it's built, what's been done, and what still needs doing.

---

## Project Overview

**Owner:** Joniel da Silva
**Site:** `jonieldasilva-brand.netlify.app`
**GitHub:** `github.com/jonieldasilva/jonieldasilva-brand-sprint`
**Purpose:** Personal portfolio and service site for a brand strategist and creative director based in Hamburg, Germany.
**Primary offer:** The Brand Sprint — a 4–6 week strategic branding engagement for founder-led businesses.

---

## Tech Stack

| Layer | Detail |
|---|---|
| HTML | Vanilla, hand-written. No framework. |
| CSS | Split by page type (see below). No preprocessor. |
| JS | Single file: `assets/site.js` (3KB). Handles mobile nav only. |
| Hosting | Netlify, static deployment |
| Domain | Custom domain via Netlify |
| Redirects | `_redirects` file in root. Clean URLs configured for all case studies. |
| Version control | Git / GitHub |

---

## File Structure

```
/
├── index.html                  # Homepage
├── 404.html                    # Custom error page
├── imprint.html                # Legal — Imprint (German law requirement)
├── data-policy.html            # Legal — Privacy / Data Policy
├── robots.txt                  # Allows all crawlers
├── sitemap.xml                 # All 8 public pages listed
├── _redirects                  # Netlify URL rules + 301 redirects
├── favicon-*.png               # 16×16, 32×32
├── apple-touch-icon.png        # 180×180
│
├── assets/
│   ├── index.css               # Homepage styles (19KB)
│   ├── work-case.css           # Shared case study template styles (13KB)
│   ├── work-they-fight.css     # Custom styles for documentary case study (13KB)
│   ├── work-index.css          # Work listing page styles (10KB)
│   ├── imprint.css             # Legal page styles (5KB)
│   ├── data-policy.css         # Legal page styles (5KB)
│   └── site.js                 # Mobile nav toggle script (3KB)
│
├── work/
│   ├── index.html              # Work listing — all 6 case studies
│   ├── blablador.html          # Case study: Blablador (AI / Visual Identity)
│   ├── radiologie-ahrensburg.html  # Case study: Radiologie Ahrensburg (Healthcare / Brand Sprint)
│   ├── lm-alltagshilfe.html    # Case study: LM Alltagshilfe (Care Services / Brand Sprint)
│   ├── steen-digital.html      # Case study: Steen Digital (Consulting / Brand Sprint)
│   ├── decarbonaid.html        # Case study: Decarbonaid (Sustainability / Brand Identity)
│   └── they-fight-with-cameras.html  # Case study: They Fight With Cameras (Film / Art Direction)
│
└── img/
    ├── hero-paint-*.jpg        # Homepage hero image (800w–2400w srcset)
    ├── social/
    │   └── og-default-1200x630.jpg   # Default OG image for all pages
    ├── profile/                # About section profile images
    └── projects/
        └── [project]-[width].jpg     # Responsive variants: -640, -960, -1280
                                      # (they-fight uses -900, -1400, -2000)
```

**Important:** The following are gitignored and never deployed:
- `files/` and `files.zip` — contains private documents (forecasts, briefs)
- `img/projects/*.png` — source originals, JPG variants are what get served
- `JDS_Website_Audit.md` — internal audit, not public
- `.netlify/` — build cache

---

## Design System

- **Style:** Bauhaus dark modernist. Black background (`#000000`), white text, red accent (`#E63329` approx).
- **Typography:** Futura (system font on most devices — no web font load needed).
- **CSS variables** are defined at the top of each CSS file. Don't add inline styles if a variable exists.
- **Version cache-busting:** CSS links use `?v=` query strings (e.g. `index.css?v=20260211-logos7`). Update the version string when making CSS changes that need to bypass browser cache.

---

## Meta / SEO Conventions

Every page has the full set:
- `<title>`, `<meta name="description">`, `<link rel="canonical">`
- Open Graph: `og:type`, `og:title`, `og:description`, `og:url`, `og:image` (+ width/height)
- Twitter Card: `summary_large_image`

Case studies all use the default OG image (`/img/social/og-default-1200x630.jpg`). If per-case-study OG images are ever added, they'd go in `/img/social/`.

---

## Session History

### Session 1–7 (via git log)
1. Initial commit — base site structure
2. Placeholder images added per project
3. Bauhaus dark modernist design implemented across entire site
4. Legal pages (imprint, data policy) added
5. Steen Digital link fixed, old `steent.html` removed
6. Content corrections — contact info, manuscript updates
7. Assets externalized, styles/scripts optimized
8. SEO, privacy, and metadata improvements

### Session 8 — Audit & Fixes (Feb 24, 2026)
A full site audit (`JDS_Website_Audit.md`) was conducted, then the following were resolved:

**Confirmed already handled (no action needed):**
- `files.zip` and `/files/` are gitignored — not deployed, not public
- PNG source files in `/img/projects/` are gitignored — not deployed
- `robots.txt` and `sitemap.xml` — both present
- OG meta tags — present on all 6 case study pages
- Blablador geographic contradiction — fixed (now consistently "Germany and the European market")

**Fixed in this session:**
- **Image compression** — 12 JPG variants recompressed at quality 75 via `sips`. Typical savings: 80–90% file size reduction (e.g. `lm-alltagshilfe-1280.jpg`: 1.9MB → 161KB).
- **Custom 404 page** — `404.html` created. Matches site design and voice. Netlify serves it automatically for unmatched routes.
- **Fine Art removed** — Removed "Fine Art / Watercolour & Print" service card from homepage (no supporting portfolio work existed). Also removed Fine Art and Watercolour tags from the About section. Services are now: Brand Sprint, Creative Direction, Visual Identity.
- **IMAGE-REPLACEMENT-GUIDE.txt deleted** — Outdated documentation artefact removed from project root.

**Uncommitted changes at end of session (not yet committed to git):**
- `index.html` — Fine Art removal
- `assets/index.css`, `work-case.css`, `work-they-fight.css` — pre-existing modifications
- `work/index.html` — pre-existing modifications
- `img/projects/*.jpg` — compressed images
- `img/projects/steen-digital.jpg` — deleted (pre-existing)
- `404.html` — new file (untracked)

---

## Next Tasks (Active Todo List)

### Case Studies — All 6 Are Work in Progress

Each case study needs the following. Work through them one at a time.

#### Per-case checklist
- [ ] **Hero image alt text** — currently all read `alt="[Client] placeholder image"`. Replace with a real descriptive alt text once final images are confirmed.
- [ ] **Pull quote** — currently written in Joniel's voice as design philosophy (unattributed). Replace with a real client quote, properly attributed (name, title, company).
- [ ] **Results metrics** — some are strong numbers; some are not real metrics (e.g. "1 Unified visual system"). Review and replace weak entries with actual measurable outcomes.
- [ ] **Client name/founder details** — some cases reference "the founder" or "two ex-McKinsey partners" without naming them. Confirm whether names should be included.

#### Case-by-case status
| Case Study | Hero alt | Client quote | Metrics review | Notes |
|---|---|---|---|---|
| Blablador | ❌ placeholder | ❌ unattributed | ⚠️ "1 Visual system" not a metric | Described as Barcelona-based in meta, Jülich in body — verify |
| Radiologie Ahrensburg | ❌ placeholder | ❌ unattributed | ✅ solid numbers | — |
| LM Alltagshilfe | ❌ placeholder | ❌ unattributed | ⚠️ "1 Brand that feels like home" not a metric | Founder named as Lisa Mueller — confirm this is correct |
| Steen Digital | ❌ placeholder | ❌ unattributed | ✅ solid numbers | Founders unnamed ("two ex-McKinsey partners") — confirm |
| Decarbonaid | ❌ placeholder | ❌ unattributed | ⚠️ "1 Unified advisory brand" not a metric | — |
| They Fight With Cameras | ❌ placeholder | ❌ unattributed | ✅ solid numbers | Status: "In Production" — update when released |

---

## Open Issues (Needs Owner's Content — Cannot Be Resolved by AI)

These require Joniel's input. They are strategic/content decisions, not technical fixes:

1. **Client testimonials** — All case study pull quotes are written in Joniel's own voice. Real client quotes would significantly strengthen credibility. One quote per case study is the target.
2. **Contact section qualifier** — The contact section lacks a signal about what kind of founder or project is a fit. A one-sentence ideal-client criteria would help self-selection.
3. **Results metrics narrative** — Metrics like "45% increase in enquiries" appear without context. One sentence of story around each number would make them land harder.
4. **Enterprise/boutique contrast** — The site implies but never explicitly states the contrast between global brand credentials (Qatar Airways, Montblanc, Novartis, Dentsu, Bosch) and the boutique, founder-friendly Sprint practice. Making this explicit could be a strong differentiator.
5. **Fine Art portfolio** — Fine Art has been removed from the services list. If Joniel wants to reintroduce it, a minimal portfolio section (even one image) is needed first.

---

## Things to Know Before Making Changes

- **Never add features or content that aren't confirmed** — the writing on this site is carefully considered. Don't paraphrase, rewrite, or embellish copy without explicit instruction.
- **CSS is split by page** — don't add case study styles to `index.css` or vice versa. Shared nav/footer styles live in `work-case.css` for sub-pages.
- **Image naming convention matters** — project images follow `[project-slug]-[width].jpg`. New images should follow the same pattern with a srcset at 640, 960, and 1280 widths.
- **Cache-bust CSS** when making visible style changes — update the `?v=` query string on the relevant `<link>` tag.
- **Don't commit unless asked** — the owner commits manually after reviewing changes.
- **Netlify does NOT auto-deploy from GitHub** — the site is deployed via the Netlify CLI. After committing and pushing to git, run `netlify deploy --prod` from the project root to go live. Git push alone does nothing to the live site.
