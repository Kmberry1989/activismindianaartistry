import type { Entry } from "@/lib/types";
import { normalizeEntries } from "@/lib/normalize";

/**
 * A simple similarity scorer:
 * - shared cause tags (strong)
 * - medium match (medium)
 * - same city/state (light)
 */
export function scoreSimilarity(a: Entry, b: Entry): number {
  if (a.id === b.id) return -1;

  let score = 0;

  const at = new Set(a.artwork.causeTags ?? []);
  const bt = new Set(b.artwork.causeTags ?? []);

  for (const t of at) {
    if (bt.has(t)) score += 3;
  }

  const am = (a.artwork.medium ?? "").toLowerCase();
  const bm = (b.artwork.medium ?? "").toLowerCase();
  if (am && bm && am === bm) score += 2;

  const ac = (a.artwork.city ?? "").toLowerCase();
  const bc = (b.artwork.city ?? "").toLowerCase();
  if (ac && bc && ac === bc) score += 1;

  const as = (a.artwork.state ?? "").toLowerCase();
  const bs = (b.artwork.state ?? "").toLowerCase();
  if (as && bs && as === bs) score += 0.5;

  return score;
}

export function getRelatedEntries(
  currentRaw: Entry,
  allRaw: Entry[],
  limit = 6
): Entry[] {
  const [current] = normalizeEntries([currentRaw]);
  const all = normalizeEntries(allRaw);

  const scored = all
    .map(e => ({ e, s: scoreSimilarity(current, e) }))
    .filter(x => x.s > 0)
    .sort((x, y) => y.s - x.s)
    .slice(0, limit)
    .map(x => x.e);

  return scored;
}
