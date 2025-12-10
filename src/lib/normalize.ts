import type { CauseTag, Entry, RightsLevel } from "./types";

const DEFAULT_RIGHTS: RightsLevel = "educational-ok";

const KNOWN_CAUSES: CauseTag[] = [
  "Racial Justice",
  "Women’s Rights",
  "LGBTQ+ Rights",
  "Environmental Justice",
  "Indigenous Rights",
  "Disability Rights",
  "Labor & Class",
  "Immigration",
  "Healthcare",
  "Voting Rights",
  "Education",
  "Anti-War",
  "Other"
];

function coerceNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

function parseYear(value?: string): number | undefined {
  if (!value) return undefined;
  const text = value.trim();
  if (text.length < 4) return undefined;

  // Try first 4 chars as a year (works for ISO and "2020-08")
  const head = text.slice(0, 4);
  if ([...head].every(ch => ch >= "0" && ch <= "9")) {
    const y = Number(head);
    if (y >= 1800 && y <= 2100) return y;
  }

  // Fallback: any 4-digit year inside text
  const match = text.match(/[0-9]{4}/);
  if (match) {
    const y = Number(match[0]);
    if (y >= 1800 && y <= 2100) return y;
  }

  return undefined;
}

export function getYearRange(entry: Entry): { startYear?: number; endYear?: number } {
  const { date, dateStart, dateEnd } = entry.artwork ?? {};
  const start = parseYear(dateStart) ?? parseYear(date);
  const end = parseYear(dateEnd);

  if (start && end && end < start) return { startYear: end, endYear: start };
  return { startYear: start, endYear: end ?? start };
}

export function getDecade(year?: number): number | undefined {
  if (!year) return undefined;
  return Math.floor(year / 10) * 10;
}

function mapLegacyCauseToTag(legacy?: string): CauseTag | undefined {
  if (!legacy) return undefined;
  const trimmed = legacy.trim();
  if (!trimmed) return undefined;

  const direct = KNOWN_CAUSES.find(c => c.toLowerCase() === trimmed.toLowerCase());
  if (direct) return direct;

  const lc = trimmed.toLowerCase();
  if (lc.includes("black lives") || lc === "blm") return "Racial Justice";
  if (lc.includes("women") || lc.includes("femin")) return "Women’s Rights";
  if (lc.includes("lgbt")) return "LGBTQ+ Rights";
  if (lc.includes("climate") || lc.includes("environment")) return "Environmental Justice";
  if (lc.includes("indigenous") || lc.includes("native")) return "Indigenous Rights";
  if (lc.includes("disab")) return "Disability Rights";
  if (lc.includes("labor") || lc.includes("union") || lc.includes("worker")) return "Labor & Class";
  if (lc.includes("immig")) return "Immigration";
  if (lc.includes("health")) return "Healthcare";
  if (lc.includes("vote") || lc.includes("election")) return "Voting Rights";
  if (lc.includes("education") || lc.includes("school")) return "Education";
  if (lc.includes("war") || lc.includes("peace")) return "Anti-War";

  return "Other";
}

export function normalizeCauseTags(entry: Entry): CauseTag[] {
  const legacyTag = mapLegacyCauseToTag(entry.artwork.cause);
  const tags = entry.artwork.causeTags ?? [];

  const merged = new Set<CauseTag>();
  for (const t of tags) merged.add(t);
  if (legacyTag) merged.add(legacyTag);

  return Array.from(merged);
}

function inferCityStateFromLocation(location?: string): { city?: string; state?: string } {
  if (!location) return {};
  const parts = location.split(",").map(p => p.trim()).filter(Boolean);
  if (parts.length >= 2) return { city: parts[0], state: parts[1] };
  return {};
}

export function normalizeEntry(entry: Entry): Entry {
  const normalized: Entry = {
    ...entry,
    artist: {
      isAlive: entry.artist.isAlive ?? true,
      ...entry.artist
    },
    artwork: {
      rights: entry.artwork.rights ?? DEFAULT_RIGHTS,
      ...entry.artwork
    }
  };

  normalized.artwork.lat = coerceNumber(normalized.artwork.lat);
  normalized.artwork.lng = coerceNumber(normalized.artwork.lng);

  normalized.artwork.causeTags = normalizeCauseTags(normalized);

  if (!normalized.artwork.city || !normalized.artwork.state) {
    const inferred = inferCityStateFromLocation(normalized.artwork.location);
    normalized.artwork.city = normalized.artwork.city ?? inferred.city;
    normalized.artwork.state = normalized.artwork.state ?? inferred.state;
  }

  return normalized;
}

export function normalizeEntries(entries: Entry[]): Entry[] {
  return entries.map(normalizeEntry);
}
