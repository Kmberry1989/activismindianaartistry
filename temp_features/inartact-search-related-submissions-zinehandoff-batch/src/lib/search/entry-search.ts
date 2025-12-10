import Fuse from "fuse.js";
import type { Entry } from "@/lib/types";
import { normalizeEntries } from "@/lib/normalize";
import { CAUSE_SYNONYMS } from "@/lib/synonyms";

export interface SearchResult {
  item: Entry;
  score?: number;
  matches?: Fuse.FuseResultMatch[];
}

/**
 * Build a Fuse index for entries.
 * Keep keys aligned with your canonical data structure.
 */
export function buildEntrySearchIndex(entriesRaw: Entry[]) {
  const entries = normalizeEntries(entriesRaw);

  return new Fuse(entries, {
    includeScore: true,
    includeMatches: true,
    threshold: 0.35,
    ignoreLocation: true,
    keys: [
      { name: "artist.name", weight: 0.45 },
      { name: "artwork.title", weight: 0.35 },
      { name: "artwork.medium", weight: 0.2 },
      { name: "artwork.location", weight: 0.2 },
      { name: "artwork.city", weight: 0.15 },
      { name: "artwork.state", weight: 0.1 },
      { name: "artwork.causeTags", weight: 0.25 }
    ]
  });
}

/**
 * Expand a user query with cause synonyms.
 * Example: "BLM" -> also searches "Racial Justice".
 */
export function expandQueryWithCauseSynonyms(query: string): string[] {
  const q = query.trim();
  if (!q) return [];

  const out = new Set<string>([q]);

  for (const [cause, syns] of Object.entries(CAUSE_SYNONYMS)) {
    const all = [cause, ...syns];
    const hit = all.some(s => s.toLowerCase() === q.toLowerCase());
    if (hit) out.add(cause);
  }

  return Array.from(out);
}

export function searchEntries(
  fuse: Fuse<Entry>,
  query: string,
  limit = 40
): SearchResult[] {
  const queries = expandQueryWithCauseSynonyms(query);

  if (queries.length === 0) return [];

  const merged: SearchResult[] = [];
  const seen = new Set<string>();

  for (const q of queries) {
    const res = fuse.search(q, { limit });
    for (const r of res) {
      const id = r.item.id;
      if (seen.has(id)) continue;
      seen.add(id);
      merged.push(r);
    }
  }

  return merged.sort((a, b) => (a.score ?? 1) - (b.score ?? 1)).slice(0, limit);
}
