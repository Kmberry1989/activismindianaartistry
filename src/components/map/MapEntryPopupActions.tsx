"use client";

import React from "react";
import { useTours } from "@/hooks/useTours";
import { useFavorites } from "@/hooks/useFavorites";

/**
 * Lightweight action strip you can render inside
 * any map popup or card overlay.
 */
export default function MapEntryPopupActions({
  entryId
}: {
  entryId: string;
}) {
  const { active, addStop } = useTours();
  const { isFavorite, toggleFavorite } = useFavorites();

  const fav = isFavorite(entryId);

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        onClick={() => toggleFavorite(entryId)}
        className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
        aria-pressed={fav}
      >
        {fav ? "Saved" : "Save"}
      </button>

      <button
        onClick={() => {
          if (!active) return;
          addStop(entryId);
        }}
        className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
        title={active ? "Add to active tour" : "Select a tour first"}
        aria-disabled={!active}
      >
        Add to tour
      </button>
    </div>
  );
}
