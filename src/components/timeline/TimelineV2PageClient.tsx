"use client";

import React, { useMemo, useState } from "react";
import type { Artist } from "@/lib/types";
import { ArtistCard } from "@/components/artist-card";
import { buildTimelineRows, sortTimelineRows } from "@/lib/timeline-utils";

export default function TimelineV2PageClient({ artists }: { artists: Artist[] }) {
  const [decade, setDecade] = useState<number | "All">("All");

  const rows = useMemo(() => sortTimelineRows(buildTimelineRows(artists)), [artists]);

  const decades = useMemo(() => {
    const set = new Set<number>();
    for (const r of rows) if (r.decade) set.add(r.decade);
    return Array.from(set).sort((a, b) => a - b);
  }, [rows]);

  const filtered = useMemo(() => {
    if (decade === "All") return rows;
    return rows.filter(r => r.decade === decade);
  }, [rows, decade]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Timeline (Enhanced)
        </h1>
        <p className="mt-1 text-sm opacity-80">
          Chronological view with reliable year parsing and decade navigation.
        </p>
        <div className="mt-2 text-[11px] opacity-60">
          This is a new page at <code className="rounded bg-muted px-1">/timeline/v2</code>
          so your current timeline remains untouched.
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-border bg-card p-4 shadow-sm text-card-foreground">
        <div className="text-xs font-semibold">Decade focus</div>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            onClick={() => setDecade("All")}
            className={[
              "rounded-full border px-3 py-1 text-[11px]",
              decade === "All" ? "border-primary/40 bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"
            ].join(" ")}
          >
            All
          </button>
          {decades.map(d => (
            <button
              key={d}
              onClick={() => setDecade(d)}
              className={[
                "rounded-full border px-3 py-1 text-[11px]",
                decade === d ? "border-primary/40 bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"
              ].join(" ")}
            >
              {d}s
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm opacity-70 text-card-foreground">
          No entries found for this decade.
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map(({ entry, startYear, endYear }) => (
            <div key={`tl2-${entry.id}`} className="rounded-2xl border border-border bg-card p-4 shadow-sm text-card-foreground">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-sm font-semibold">
                  {startYear
                    ? (endYear && endYear !== startYear ? `${startYear}–${endYear}` : `${startYear}`)
                    : "Date unknown"}
                </div>
                <div className="text-[10px] opacity-60">
                  {entry.artwork.location ?? "Indiana"}
                </div>
              </div>
              <ArtistCard artist={entry} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
