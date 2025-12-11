"use client";

import React, { useMemo } from "react";
import type { Artist } from "@/lib/types";
import { ArtistCard } from "@/components/artist-card";
import { getRelatedEntries } from "@/lib/related-entries";

export default function RelatedEntriesPanel({
  current,
  artists
}: {
  current: Artist;
  artists: Artist[];
}) {
  const related = useMemo(
    () => getRelatedEntries(current, artists, 6),
    [current, artists]
  );

  if (related.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="mb-3 text-sm font-semibold">
        Related artists & projects
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map(a => (
          <ArtistCard key={`rel-${current.id}-${a.id}`} artist={a} />
        ))}
      </div>
    </div>
  );
}
