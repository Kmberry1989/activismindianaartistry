"use client";

import React from "react";
import { educatorResources } from "@/lib/educator-resources";

export default function EducatorResourcesPageClient() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Educator Resources</h1>
        <p className="mt-1 text-sm opacity-80">
          Classroom-ready ways to use the Indiana Art Activist Inventory as a teaching tool.
        </p>
        <div className="mt-2 text-[11px] opacity-60">
          Seed content — designed for expansion into downloadable PDFs later.
        </div>
      </div>

      <div className="space-y-4">
        {educatorResources.map(r => (
          <div
            key={r.id}
            className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-lg font-semibold">{r.title}</div>
              {r.gradeBands?.length ? (
                <div className="text-[10px] opacity-60">
                  {r.gradeBands.join(" • ")}
                </div>
              ) : null}
            </div>

            <p className="mt-2 text-sm opacity-80">{r.summary}</p>

            {r.focusCauses?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {r.focusCauses.map(c => (
                  <span
                    key={`${r.id}-${c}`}
                    className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[10px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            ) : null}

            {r.activities?.length ? (
              <ul className="mt-4 list-disc pl-5 text-xs opacity-80 space-y-1">
                {r.activities.map((a, idx) => (
                  <li key={`${r.id}-act-${idx}`}>{a}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
