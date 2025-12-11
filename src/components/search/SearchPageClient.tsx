"use client";

import React, { useMemo, useState } from "react";
import { artists } from "@/lib/artists-data";
import { buildEntrySearchIndex, searchEntries } from "@/lib/search/entry-search";
import { ArtistCard } from "@/components/artist-card";

export default function SearchPageClient() {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => buildEntrySearchIndex(artists), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchEntries(fuse, query.trim(), 60);
  }, [fuse, query]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Search+</h1>
        <p className="mt-1 text-sm opacity-80">
          Fuzzy search with cause synonyms and ranked relevance.
        </p>
      </div>

      <div className="mb-6 rounded-2xl border border-border bg-card p-4 shadow-sm text-card-foreground">
        <div className="text-xs font-semibold">Search the inventory</div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try BLM, climate, murals, Indianapolis..."
          className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />

      </div>

      {!query.trim() ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm opacity-70 text-card-foreground">
          Start typing to see fuzzy matches.
        </div>
      ) : results.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm opacity-70 text-card-foreground">
          No matches found.
        </div>
      ) : (
        <div>
          <div className="mb-2 text-sm font-semibold">
            Results ({results.length})
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(r => (
              <ArtistCard key={`search-${r.item.id}`} artist={r.item as any} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
