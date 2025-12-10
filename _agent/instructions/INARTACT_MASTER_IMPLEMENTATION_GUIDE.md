# Indiana Art Activist Inventory
## End-to-end implementation guide (Phase 0 → Phase 7)

This document is your master roadmap for integrating all feature batches that were built as separate downloadable files.  
It is designed to help you implement upgrades **without changing your existing homepage layout, header/hero structure, or footer**.

The guiding architectural rule is:

**Your current homepage stays as-is.**  
All new mission-forward features are added as new routes/components and linked via **additive nav items**.

---

## Overview of the system you now have

The upgraded ecosystem is organized into three layers:

### 1. Foundation layer (Phase 0)
A canonical data model and shared utilities that keep every page aligned:
- `types.ts`
- `normalize.ts`
- `filters.ts`
- `synonyms.ts`
- (optional) `useEntryFilters.ts`

These ensure:
- consistent cause tagging,
- robust date/decade handling,
- shared filter behavior across Directory/Map/Timeline/Analytics,
- safe forward compatibility.

### 2. Engagement and learning layer (Phases 2–6)
New user-facing experiences that deepen mission outcomes:
- Curated Collections
- Timeline+
- Educator resources
- Events
- Search+
- Saved list sharing
- Tours
- Zine Builder (v2)
- Related entries
- Community submissions

### 3. Infrastructure and ecosystem layer (Phase 7)
Features that let the project expand beyond the site:
- public JSON endpoints
- API docs
- PWA scaffold
- Reflections moderation + display
- collection intro Markdown renderer

---

## The zip files you’ve received (by batch)

You should already have these in your downloads from this chat:

1. **Collections + Timeline+ + Educator**
   - `inartact-collections-timeline-educator-batch.zip`

2. **Events + Shareable Saved Lists + Map Filter Bar**
   - `inartact-events-share-mapfilters-batch.zip`

3. **Map–Tours Bridge + Zine+ + Submissions Export + A11y primitives**
   - `inartact-map-tours-zine-a11y-community-batch.zip`

4. **Search+ + Related + Community Submit + Saved→Zine handoff**
   - `inartact-search-related-submissions-zinehandoff-batch.zip`

5. **PWA + Reflections + Collection Markdown + API Docs**
   - `inartact-pwa-reflections-markdown-api-docs-batch.zip`

If you also have earlier Phase 0/1 files from previous turns, integrate them first.

---

## Phase 0: Foundation integration

### Goal
Introduce canonical typing, normalization, and shared filters.

### What to add or reconcile
Place/merge these into `src/lib/`:
- `types.ts`
- `normalize.ts`
- `filters.ts`
- `synonyms.ts`

If your repo already has similarly named files:
- compare and merge rather than duplicate.

### Key technical expectations
- Your existing directory components expect a shape like:
  - `artist.artist.*`
  - `artist.artwork.*`
- The Phase 0 model maintains that shape and aliases:
  - `Artist = Entry`

### Quick verification
After adding Phase 0 files:
- the Directory page should still render,
- filtering should remain stable,
- and any timeline or analytics you already have should still compile.

---

## Homepage preservation rule

### Do NOT:
- change the homepage layout
- change header structure in the directory page
- rewrite hero content
- replace footer

### DO:
- append new nav items to your existing nav array.

You’ve been given optional nav extension files:
- `nav-extensions.phase2.ts`
- `nav-extensions.phase3.ts`
- `nav-extensions.phase4.ts`
- `nav-extensions.phase5.ts`
- `nav-extensions.phase6.ts`

**Pattern:**

```ts
// Example only — adjust imports to match your header implementation
import { BASE_NAV } from "@/lib/nav";
import { INARTACT_NAV_EXTENSIONS_PHASE3 } from "@/lib/nav-extensions.phase3";
import { INARTACT_NAV_EXTENSIONS_PHASE4 } from "@/lib/nav-extensions.phase4";
import { INARTACT_NAV_EXTENSIONS_PHASE5 } from "@/lib/nav-extensions.phase5";
import { INARTACT_NAV_EXTENSIONS_PHASE6 } from "@/lib/nav-extensions.phase6";

export const NAV = [
  ...BASE_NAV,
  ...INARTACT_NAV_EXTENSIONS_PHASE3,
  ...INARTACT_NAV_EXTENSIONS_PHASE4,
  ...INARTACT_NAV_EXTENSIONS_PHASE5,
  ...INARTACT_NAV_EXTENSIONS_PHASE6
];
```

This preserves the homepage header styling and layout.

---

## Phase 2: Collections + Timeline+ + Educator resources

