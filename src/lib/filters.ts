import type { CauseTag, Entry } from "./types";
import { getDecade, getYearRange, normalizeEntries } from "./normalize";

export interface FilterState {
  query?: string;
  causeTags?: CauseTag[];
  mediums?: string[];
  decades?: number[];
  city?: string;
  state?: string;
  hasCoordinates?: boolean;
}

function includesCI(hay?: string, needle?: string) {
  if (!hay || !needle) return false;
  return hay.toLowerCase().includes(needle.toLowerCase());
}

export function buildAvailableCauses(entries: Entry[]): CauseTag[] {
  const set = new Set<CauseTag>();
  for (const e of normalizeEntries(entries)) {
    for (const c of e.artwork.causeTags ?? []) set.add(c);
  }
  return Array.from(set).sort();
}

export function buildAvailableMediums(entries: Entry[]): string[] {
  const set = new Set<string>();
  for (const e of entries) {
    const m = e.artwork.medium?.trim();
    if (m) set.add(m);
  }
  return Array.from(set).sort();
}

export function buildAvailableDecades(entries: Entry[]): number[] {
  const set = new Set<number>();
  for (const e of entries) {
    const { startYear } = getYearRange(e);
    const decade = getDecade(startYear);
    if (decade) set.add(decade);
  }
  return Array.from(set).sort((a, b) => a - b);
}

export function filterEntries(entriesRaw: Entry[], filters: FilterState): Entry[] {
  const entries = normalizeEntries(entriesRaw);
  const { query, causeTags, mediums, decades, city, state, hasCoordinates } = filters;

  return entries.filter(e => {
    const artistName = e.artist.name;
    const title = e.artwork.title;
    const medium = e.artwork.medium ?? "";
    const location = e.artwork.location ?? "";
    const cityValue = e.artwork.city ?? "";
    const stateValue = e.artwork.state ?? "";
    const tags = e.artwork.causeTags ?? [];

    if (query) {
      const q = query.trim();
      const match =
        includesCI(artistName, q) ||
        includesCI(title, q) ||
        includesCI(medium, q) ||
        includesCI(location, q) ||
        includesCI(cityValue, q) ||
        includesCI(stateValue, q);
      if (!match) return false;
    }

    if (causeTags?.length) {
      const hasAny = causeTags.some(t => tags.includes(t));
      if (!hasAny) return false;
    }

    if (mediums?.length) {
      const hasAny = mediums.some(m => includesCI(medium, m));
      if (!hasAny) return false;
    }

    if (decades?.length) {
      const { startYear } = getYearRange(e);
      const dec = getDecade(startYear);
      if (!dec || !decades.includes(dec)) return false;
    }

    if (city && !includesCI(cityValue || location, city)) return false;
    if (state && !includesCI(stateValue || location, state)) return false;

    if (hasCoordinates) {
      if (typeof e.artwork.lat !== "number" || typeof e.artwork.lng !== "number") {
        return false;
      }
    }

    return true;
  });
}
