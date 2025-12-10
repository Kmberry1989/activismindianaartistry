import React from "react";

export default function ApiDocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Data Endpoints</h1>
        <p className="mt-1 text-sm opacity-80">
          Public JSON endpoints for educators, researchers, and partner projects.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold">Entries</div>
          <div className="mt-1 text-xs opacity-70">
            Returns normalized entries with artist, artwork, media and tags.
          </div>
          <code className="mt-3 inline-block rounded bg-black/5 px-2 py-1 text-xs">
            GET /api/entries
          </code>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold">Collections</div>
          <div className="mt-1 text-xs opacity-70">
            Curated thematic groupings designed for exhibition-style browsing.
          </div>
          <code className="mt-3 inline-block rounded bg-black/5 px-2 py-1 text-xs">
            GET /api/collections
          </code>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold">Events</div>
          <div className="mt-1 text-xs opacity-70">
            Seeded calendar entries with upgrade path to a CMS.
          </div>
          <code className="mt-3 inline-block rounded bg-black/5 px-2 py-1 text-xs">
            GET /api/events
          </code>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold">Manifest</div>
          <div className="mt-1 text-xs opacity-70">
            PWA manifest for installable experiences.
          </div>
          <code className="mt-3 inline-block rounded bg-black/5 px-2 py-1 text-xs">
            GET /manifest.webmanifest
          </code>
        </div>
      </div>
    </div>
  );
}
