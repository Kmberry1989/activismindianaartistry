"use client";

import React, { useMemo, useState } from "react";
import {
  readStoredSubmissions,
  updateSubmissionStatus,
  type StoredSubmission
} from "@/lib/reflections-moderation";

export default function ReflectionsAdminPanel() {
  const [tick, setTick] = useState(0);

  const reflections = useMemo(() => {
    const all = readStoredSubmissions();
    return all.filter(s => s.type === "reflection");
  }, [tick]);

  function setStatus(id: string, status: "approved" | "rejected" | "pending") {
    updateSubmissionStatus(id, status);
    setTick(t => t + 1);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Reflections Moderation (Local Prototype)
        </h1>
        <p className="mt-1 text-sm opacity-80">
          Approve or reject community reflections stored in local storage.
        </p>
      </div>

      {reflections.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-8 text-center text-sm opacity-70">
          No reflections found yet.
        </div>
      ) : (
        <div className="space-y-3">
          {reflections.map((s: StoredSubmission) => {
            const status = s.status ?? "pending";
            const text = s.payload?.text ?? s.payload?.description ?? "";

            return (
              <div
                key={`refl-admin-${s.id}`}
                className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-semibold">
                    {s.payload?.authorName ?? "Anonymous"}
                  </div>
                  <span
                    className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[9px]"
                  >
                    {status}
                  </span>
                </div>

                <div className="mt-1 text-[10px] opacity-60">
                  {new Date(s.createdAt).toLocaleString()}
                </div>

                {s.payload?.entryId ? (
                  <div className="mt-1 text-[10px] opacity-60">
                    Entry ID: <span className="font-mono">{s.payload.entryId}</span>
                  </div>
                ) : null}

                {text ? (
                  <p className="mt-3 text-sm opacity-80">
                    {text}
                  </p>
                ) : (
                  <div className="mt-3 text-xs opacity-50">
                    No reflection text field found.
                  </div>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setStatus(s.id, "approved")}
                    className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setStatus(s.id, "rejected")}
                    className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setStatus(s.id, "pending")}
                    className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[10px] hover:bg-black/5"
                  >
                    Reset
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
