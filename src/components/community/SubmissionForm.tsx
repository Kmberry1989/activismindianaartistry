"use client";

import React, { useMemo, useState } from "react";
import { addSubmission, type SubmissionType } from "@/lib/submissions-store";
import type { CauseTag } from "@/lib/types";
import { buildAvailableCauses } from "@/lib/filters";
import { artists as artistsData } from "@/lib/artists-data";

const TYPES: Array<{ id: SubmissionType; label: string; help: string }> = [
  {
    id: "new-entry",
    label: "Add a new entry",
    help: "Suggest an Indiana activist artist or artwork not yet listed."
  },
  {
    id: "correction",
    label: "Fix existing info",
    help: "Propose a correction to an artist profile or artwork details."
  },
  {
    id: "takedown",
    label: "Request removal",
    help: "Ask for information to be removed or adjusted."
  },
  {
    id: "reflection",
    label: "Share a reflection",
    help: "Describe how a piece affected you or your community."
  }
];

export default function SubmissionForm() {
  const [type, setType] = useState<SubmissionType>("new-entry");
  const [artistName, setArtistName] = useState("");
  const [artworkTitle, setArtworkTitle] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("IN");
  const [description, setDescription] = useState("");
  const [urlsRaw, setUrlsRaw] = useState("");
  const [causeTags, setCauseTags] = useState<CauseTag[]>([]);
  const [doneId, setDoneId] = useState<string | null>(null);

  const availableCauses = useMemo(() => buildAvailableCauses(artistsData), []);

  function toggleCause(tag: CauseTag) {
    setCauseTags(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));
  }

  function submit() {
    const urls = urlsRaw
      .split(/\n|,/)
      .map(s => s.trim())
      .filter(Boolean);

    const record = addSubmission(type, {
      artistName: artistName.trim() || undefined,
      artworkTitle: artworkTitle.trim() || undefined,
      city: city.trim() || undefined,
      state: state.trim() || undefined,
      causeTags: causeTags.length ? causeTags : undefined,
      description: description.trim() || undefined,
      urls: urls.length ? urls : undefined
    });

    setDoneId(record.id);

    // Light reset
    setArtistName("");
    setArtworkTitle("");
    setCity("");
    setDescription("");
    setUrlsRaw("");
    setCauseTags([]);
  }

  const activeHelp = TYPES.find(t => t.id === type)?.help ?? "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Community Submissions</h1>
        <p className="mt-1 text-sm opacity-80">
          Help improve the Indiana Art Activist Inventory with additions,
          corrections, takedowns, or reflections.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-5 text-card-foreground">
        <div>
          <div className="text-xs font-semibold mb-2">Submission type</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {TYPES.map(t => (
              <label
                key={t.id}
                className={[
                  "flex cursor-pointer items-start gap-2 rounded-xl border p-3",
                  type === t.id ? "border-primary/40 bg-primary/5" : "border-border bg-card"
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="type"
                  checked={type === t.id}
                  onChange={() => setType(t.id)}
                  className="mt-1"
                />
                <div>
                  <div className="text-sm font-semibold">{t.label}</div>
                  <div className="text-[11px] opacity-70">{t.help}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {activeHelp ? (
          <div className="rounded-xl border border-border bg-muted p-3 text-[11px] opacity-80">
            {activeHelp}
          </div>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <div className="mb-1 text-xs font-semibold">Artist name</div>
            <input
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g., The Eighteen Art Collective"
            />
          </label>

          <label className="block">
            <div className="mb-1 text-xs font-semibold">Artwork / project title</div>
            <input
              value={artworkTitle}
              onChange={(e) => setArtworkTitle(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Optional"
            />
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <div className="mb-1 text-xs font-semibold">City</div>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Optional"
            />
          </label>

          <label className="block">
            <div className="mb-1 text-xs font-semibold">State</div>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="IN"
            />
          </label>
        </div>

        <div>
          <div className="text-xs font-semibold mb-2">Cause tags (optional)</div>
          <div className="flex flex-wrap gap-1.5">
            {availableCauses.map(c => {
              const active = causeTags.includes(c);
              return (
                <button
                  key={`sub-cause-${c}`}
                  type="button"
                  onClick={() => toggleCause(c)}
                  className={[
                    "rounded-full border px-2 py-0.5 text-[10px]",
                    active ? "border-primary/40 bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <label className="block">
          <div className="mb-1 text-xs font-semibold">
            Description / reflection / correction details
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Tell us what should be added/changed and why it matters."
          />
        </label>

        <label className="block">
          <div className="mb-1 text-xs font-semibold">
            Links (one per line or comma-separated)
          </div>
          <textarea
            value={urlsRaw}
            onChange={(e) => setUrlsRaw(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-ring"
            placeholder="Official sites, news articles, social posts, etc."
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={submit}
            className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-95"
          >
            Submit
          </button>
          <span className="text-[10px] opacity-60">
            Stored locally for now. You can export from the admin page later.
          </span>
        </div>

        {doneId ? (
          <div className="rounded-xl border border-border bg-card p-3 text-xs">
            Submission received locally: <span className="font-mono">{doneId}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
