"use client";

import React, { useMemo, useState } from "react";
import type { Artist } from "@/lib/types";
import { ArtistCard } from "@/components/artist-card";
import { useTours } from "@/hooks/useTours";

export default function MapTourDock({
  artists,
  className
}: {
  artists: Artist[];
  className?: string;
}) {
  const {
    tours,
    active,
    activeId,
    setActive,
    newTour,
    renameTour,
    deleteTour,
    removeStop
  } = useTours();

  const [titleDraft, setTitleDraft] = useState("");

  const activeStops = useMemo(() => {
    if (!active) return [];
    const set = new Set(active.stops.map((s: { entryId: string }) => s.entryId));
    return artists.filter(a => set.has(a.id));
  }, [active, artists]);

  return (
    <div
      className={[
        "rounded-2xl border border-border bg-card p-4 shadow-sm text-card-foreground",
        className ?? ""
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Tour builder</div>
        <button
          onClick={() => {
            const t = newTour();
            setTitleDraft(t.title);
          }}
          className="rounded-md bg-primary px-2 py-1 text-[10px] text-primary-foreground hover:bg-primary/90"
        >
          New tour
        </button>
      </div>

      <div className="mt-3">
        <div className="text-[11px] font-medium opacity-70">Select tour</div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tours.length === 0 ? (
            <span className="text-[10px] opacity-60">None yet</span>
          ) : (
            tours.map(t => (
              <button
                key={t.id}
                onClick={() => {
                  setActive(t.id);
                  setTitleDraft(t.title);
                }}
                className={[
                  "rounded-full border px-2 py-0.5 text-[10px]",
                  t.id === activeId
                    ? "border-primary/40 bg-primary text-primary-foreground"
                    : "border-border bg-card hover:bg-muted"
                ].join(" ")}
              >
                {t.title}
              </button>
            ))
          )}
        </div>
      </div>

      {active ? (
        <>
          <div className="mt-4">
            <div className="text-[11px] font-medium opacity-70">
              Rename active tour
            </div>
            <div className="mt-1 flex gap-2">
              <input
                value={titleDraft}
                onChange={(e) => setTitleDraft(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={() => renameTour(active.id, titleDraft.trim() || active.title)}
                className="rounded-xl border border-border bg-card px-3 py-2 text-xs hover:bg-muted"
              >
                Save
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-[11px] font-medium opacity-70">
              Stops ({activeStops.length})
            </div>
            <button
              onClick={() => deleteTour(active.id)}
              className="rounded-md border border-border bg-card px-2 py-1 text-[9px] hover:bg-muted"
            >
              Delete tour
            </button>
          </div>

          {activeStops.length === 0 ? (
            <div className="mt-2 rounded-xl border border-border bg-muted/50 p-3 text-xs opacity-70">
              Use “Add to tour” from a map popup or directory card.
            </div>
          ) : (
            <div className="mt-3 grid gap-3">
              {activeStops.map(a => (
                <div key={`dock-stop-${a.id}`} className="relative">
                  <ArtistCard artist={a} />
                  <button
                    onClick={() => removeStop(a.id)}
                    className="absolute right-3 top-3 rounded-full border border-border bg-card px-2 py-1 text-[10px] hover:bg-muted"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="mt-4 rounded-xl border border-border bg-muted/50 p-3 text-xs opacity-70">
          Create or select a tour to start adding stops.
        </div>
      )}
    </div>
  );
}
