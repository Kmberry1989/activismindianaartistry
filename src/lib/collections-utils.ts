import type { Artist, Collection } from "@/lib/types";

/**
 * Sort collections by explicit order then title.
 */
export function sortCollections(list: Collection[]): Collection[] {
  return [...list].sort((a, b) => {
    const ao = a.order ?? 9999;
    const bo = b.order ?? 9999;
    if (ao !== bo) return ao - bo;
    return a.title.localeCompare(b.title);
  });
}

export function getCollectionBySlug(
  list: Collection[],
  slug: string
): Collection | undefined {
  return list.find(c => c.slug === slug);
}

/**
 * Returns entries for a collection using entryIds.
 * Falls back gracefully if IDs are placeholders.
 */
export function getCollectionEntries(
  collection: Collection,
  artists: Artist[]
): Artist[] {
  const map = new Map(artists.map(a => [a.id, a]));
  const out: Artist[] = [];

  for (const id of collection.entryIds) {
    const item = map.get(id);
    if (item) out.push(item);
  }

  // If entryIds are empty or placeholders, try a cause-tag fallback
  if (out.length === 0 && collection.causeTags?.length) {
    return artists.filter(a =>
      a.artwork.causeTags?.some(t => collection.causeTags!.includes(t))
    );
  }

  return out;
}
