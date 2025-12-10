import type { ActivistArtEvent } from "@/lib/events-types";

function parseDate(s?: string): number | undefined {
  if (!s) return undefined;
  const d = new Date(s);
  const t = d.getTime();
  return Number.isFinite(t) ? t : undefined;
}

export function sortEvents(list: ActivistArtEvent[]): ActivistArtEvent[] {
  return [...list].sort((a, b) => {
    const at = parseDate(a.startDate) ?? 0;
    const bt = parseDate(b.startDate) ?? 0;
    return at - bt;
  });
}

export function isUpcoming(event: ActivistArtEvent, now = Date.now()): boolean {
  const st = parseDate(event.startDate);
  const et = parseDate(event.endDate);
  if (et != null) return et >= now;
  if (st != null) return st >= now;
  return false;
}

export function groupEventsByMonth(list: ActivistArtEvent[]) {
  const map = new Map<string, ActivistArtEvent[]>();

  for (const e of sortEvents(list)) {
    const d = new Date(e.startDate);
    if (!Number.isFinite(d.getTime())) continue;
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  }

  return Array.from(map.entries()).map(([month, events]) => ({ month, events }));
}
