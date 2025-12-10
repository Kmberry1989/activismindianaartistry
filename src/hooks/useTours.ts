"use client";

import { useEffect, useMemo, useState } from "react";
import type { TourDraft } from "@/lib/tour-types";
import {
  listTours,
  createTour,
  updateTour,
  removeTour
} from "@/lib/tour-store";

export function useTours() {
  const [tours, setTours] = useState<TourDraft[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  function refresh() {
    setTours(listTours());
  }

  useEffect(() => {
    refresh();
  }, []);

  const active = useMemo(
    () => tours.find(t => t.id === activeId) ?? null,
    [tours, activeId]
  );

  function newTour(title?: string) {
    const t = createTour({ title: title ?? "New tour" });
    setActiveId(t.id);
    refresh();
    return t;
  }

  function renameTour(id: string, title: string) {
    updateTour(id, { title });
    refresh();
  }

  function deleteTour(id: string) {
    removeTour(id);
    if (activeId === id) setActiveId(null);
    refresh();
  }

  function addStop(entryId: string, note?: string) {
    if (!active) return;
    if (active.stops.some(s => s.entryId === entryId)) return;

    updateTour(active.id, {
      stops: [...active.stops, { entryId, note }]
    });
    refresh();
  }

  function removeStop(entryId: string) {
    if (!active) return;
    updateTour(active.id, {
      stops: active.stops.filter(s => s.entryId !== entryId)
    });
    refresh();
  }

  function setActive(id: string | null) {
    setActiveId(id);
  }

  return {
    tours,
    active,
    activeId,
    setActive,
    refresh,
    newTour,
    renameTour,
    deleteTour,
    addStop,
    removeStop
  };
}
