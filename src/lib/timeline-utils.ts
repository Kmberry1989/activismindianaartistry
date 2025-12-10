import type { Artist } from "@/lib/types";
import { getDecade, getYearRange, normalizeEntries } from "@/lib/normalize";

export interface TimelineRow {
  entry: Artist;
  startYear?: number;
  endYear?: number;
  decade?: number;
}

export function buildTimelineRows(artists: Artist[]): TimelineRow[] {
  const normalized = normalizeEntries(artists);
  return normalized.map(entry => {
    const { startYear, endYear } = getYearRange(entry);
    return {
      entry,
      startYear,
      endYear,
      decade: getDecade(startYear)
    };
  });
}

export function sortTimelineRows(rows: TimelineRow[]): TimelineRow[] {
  return [...rows].sort((a, b) => {
    const ay = a.startYear ?? 9999;
    const by = b.startYear ?? 9999;
    if (ay !== by) return ay - by;
    return a.entry.artist.name.localeCompare(b.entry.artist.name);
  });
}
