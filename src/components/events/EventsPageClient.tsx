"use client";

import React, { useMemo, useState } from "react";
import type { ActivistArtEvent } from "@/lib/events-types";
import { groupEventsByMonth, isUpcoming } from "@/lib/events-utils";

export default function EventsPageClient({
  events
}: {
  events: ActivistArtEvent[];
}) {
  const [showUpcomingOnly, setShowUpcomingOnly] = useState(true);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const now = Date.now();

    return events.filter(e => {
      if (showUpcomingOnly && !isUpcoming(e, now)) return false;

      if (!q) return true;

      const hay = [
        e.title,
        e.description,
        e.city,
        e.state,
        e.venue,
        e.eventType,
        ...(e.causeTags ?? [])
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return hay.includes(q);
    });
  }, [events, showUpcomingOnly, query]);

  const grouped = useMemo(() => groupEventsByMonth(filtered), [filtered]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="mt-1 text-sm opacity-80">
          A living calendar of art happenings across Indiana.
        </p>
      </div>

      <div className="mb-6 grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:grid-cols-[1fr,auto] sm:items-end text-card-foreground">
        <label className="block">
          <div className="mb-1 text-xs font-semibold">Search events</div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Title, city, cause, venue..."
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>

        <label className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={showUpcomingOnly}
            onChange={(e) => setShowUpcomingOnly(e.target.checked)}
          />
          Upcoming only
        </label>
      </div>

      {grouped.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm opacity-70 text-card-foreground">
          No events match these filters yet.
        </div>
      ) : (
        <div className="space-y-6">
          {grouped.map(({ month, events }) => (
            <section key={month}>
              <div className="mb-2 text-sm font-semibold">
                {month}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {events.map(e => (
                  <article
                    key={e.id}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm text-card-foreground"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold tracking-tight">
                        {e.title}
                      </h3>
                      {e.eventType ? (
                        <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[9px]">
                          {e.eventType}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-2 text-xs opacity-70">
                      {e.startDate}
                      {e.endDate ? ` → ${e.endDate}` : ""}
                    </div>

                    {(e.city || e.state || e.venue) ? (
                      <div className="mt-1 text-[11px] opacity-60">
                        {[e.venue, e.city, e.state].filter(Boolean).join(" • ")}
                      </div>
                    ) : null}

                    {e.description ? (
                      <div
                        className="mt-3 text-sm opacity-80"
                        dangerouslySetInnerHTML={{ __html: e.description }}
                      />
                    ) : null}

                    {e.causeTags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.causeTags.map(c => (
                          <span
                            key={`${e.id}-${c}`}
                            className="rounded-full border border-border bg-card px-2 py-0.5 text-[10px] opacity-70"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {e.url ? (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block text-xs font-medium underline underline-offset-4"
                      >
                        Event link
                      </a>
                    ) : (
                      <div className="mt-4 text-[10px] opacity-50">
                        Link pending
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
