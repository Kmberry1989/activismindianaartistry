"use client";

import React, { useMemo, useState } from "react";
import type { Artist, Collection } from "@/lib/types";
import CollectionCard from "@/components/collections/CollectionCard";
import { sortCollections } from "@/lib/collections-utils";
import { filterEntries } from "@/lib/filters";

export default function CollectionsPageClient({
  collections,
  artists
}: {
  collections: Collection[];
  artists: Artist[];
}) {
  const [query, setQuery] = useState("");

  const sorted = useMemo(() => sortCollections(collections), [collections]);

  const filteredCollections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;

    return sorted.filter(c =>
      c.title.toLowerCase().includes(q) ||
      (c.summary ?? "").toLowerCase().includes(q) ||
      (c.causeTags ?? []).some(t => t.toLowerCase().includes(q))
    );
  }, [sorted, query]);

  const suggestionCounts = useMemo(() => {
    // Simple measure: how many entries match each collection's cause
    const counts: Record<string, number> = {};
    for (const c of collections) {
      if (!c.causeTags?.length) {
        counts[c.id] = c.entryIds.length;
        continue;
      }
      const matches = filterEntries(artists, { causeTags: c.causeTags });
      counts[c.id] = matches.length;
    }
    return counts;
  }, [collections, artists]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Thematic Collections
        </h1>
        <p className="mt-1 text-sm opacity-80">
          Curated “exhibitions” that connect Indiana artworks to larger movements.
        </p>
      </div>

      <div className="mb-6 rounded-2xl border border-border bg-card p-4 shadow-sm text-card-foreground">
        <div className="text-xs font-semibold">Find a theme</div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search collections by title, summary, or cause..."
          className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

      </div>


      {filteredCollections.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm opacity-70 text-card-foreground">
          No collections match that search.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCollections.map(c => (
            <div key={c.id} className="relative">
              <CollectionCard collection={c} />
              <div className="pointer-events-none absolute right-5 bottom-5 rounded-full border border-border bg-card px-2 py-0.5 text-[9px] opacity-70">
                {suggestionCounts[c.id] ?? 0} matching entries
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
