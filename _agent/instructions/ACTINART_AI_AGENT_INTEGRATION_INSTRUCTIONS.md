# ACT.IN.ART. — AI Agent Integration Instructions
## How to integrate all zip files into the existing repository

This file is written for an AI agent (or a future-you using an AI assistant) to integrate all ACT.IN.ART.-related zip packages into the existing GitHub repository:

**Repository:** `Kmberry1989/inartact-8f9357d6d7e41612ebf28ccfac3af30428464210`

Because I cannot automatically inspect the repository structure from here, these instructions assume a standard Next.js + TypeScript layout with an App Router style structure:

- `src/app/...`
- `src/components/...`
- `src/lib/...`
- `public/...`

If your repo differs, the agent should map the files to the closest matching folders.

---

## Prime directive: protect the homepage

The current homepage is already loved in its deployed form.  
Therefore:

### Do not change
- the homepage layout
- the header structure and styling on the directory home
- the hero section
- the footer

### You may change only
- **navigation data arrays** to add links to new feature pages

This is the single most important constraint in all merges.

---

## Inventory of zip files to integrate

### Feature batch zips
These add new routes/components:

1. `inartact-collections-timeline-educator-batch.zip`
2. `inartact-events-share-mapfilters-batch.zip`
3. `inartact-map-tours-zine-a11y-community-batch.zip`
4. `inartact-search-related-submissions-zinehandoff-batch.zip`
5. `inartact-pwa-reflections-markdown-api-docs-batch.zip`

### Documentation zips (branding updated)
The marketing/strategy docs are now branded as ACT.IN.ART.:

- `actinart-marketing-docs.zip` (public + educator + master guide + flyer + handout + slide script)
- `actinart-all-docs.zip` (same plus this AI agent file)

---

## High-level integration order

The agent should implement in this sequence:

1. Create a new branch.
2. Integrate Phase 0 foundation modules (data + filters).
3. Integrate Phase 2 zip.
4. Integrate Phase 3 zip.
5. Integrate Phase 4/5 zip.
6. Integrate Phase 6 zip.
7. Integrate Phase 7 zip.
8. Update brand text in UI labels where relevant.
9. Install dependencies and run tests.
10. Create a PR with a structured changelog.

---

## Phase 0 foundation (canonical data layer)

The “Phase 0 Foundation Files” document in your workspace is the canonical reference for these modules:

- `src/lib/types.ts`
- `src/lib/normalize.ts`
- `src/lib/filters.ts`
- `src/lib/synonyms.ts`
- optional `src/hooks/useEntryFilters.ts`

### Agent instructions
- If any of these already exist in the repo, **merge** rather than overwrite.
- Preserve backward compatibility with your current data shape.
- Ensure `Artist = Entry` remains valid if legacy components rely on it.

### Quick compile check
After Phase 0:
- Directory should render normally.
- Existing filters should still function.
- No route regressions.

---

## Phase 2 zip: Collections + Timeline+ + Educator pages

### What this zip adds
- Curated collections data and components
- `/collections` and `/collections/[slug]`
- `/timeline/v2`
- `/education`
- `/api/collections`

### Agent steps
1. Copy files to matching paths.
2. Verify collections reference real `entryIds`.
3. Ensure timeline sorts by parsed years, not string order.
4. Add nav extensions to your header nav array.

---

## Phase 3 zip: Events + shareable favorites + map filter bar

### What this zip adds
- `/events` page and seed data
- `/favorites/share` page
- Map filter UI component
- `/api/events`

### Agent steps
1. Integrate events data/model.
2. Place map filter bar above the map component.
3. Ensure shareable favorites route does not conflict with existing favorites implementation.

---

## Phase 4/5 zip: Tours + Zine Builder enhancements + community utilities

### What this zip adds
- Local tour state
- Map popup “add to tour” actions
- Tour dock UI
- Zine Builder (v2) templates
- Submissions export prototype
- Accessibility primitives

### Agent steps
1. Mount tour dock in map page layout.
2. Render popup actions inside marker/popover UI.
3. Ensure zine route is `/zine/v2`.
4. Confirm export tools are optional and can remain unlinked publicly.

---

## Phase 6 zip: Search+ + Related + Community submission + Favorites → Zine

### What this zip adds
- `/search` with fuzzy search
- Related entries panel
- `/community/submit`
- `/zine/v2/from-favorites`

### Agent steps
1. Add Search+ route to navigation.
2. Mount related panel on entry detail pages.
3. Confirm submission storage is local-first for now.

---

## Phase 7 zip: PWA + Reflections + Markdown + API docs

### What this zip adds
- `src/app/manifest.ts`
- `public/sw.js`
- PWA registration component
- Reflections moderation + display
- Collection intro Markdown renderer
- `/api/entries`
- `/api-docs`

### Agent steps
1. Add icons under `public/icons/`:
   - `icon-192.png`
   - `icon-512.png`
2. Register service worker in a shared layout component.
3. Add reflections panel to entry detail UI.
4. Keep admin reflection page unlinked if you want a soft-launch.

---

## Dependencies

The agent should add these to `package.json`:

```bash
npm install fuse.js jspdf react-markdown
```

---

## Branding update pass (UI text)

The new brand is:

- **ACT.IN.ART.**
- Expanded meaning: **Activism Indiana Artistry**
- Replace generic “Inventory” labels in user-facing copy with **“Directory”**.

### Agent instructions
- Do not rename legacy data files unless necessary.
- Update only visible copy and new docs.

---

## Merge safety rules

When file conflicts happen:

1. Prefer **additive merges**.
2. Never overwrite the homepage route file.
3. Never rewrite the header layout component.
4. If nav is hard-coded in a component:
   - extend the array rather than replacing the markup.

---

## Post-merge verification checklist

The agent should confirm:

### Routes
- `/collections`
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

### Feature behaviors
- Fuzzy search returns sensible results.
- Tours can be created and saved locally.
- Zines generate PDFs without runtime errors.
- Collections render intros if present.
- Map filters do not break marker display.
- Timeline sorts correctly.

### Performance
- No unnecessary re-normalization inside tight loops.
- Optional: add marker clustering later.

---

## Recommended PR structure

The agent should open a PR with:

- A summary of all new routes
- A dependency list
- A note confirming homepage preservation
- A short testing log
- A follow-up task list for future CMS migration

---

## Reference documents for the agent

The agent should treat these as the narrative and architectural north star:

- `ACTINART_MASTER_IMPLEMENTATION_GUIDE.md`
- `ACTINART_PUBLIC_OVERVIEW.md`
- `ACTINART_EDUCATOR_OVERVIEW.md`
- The “Phase 0 Foundation Files” workspace document

---

## End state

When all zips are integrated, ACT.IN.ART. should function as:

- a directory that enables discovery,
- a storytelling platform through collections and timeline,
- a place-based engagement tool through map + tours,
- a shareable learning system through saved lists + zines,
- a community growth loop through submissions + reflections,
- and a reusable public data source via JSON APIs.

That is the full mission arc with minimal risk to the currently loved homepage.
