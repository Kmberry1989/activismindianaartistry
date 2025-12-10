"use client";

import React, { useMemo } from "react";
import { getApprovedReflections } from "@/lib/reflections-moderation";

export default function ReflectionsPanel({
  entryId
}: {
  entryId?: string;
}) {
  const reflections = useMemo(() => {
    const all = getApprovedReflections();
    if (!entryId) return all;
    return all.filter(r => r.entryId === entryId);
  }, [entryId]);

  if (reflections.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="mb-3 text-sm font-semibold">
        Community reflections
      </div>

      <div className="grid gap-3">
        {reflections.map(r => (
          <div
            key={`refl-${r.id}`}
            className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-xs font-semibold">
                {r.authorName ?? "Anonymous"}
              </div>
              <div className="text-[10px] opacity-60">
                {new Date(r.createdAt).toLocaleDateString()}
              </div>
            </div>
            <p className="mt-2 text-sm opacity-80">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
