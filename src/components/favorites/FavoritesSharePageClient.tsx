"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { decodeIdList } from "@/lib/share-links";
import { artists } from "@/lib/artists-data";
import { ArtistCard } from "@/components/artist-card";

export default function FavoritesSharePageClient() {
  const params = useSearchParams();
  const token = params.get("ids") ?? "";

  const ids = useMemo(() => decodeIdList(token), [token]);
  const entries = useMemo(() => {
    const set = new Set(ids);
    return artists.filter(a => set.has(a.id));
  }, [ids]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Shared Saved List
        </h1>
        <p className="mt-1 text-sm opacity-80">
          A visitor-curated set of Indiana activist artworks.
        </p>
      </div>

      {ids.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-8 text-center text-sm opacity-70">
          This share link appears empty or invalid.
        </div>
      ) : entries.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-8 text-center text-sm opacity-70">
          These IDs don’t match the current dataset.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(a => (
            <ArtistCard key={`shared-fav-${a.id}`} artist={a} />
          ))}
        </div>
      )}
    </div>
  );
}
