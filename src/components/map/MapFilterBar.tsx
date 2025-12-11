"use client";

import React, { useMemo } from "react";
import type { Artist } from "@/lib/types";
import type { FilterState } from "@/lib/filters";
import { buildAvailableCauses, buildAvailableMediums, buildAvailableDecades } from "@/lib/filters";

export default function MapFilterBar({
  artists,
  value,
  onChange
}: {
  artists: Artist[];
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const causes = useMemo(() => buildAvailableCauses(artists), [artists]);
  const mediums = useMemo(() => buildAvailableMediums(artists), [artists]);
  const decades = useMemo(() => buildAvailableDecades(artists), [artists]);

  function toggle<T>(arr: T[] | undefined, item: T) {
    const list = arr ?? [];
    return list.includes(item) ? list.filter(x => x !== item) : [...list, item];
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-sm text-card-foreground">
      <div className="grid gap-3 md:grid-cols-[1fr,auto,auto,auto] md:items-center">
        <input
          value={value.query ?? ""}
          onChange={(e) => onChange({ ...value, query: e.target.value || undefined })}
          placeholder="Search map entries..."
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
        />

        <div className="flex flex-wrap gap-1">
          {causes.slice(0, 6).map(c => {
            const active = value.causeTags?.includes(c);
            return (
              <button
                key={`map-cause-${c}`}
                type="button"
                onClick={() => onChange({ ...value, causeTags: toggle(value.causeTags, c) })}
                className={[
                  "rounded-full border px-2 py-0.5 text-[10px]",
                  active ? "border-primary/40 bg-primary text-primary-foreground" : "border-border bg-background hover:bg-muted"
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        <select
          value={value.mediums?.[0] ?? ""}
          onChange={(e) =>
            onChange({ ...value, mediums: e.target.value ? [e.target.value] : undefined })
          }
          className="rounded-xl border border-border bg-background px-2 py-2 text-xs"
        >
          <option value="">All media</option>
          {mediums.map(m => (
            <option key={`map-med-${m}`} value={m}>{m}</option>
          ))}
        </select>

        <select
          value={value.decades?.[0] ?? ""}
          onChange={(e) =>
            onChange({ ...value, decades: e.target.value ? [Number(e.target.value)] : undefined })
          }
          className="rounded-xl border border-border bg-background px-2 py-2 text-xs"
        >
          <option value="">All decades</option>
          {decades.map(d => (
            <option key={`map-dec-${d}`} value={d}>{d}s</option>
          ))}
        </select>
      </div>
    </div>
  );
}
