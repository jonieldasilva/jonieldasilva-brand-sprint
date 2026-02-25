# Case Study Manuscript — JDS Portfolio
*Last updated: 2026-02-24. Working reference for all 6 case study pages. Update this file as cases are completed.*

---

## How This File Works

This is the running manuscript for the case study content work. Each case has:
- **Status** — where we are
- **What's verified** — content confirmed accurate
- **What's placeholder** — content that needs replacing
- **Asset checklist** — images and media needed per section
- **Open questions** — things to confirm with Joniel

Structure note: cases don't need to follow a rigid template. Each case should follow its own narrative logic. Common sections (Challenge, Approach, Quote, Outcome, Results) are defaults, not rules.

---

## Case 1 — They Fight With Cameras
**File:** `work/they-fight-with-cameras.html`
**CSS:** `work-they-fight.css` (unique CSS, not shared `work-case.css`)
**Status:** ✅ Content complete — awaiting final review and pull quote sign-off

### What's Verified
- Film subject: Walter Rosenblum, U.S. Army Signal Corps combat cameraman
- Directors: Nina Rosenblum & Daniel Allentuck
- Narrator: Liev Schreiber
- Music: Marcus Loeber (original score)
- Distribution: Espresso Media International (UK, worldwide)
- Credit: "Visual Identity: Joniel da Silva" on the film's website
- Role: Campaign Art Director (not Art Director — avoids conflict with film's own art direction)
- Year: 2025
- 8 festival wins: Cannes World Film Festival, San Diego Independent Cinema Awards, Hawaii International Film Awards, The IndieFEST Film Awards, Crown Point International Film Festival, Santa Barbara Indie Film Fest, Los Angeles Stars Film Festival (2026), World Class Film Awards
- Deliverables: poster, film deck, study guide, website, Instagram campaign, Daedalus Productions logo

### What's Placeholder
- Pull quote: currently a drafted line in Nina/Daniel's voice — **needs sign-off from Nina Rosenblum or Daniel Allentuck**
  > *"Joniel understood from the beginning what this film needed — a presence that honours the subject without overpowering it. The result speaks for itself."*

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image | `img/cases/they-fight-with-cameras-hero.jpg` | ✅ In place |
| Project thumbnail (srcset) | `img/projects/they-fight-with-cameras-900/1400/2000.jpg` | ✅ In place |
| Additional: film still | `img/projects/they-fight-with-cameras-film.jpg` | ✅ In place |
| Poster landscape (srcset) | `img/TFWC_Poster_Landscape-800/1200/1600/2000/2400.jpg` | ✅ In place (root `img/` — check if referenced) |
| Pull quote attribution | — | ⏳ Needs Nina or Daniel sign-off |
| OG image (case-specific) | Uses default `og-default-1200x630.jpg` | ⚠️ Could be upgraded to poster image |

### Open Questions
- [ ] Bring drafted pull quote to Nina or Daniel for sign-off
- [ ] Is the TFWC poster image (`img/TFWC_Poster_Landscape-*`) referenced anywhere in the HTML? If not, check if it should be added as a body image
- [ ] Should hero alt text be more specific once final campaign image is confirmed?

---

## Case 2 — Radiologie Ahrensburg
**File:** `work/radiologie-ahrensburg.html`
**CSS:** `work-case.css` (shared)
**Status:** ✅ Content complete — quote attribution needs CSS check + formal sign-off

### What's Verified (from Kickoff PDF, Strategy PDF, Brand Guide PDF)
- **Owners:** Priv.-Doz. Dr. med. Vera Schreiter (Leitende Ärztin) and Dr. med. Andreas Leichert (Leitender Arzt)
- **Address:** Hamburger Str. 23, 22926 Ahrensburg
- **Founded:** 1965 (confirmed from website: "Ihre Radiologie Ahrensburg seit 1965")
- **Team:** Philip Steen (project lead / Projektleitung), Joniel da Silva (Design), Fynn (Entwicklung)
- **Timeline:** September–November 2025 (~10 weeks)
- **Starting point:** No logo existed before this project
- **Scope:** Workshop → brand strategy → logo + visual identity → 54-page brand guide → bilingual one-page website → Doctolib integration
- **Competitive threat:** Radiologische Allianz expanding into Ahrensburg
- **Strategic differentiator:** Only practice in the area where both owner-physicians work on-site every day — real accountability vs. corporate networks
- **Brand positioning:** Modern + Personal/Approachable (unique quadrant in competitive landscape)
- **Brand values:** Excellence, Speed, Consistency, Honesty & Compassion
- **Website headline:** "Moderne Bildgebung, menschlich umgesetzt" (verified from brand guide)
- **Visual identity:** Concentric ring logo (inspired by radiology scan rings), warm teal + soft grey, rounded lowercase wordmark
- **Real client quote (Dr. Leichert):** "We are an owner-based little company, and the immediate possibility to get in touch with us and to solve problems is a big advantage." — captured in strategy workshop, used as pull quote
- **Deliverables confirmed:** Logo, 54-page brand guide, website (bilingual, de/en), business cards (both owners), staff uniforms, 3D clinic plaque, Doctolib 24h online booking integration
- **Role (Joniel):** Brand Designer (Philip Steen = project lead, Joniel = design execution)

### What's Placeholder
- Nothing fabricated remains. All content is based on verified source documents.

### Open Items
- [x] **`quote-attribution` CSS class** — added to `work-case.css` this session ✅
- [ ] **Formal quote sign-off from Dr. Leichert** — quote was captured in strategy workshop; confirm he's happy for it to be published on portfolio
- [ ] **Body images** — none currently. Brand guide mockups (logo on clinic wall, business cards, uniforms) could be strong additions when/if available

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image | `img/cases/radiologie-ahrensburg-hero.jpg` | ✅ In place |
| Project thumbnail (srcset) | `img/projects/radiologie-ahrensburg-640/960/1280.jpg` | ✅ In place |
| Body images (brand mockups) | — | ⚠️ None currently — add when available |
| Pull quote | Dr. Leichert verbatim (workshop) | ⏳ Formal sign-off pending |
| `quote-attribution` CSS | `work-case.css` | ⚠️ Check/add if missing |

---

## Case 3 — LM Alltagshilfe
**File:** `work/lm-alltagshilfe.html`
**CSS:** `work-case.css` (shared)
**Status:** ✅ Content complete — pull quote sign-off pending

### What's Verified (from Strategy PDF + Brand Guide PDF)
- **Owner/Founder:** Lukas Mendroch
- **Region:** Hessen (NOT Hamburg — placeholder was wrong)
- **Services:** Alltagsnahe Betreuung — from Haushaltstätigkeiten to Demenzbegleitung
- **Mission:** "Wir ermöglichen alltagsnahe, persönliche und verlässliche Unterstützung – professionell organisiert, menschlich ausgeführt."
- **Vision (15yr):** 5yr = all of Hessen; 10yr = one of leading Alltagshilfe brands in Germany; 15yr = 10,000 Alltagshelfer nationwide
- **Core strategic pivot:** "Lukas kommt vorbei" (founder-dependent, unscalable) → "Der LM-Standard" (Lukas's quality guarantee, infinitely scalable). "Wir verkaufen nicht mehr die Person Lukas, sondern die Qualitäts-Garantie von Lukas."
- **Why:** "Damit Hilfe wieder menschlich wird und Menschen mit Würde und Leichtigkeit leben können"
- **Values:** Menschlichkeit, Verlässlichkeit, Lebensfreude, Wertschätzung
- **Brand name for identity:** "Die menschliche Signatur"
- **Logo:** Handwritten/signature-style *lm.* — L = Lebensmission, M = Mensch; Tangerine orange dot = the moment care arrives; line = L and M moving toward each other
- **Colours:** Graphite (#2C2C2C), Deep Mocha (#50423F), Tangerine (#FF6B4A) primary; Ivory, Sand, Slate Gray, Alabaster, Moss Green secondary
- **Typography:** Figtree (humanistic sans-serif by Erik Kennedy) — "Clarity, calmness, humanity."
- **Photography direction:** "Echte Menschen. Echte Momente." — authentic, unposed
- **Brand Guide version:** 1.0 | 30/12/2025 (delivered December 30, 2025)
- **Collaboration:** In partnership with Steen Digital (confirmed: Steen Digital logo on strategy cover)
- **Scope confirmed:** Brand strategy → brand guidelines (logo + applications) → live website
- **Sprint duration:** Not confirmed in documents — removed from Scope meta field
- **Deliverables confirmed:** Brand strategy, brand guidelines, website (live in production, client happy)
- **NOT confirmed:** Vehicle branding (removed from placeholder), exact week count, post-launch metrics
- **Real Lukas quotes (strategy doc):**
  - "Wir machen den Alltag leichter – für Haushalte aller Art."
  - "Wir wollen jeden persönlich kennenlernen, das ist wichtig." ← used as pull quote
  - "Ich gebe mein Wissen weiter, damit ein System entsteht, das unabhängig von mir funktioniert." ← used in Approach copy

### What's Placeholder
- Nothing fabricated remains. All content is based on verified source documents.
- Sprint duration in Scope field intentionally omitted (not confirmed).
- Results use vision figure (10,000) and confirmed deliverables (3) — framed as ambition, not post-launch metrics.

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image | `img/cases/lm-alltagshilfe-hero.jpg` | ✅ In place |
| Project thumbnail (srcset) | `img/projects/lm-alltagshilfe-640/960/1280.jpg` | ✅ In place |
| Body images | — | ⚠️ None currently — brand guide applications could be strong additions |
| Pull quote | Lukas (strategy doc) | ⏳ Formal sign-off pending |

### Open Items
- [ ] **Formal quote sign-off from Lukas Mendroch** — "Wir wollen jeden persönlich kennenlernen, das ist wichtig." — from strategy doc; confirm he's happy for it to be published on portfolio
- [ ] **Sprint duration** — confirm exact week count with Lukas/Philip if needed for Scope meta field
- [ ] **Body images** — brand guide application mockups (website, logo in use) could be added when available

---

## Case 4 — Steen Digital
**File:** `work/steen-digital.html`
**CSS:** `work-case.css` (shared)
**Status:** ✅ Content updated from verified input — visuals pending

### What's Verified
- **Client:** Steen Digital
- **Client lead:** Philip Steen
- **Year:** 2025
- **Case role in methodology:** first Brand Sprint case in Joniel's method lineage
- **Sequence:** followed by Radiologie Ahrensburg and LM Alltagshilfe
- **Engagement context:** ongoing partnership and frequent collaboration
- **Narrative direction approved:** method-proving case, not metrics-led case
- **Scope confirmed:** strategy, positioning, identity, website, pitch deck, templates
- **Transformation note:** client started from scratch; Joniel's work brought structure, shape, and confidence

### What's Placeholder
- Quote is in Joniel voice (no client quote published)
- No hard performance metrics provided (qualitative impact used)

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image | `img/cases/steen-digital-hero.jpg` | ✅ In place |
| Project thumbnail (srcset) | `img/projects/steen-digital-640/960/1280.jpg` | ✅ In place |
| Base project image `.jpg` | `img/projects/steen-digital.jpg` | ⚠️ Missing — only `.png` exists |
| Body images | — | ⚠️ None currently |
| Pull quote from client | — | ⚠️ Not available (Joniel voice used) |
| Real metrics | — | ⚠️ Not provided (qualitative impact used) |

### Open Questions (interview needed)
- [ ] Add 1-3 body visuals from project work

---

## Case 5 — Decarbonaid
**File:** `work/decarbonaid.html`
**CSS:** `work-case.css` (shared)
**Status:** ✅ Content updated from verified input — strategic insight can still be refined

### What's Verified
- **Company:** Decarbonaid (decarbonization advisory startup)
- **Year:** 2022
- **Role (Joniel):** Brand Designer (incl. illustration execution)
- **Involvement:** From day-zero startup phase
- **Scope confirmed:** Brand strategy, logo/visual identity, illustration, website design/build, presentation support
- **No copywriting scope:** copy support was not a core deliverable
- **No founder names in public case copy** (by request)
- **Outcome framing approved:** confident shape and positioning

### What's Placeholder
- Strategic insight line can still be tuned further
- No client quote available
- No hard performance metrics available

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image | `img/cases/decarbonaid-hero.jpg` | ✅ In place |
| Project thumbnail (srcset) | `img/projects/decarbonaid-640/960/1280.jpg` | ✅ In place |
| Body images | — | ⚠️ None currently |
| Pull quote from client | — | ⚠️ Not available (Joniel voice used) |
| Real metrics | — | ⚠️ Not available (qualitative impact used) |

### Visual Export Checklist (to produce next)

| Use in case page | Source | Suggested export filename | Suggested size |
|---|---|---|---|
| Brand system overview image (logo + type + color + illustration) | Brand files / `/brand` | `img/cases/decarbonaid-brand-system-1600.jpg` | 1600px wide |
| Website hero screenshot (desktop) | `decarbonaid.com` | `img/cases/decarbonaid-web-hero-desktop-1600.jpg` | 1600x1000 |
| Website section screenshot (desktop) | `decarbonaid.com` | `img/cases/decarbonaid-web-section-desktop-1600.jpg` | 1600x1000 |
| Website hero screenshot (mobile) | `decarbonaid.com` | `img/cases/decarbonaid-web-hero-mobile-900.jpg` | 900x1800 |
| `/brand` page screenshot #1 | `decarbonaid.com/brand` | `img/cases/decarbonaid-brand-page-1-1600.jpg` | 1600px wide |
| `/brand` page screenshot #2 | `decarbonaid.com/brand` | `img/cases/decarbonaid-brand-page-2-1600.jpg` | 1600px wide |
| Illustration set composition | Your illustration source files | `img/cases/decarbonaid-illustration-set-1600.jpg` | 1600px wide |
| Presentation application image | Your presentation files | `img/cases/decarbonaid-presentation-1600.jpg` | 1600x1000 |
| Optional process image (early vs final) | Early drafts + final brand frame | `img/cases/decarbonaid-process-before-after-1600.jpg` | 1600x1000 |

**Export notes**
- Keep all case images as optimized JPG for web (`quality ~75-82`), unless transparency is required.
- If adding these into HTML, prefer 1-3 strong body images first (brand system, website desktop, illustration set).
- Use consistent naming with the `decarbonaid-...` prefix for easy maintenance.

### Open Questions (interview needed)
- [ ] Optional: refine the core strategic insight sentence for final polish
- [ ] Optional: add 1–2 body images from website/brand applications if available

---

## Case 6 — Blablador
**File:** `work/blablador.html`
**CSS:** `work-case.css` (shared)
**Status:** ⏸ Archived from visible listings (kept as direct URL)

### What's Verified
- Case page file is kept (`work/blablador.html`) for archive/direct link access
- Removed from homepage and `/work/` listing by owner decision
- Removed from sitemap (not indexed as a featured case)

### What's Placeholder
- **⚠️ Active contradiction:** meta description says "Barcelona-based" but body copy says "Jülich, Germany-based" — needs one correct answer
- "Series A announcement" tied to rebrand — **unverified**
- "200% increase in website engagement" — **unverified, likely fabricated**
- "leading conversational AI platform in Germany and the European market" — **unverified, likely overreach**
- Colour system (deep indigo, electric violet) — may be accurate, needs confirmation

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image | `img/cases/blablador-hero.jpg` | ✅ In place |
| Project thumbnail (srcset) | `img/projects/blablador-640/960/1280.jpg` | ✅ In place |
| Body images | — | ⚠️ None currently |
| Pull quote from client | — | ❌ Needed |
| Real metrics | — | ❌ Needed |

### Open Questions (interview needed)
- [ ] Where is Blablador actually based — Barcelona or Jülich?
- [ ] What was the actual scope: logo, full identity, UI components, all?
- [ ] Was there a Series A, or is that fabricated?
- [ ] What are real outcomes — users, media coverage, funding?
- [ ] Client quote?
- [ ] What was the central insight that shaped the visual direction?

---

## Case 7 — Qatar Airways
**File:** `work/qatar-airways.html`
**CSS:** `work-case.css` (shared)
**Status:** 🟡 Draft created — needs visual assets + factual enrichment from Behance/source files

### What's Verified
- **Client:** Qatar Airways
- **Role (Joniel):** Consulting Creative Director
- **Partner:** Wunderman PXP
- **Year:** 2016-2017
- **Project focus:** First-class travel experience
- **Project phases:** Pitch-winning phase + implementation
- **Core deliverables:** Website concept and design rollout
- **Positioning note:** Foundation created in the project is still in use (Joniel-confirmed)

### What's Placeholder
- Detailed sub-deliverables are intentionally high-level pending source extraction
- No quantified metrics included (qualitative impact used)

### Asset Checklist

| Asset | Path | Status |
|---|---|---|
| Hero image (temporary) | `img/clients/Qatar.svg` | ⚠️ Temporary placeholder |
| Case hero image (final) | `img/cases/qatar-airways-hero.jpg` | ❌ Needed |
| Project thumbnail srcset | `img/projects/qatar-airways-640/960/1280.jpg` | ❌ Needed |
| Body images | `img/cases/qatar-airways-*.jpg` | ❌ Needed |
| Behance image 1 | `img/cases/qatar-airways-behance-01-1600.jpg` | ❌ Needed |
| Behance image 2 | `img/cases/qatar-airways-behance-02-1600.jpg` | ❌ Needed |
| Behance image 3 | `img/cases/qatar-airways-behance-03-1600.jpg` | ❌ Needed |
| Video embed(s) | embed URL(s) from project videos | ⚠️ Optional / pending |
| Pull quote | — | ⚠️ Joniel voice used |
| Real metrics | — | ⚠️ Not provided |

### Open Questions (interview/source extraction needed)
- [ ] Confirm publish-safe deliverables list from Behance/source deck
- [ ] Add first 3 Behance visuals to page (priority)
- [ ] Add video embed(s) from project if desired
- [ ] Decide whether to add this case to `/work/index.html` and sitemap now or later

---

## Global Asset Notes

### Images In Place
- All 6 hero images: `img/cases/{slug}-hero.jpg` ✅
- Project thumbnails for 5 of 6 cases: `img/projects/{slug}-640/960/1280.jpg` ✅
  - TFWC uses different naming: `-900/-1400/-2000` ✅
  - `steen-digital.jpg` (base, non-sized) is missing — only `.png` exists

### Images Needed (when ready)
- Per-case body images — none of the cases currently have images inside the content sections. These should be added when final brand work is ready to show.
- Case-specific OG images — currently all cases use the default OG image. When campaign images are ready, TFWC at minimum should get a custom OG image.

---

## Deployment Notes
- **GitHub**: version control only. Pushing to GitHub does NOT trigger a Netlify deploy.
- **Deploy command**: `netlify deploy --prod` (run from project root after changes are committed)
- **Commit rule**: don't commit unless asked.
- **Classic GitHub PAT** (ghp_) still needed for pushing — fine-grained PAT was rejected (403).

---

## Session Log

### Session completed 2026-02-24
- TFWC: all sections updated (Challenge, Approach, Quote, Outcome, Results)
- Pull quote drafted in Nina/Daniel's voice — pending their sign-off
- case.md created as reference manuscript
- case-builder skill created at `.skills/skills/case-builder/SKILL.md`
- Radiologie Ahrensburg: interview in progress (next)

### Session continued 2026-02-24
- Radiologie Ahrensburg: all sections rewritten from verified source documents (3 PDFs: Kickoff, Strategy, Brand Guide)
- Fabricated numbers fully removed (30%, 4 weeks, 12 touchpoints → 1965 / 10 weeks / 6 deliverables)
- Real client quote from Dr. Leichert used as pull quote — formal sign-off pending
- `quote-attribution` class added to HTML — CSS check needed
- case.md updated with all verified facts
- Next: LM Alltagshilfe (interview needed)