### Files to add
- Collections data + utils
- Collection UI components
- `/collections` route
- `/collections/[slug]` route
- `/timeline/v2` route
- `/education` route
- `/api/collections` route

### Integration steps
1. Copy files into matching paths.
2. Ensure collections reference valid `entryIds` where possible.
3. Add optional intro text later using `introMarkdown`.

### Success checks
- `/collections` loads and shows cards.
- `/collections/[slug]` displays entries.
- `/timeline/v2` sorts chronologically using year parsing.

---

## Phase 3: Events + sharing + map filters

### Files to add
- `events-*`
- `/events`
- `/api/events`
- `MapFilterBar`

### Integration steps
1. Add `/events` route.
2. Seed real events over time.
3. Drop `MapFilterBar` into map page above the map.

### Success checks
- `/events` renders even with seed data.
- map filtering does not break existing markers.

---

## Phase 4/5: Tours + Zine+

### Files to add
- `useTours`
- `MapTourDock`
- `MapEntryPopupActions`
- Zine templates + `ZineBuilderV2`
- `/zine/v2`

### Dependencies
```bash
npm install jspdf
```

### Integration steps
1. Add `MapTourDock` in your map layout.
2. Render `MapEntryPopupActions` inside marker popups.
3. Add `/zine/v2` to nav as “Zine+”.

### Success checks
- Creating a tour persists locally.
- Adding stops works.
- PDF generation runs without runtime errors.

---

## Phase 6: Search+ + Related + Community submit + Saved→Zine

### Dependencies
```bash
npm install fuse.js
```

### Integration steps
1. Add `/search` in nav as “Search+”.
2. Mount `RelatedEntriesPanel` on artist detail pages.
3. Add `/community/submit` in nav as “Contribute”.
4. Add `/zine/v2/from-favorites` route.
5. Use `EntryActionBar` in:
   - Directory cards
   - Map popups
   - Artist profiles

### Success checks
- Search returns fuzzy matches.
- Related panel appears for entries with shared tags.
- Submission form stores local entries.

---

## Phase 7: PWA + Reflections + Markdown + API docs

### Dependencies
```bash
npm install react-markdown
```

### Integration steps
1. Add `manifest.ts` under `src/app/`.
2. Place `sw.js` in `/public`.
3. Add icons:
   - `/public/icons/icon-192.png`
   - `/public/icons/icon-512.png`
4. Render `<RegisterServiceWorker />` once in a shared layout.
5. Add `CollectionIntroMarkdown` into collection detail UI.
6. Add:
   - `/api/entries`
   - `/api-docs`
7. Add reflections moderation:
   - `/admin/reflections` (optional)
8. Add `ReflectionsPanel` to artist profiles.

### Success checks
- Browser can install the PWA.
- `/api-docs` renders.
- Reflections display when approved.

---

## Data quality & content safeguards

### Dates
- Prefer `dateStart` and `dateEnd` when known.
- Keep legacy `date` for backward compatibility.
- Use `getYearRange()` for timeline sorting.

### Locations
- When possible, include:
  - `city`, `state`, `lat`, `lng`.
- The normalization layer can infer city/state from `location`.

### Rights & credits
- Populate:
  - `imageUrl`, `alt`, `credit`, `rights`.
- Treat “unknown” cautiously for high-resolution assets.

---

## Performance & accessibility checklist

- Use the shared filter engine rather than bespoke filtering per page.
- Add ARIA labels to custom buttons.
- Use consistent focus patterns for new pages.

---

## Future CMS migration (planned path)

You can remain static now and still be migration-ready:
- Events schema already maps cleanly to a CMS model.
- Submissions export JSON can become an import pipeline.
- Collections `entryIds` can be stored as relational references later.

---

## Local dev recipe

```bash
npm install
npm run dev
```

## Production recipe

```bash
npm run build
npm run start
```

---

## Final sanity route list

After all phases, your site should include these new routes:

- `/collections`
- `/collections/[slug]`
- `/timeline/v2`
- `/education`
- `/events`
- `/search`
- `/favorites/share`
- `/zine/v2`
- `/zine/v2/from-favorites`
- `/community/submit`
- `/api/entries`
- `/api/collections`
- `/api/events`
- `/api-docs`
- `/admin/submissions` (optional)
- `/admin/reflections` (optional)

---

## The mission test

When you’ve integrated everything, the project should now do more than list entries.  
It should encourage four “next actions” for visitors:

1. Learn  
2. Explore  
3. Share  
4. Contribute

That’s how the site shifts from a directory into a statewide civic storytelling engine.
