"use client";

import React, { useMemo } from "react";
import type { Artist, Collection } from "@/lib/types";
import { getCollectionEntries } from "@/lib/collections-utils";
import { ArtistCard } from "@/components/artist-card";

export default function CollectionDetailPageClient({
  collection,
  artists
}: {
  collection: Collection;
  artists: Artist[];
}) {
  const entries = useMemo(
    () => getCollectionEntries(collection, artists),
    [collection, artists]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <div className="text-[11px] font-mono opacity-60">
          Collection
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          {collection.title}
        </h1>
        {collection.summary ? (
          <p className="mt-1 text-sm opacity-80">
            {collection.summary}
          </p>
        ) : null}

        {collection.causeTags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {collection.causeTags.map(c => (
              <span
                key={`${collection.id}-${c}`}
                className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[10px]"
              >
                {c}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {entries.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-8 text-center text-sm opacity-70">
          This collection is ready for entry IDs.
          Add real IDs in <code className="rounded bg-black/5 px-1">collections-data.ts</code>.
        </div>
      ) : (
        <div>
          <div className="mb-2 text-sm font-semibold">
            Featured entries ({entries.length})
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map(a => (
              <ArtistCard key={`${collection.id}-${a.id}`} artist={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
