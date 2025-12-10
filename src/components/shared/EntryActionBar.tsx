"use client";

import React, { useMemo, useState } from "react";
import { useTours } from "@/hooks/useTours";
import { useFavorites } from "@/hooks/useFavorites";

export default function EntryActionBar({
  entryId,
  compact
}: {
  entryId: string;
  compact?: boolean;
}) {
  const { active, addStop } = useTours();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [flash, setFlash] = useState<string | null>(null);

  const fav = isFavorite(entryId);

  function ping(msg: string) {
    setFlash(msg);
    window.setTimeout(() => setFlash(null), 900);
  }

  return (
    <div className={compact ? "flex flex-wrap gap-1.5" : "flex flex-wrap gap-2"}>
      <button
        onClick={() => {
          toggleFavorite(entryId);
          ping(fav ? "Removed" : "Saved");
        }}
        className={[
          "rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5",
          fav ? "font-semibold" : ""
        ].join(" ")}
        aria-pressed={fav}
      >
        {fav ? "Saved" : "Save"}
      </button>

      <button
        onClick={() => {
          if (!active) {
            ping("Select tour");
            return;
          }
          addStop(entryId);
          ping("Added");
        }}
        className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
        title={active ? "Add to active tour" : "Select a tour first"}
        aria-disabled={!active}
      >
        Add to tour
      </button>

      <a
        href="/zine/v2/from-favorites"
        className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
        title="Generate a zine from your saved list"
      >
        Zine from saved
      </a>

      {flash ? (
        <span className="self-center text-[9px] opacity-60">{flash}</span>
      ) : null}
    </div>
  );
}
