# Indiana Art Activist Directory (ACT.IN.ART.)
## End-to-end implementation guide (Phase 0 → Phase 7)

This document is your master roadmap for integrating all feature batches built as separate downloadable zip files.  
It is designed to help you implement upgrades **without changing your existing homepage layout, header/hero structure, or footer**.

**Rule zero:** your current homepage stays exactly as it is.  
All new mission-forward capabilities are added as new routes/components and linked via additive navigation items.

---

## Architectural overview

The upgraded ecosystem is organized into three layers:

1. **Foundation (Phase 0)**
   - Canonical types, normalization, shared filters, cause synonyms.
   - Keeps Directory, Map, Timeline, and Analytics aligned.
   - Matches your existing data expectations (e.g., `artist.artist.*`, `artist.artwork.*`) with `Artist = Entry`.

2. **Engagement + learning (Phases 2–6)**
   - Collections, Timeline+, Educator resources, Events, Search+, Saved lists, Tours, Zine Builder (v2), Related entries, Community submissions.

3. **Ecosystem + distribution (Phase 7)**
   - Public JSON endpoints, API docs, PWA scaffold, Reflections moderation + display, Collection intro Markdown.

> The “Phase 0 Foundation Files” document in your workspace is the canonical specification for the data layer.

---

## Zip files (feature batches)

You should already have these in your downloads from this chat:

1. `inartact-collections-timeline-educator-batch.zip`  
2. `inartact-events-share-mapfilters-batch.zip`  
3. `inartact-map-tours-zine-a11y-community-batch.zip`  
4. `inartact-search-related-submissions-zinehandoff-batch.zip`  
5. `inartact-pwa-reflections-markdown-api-docs-batch.zip`  

The zip names may retain the previous label for continuity, but the brand for the live site is now ACT.IN.ART.

---

## Dependency checklist

Install these as features are added:

```bash
npm install fuse.js jspdf react-markdown
```

---

## Implementation order

1. **Create a new branch**
   - Example: `feature/actinart-expansion`.

2. **Phase 0**
   - Add/merge:
     - `src/lib/types.ts`
     - `src/lib/normalize.ts`
     - `src/lib/filters.ts`
     - `src/lib/synonyms.ts`
     - optional `src/hooks/useEntryFilters.ts`

3. **Phase 2**
   - Add Collections, Timeline+, Educator pages, and `/api/collections`.

4. **Phase 3**
   - Add Events, shareable favorites, map filter bar, and `/api/events`.

5. **Phase 4/5**
   - Add Tours bridging components and Zine Builder (v2).

6. **Phase 6**
   - Add Search+, Related entries, Community submission workflows, favorites → zine handoff.

7. **Phase 7**
   - Add PWA manifest, service worker, Reflections panel + local moderation, Collection intro Markdown, `/api/entries`, `/api-docs`.

---

## Homepage preservation checklist

Do not overwrite:
- your homepage route file,
- your header structure,
- your hero layout,
- your footer.

Do:
- append new nav items using the provided nav extension arrays.

---

## Final route checklist

After full integration, you should have:

- `/collections`, `/collections/[slug]`
- `/timeline/v2`
- `/education`
- `/events`
- `/search`
- `/favorites/share`
- `/zine/v2`, `/zine/v2/from-favorites`
- `/community/submit`
- `/api/entries`, `/api/collections`, `/api/events`
- `/api-docs`
- optional `/admin/submissions`, `/admin/reflections`

---

## Success criteria

The finished system should encourage four visitor journeys:

1. **Learn** — profiles, collections, timeline, educator resources  
2. **Explore** — map plus tours  
3. **Share** — saved lists and zines  
4. **Contribute** — submissions and reflections  

That is how ACT.IN.ART. becomes a statewide civic storytelling engine rather than a static listing.
