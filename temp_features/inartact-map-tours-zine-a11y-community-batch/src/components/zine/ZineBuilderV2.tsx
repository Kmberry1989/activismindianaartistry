"use client";

import React, { useMemo, useState } from "react";
import jsPDF from "jspdf";
import type { Artist } from "@/lib/types";
import { ZINE_TEMPLATES, type ZineTemplateId } from "@/lib/zine/zine-templates";
import { collectionsData } from "@/lib/collections-data";
import { getCollectionBySlug, getCollectionEntries } from "@/lib/collections-utils";

export default function ZineBuilderV2({
  artists,
  defaultIds
}: {
  artists: Artist[];
  defaultIds?: string[];
}) {
  const [title, setTitle] = useState("Indiana Activist Art Zine");
  const [templateId, setTemplateId] = useState<ZineTemplateId>("standard");
  const [collectionSlug, setCollectionSlug] = useState("");
  const [customIds, setCustomIds] = useState(defaultIds ?? []);

  const template = useMemo(
    () => ZINE_TEMPLATES.find(t => t.id === templateId) ?? ZINE_TEMPLATES[0],
    [templateId]
  );

  const selectedArtists = useMemo(() => {
    if (collectionSlug) {
      const col = getCollectionBySlug(collectionsData, collectionSlug);
      if (col) return getCollectionEntries(col, artists);
    }
    if (customIds.length) {
      const set = new Set(customIds);
      return artists.filter(a => set.has(a.id));
    }
    return artists.slice(0, 12);
  }, [collectionSlug, customIds, artists]);

  function generate() {
    const doc = new jsPDF({ unit: "pt", format: "letter" });

    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();

    const margin = 48;
    const gutter = template.columns === 2 ? 18 : 0;

    const colW = template.columns === 2
      ? (pageW - margin * 2 - gutter) / 2
      : (pageW - margin * 2);

    let x = margin;
    let y = margin;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(title, margin, y);
    y += 26;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(
      "Curated from the Indiana Art Activist Inventory.",
      margin,
      y
    );
    y += 24;

    let col = 0;

    function nextColumn() {
      if (template.columns === 1) {
        doc.addPage();
        x = margin;
        y = margin;
        return;
      }

      col = (col + 1) % 2;
      x = col === 0 ? margin : margin + colW + gutter;
      y = margin;

      if (col === 0) doc.addPage();
    }

    doc.setFontSize(11);

    for (const a of selectedArtists) {
      const blockH = 88;

      if (y + blockH > pageH - margin) {
        nextColumn();
      }

      doc.setFont("helvetica", "bold");
      doc.text(a.artist.name, x, y + 12);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.text(a.artwork.title ?? "Untitled", x, y + 28);

      const line3 = [
        a.artwork.medium,
        a.artwork.city,
        a.artwork.state
      ].filter(Boolean).join(" • ");

      if (line3) {
        doc.setFontSize(9);
        doc.text(line3, x, y + 42);
      }

      if (template.includeCauseTags && a.artwork.causeTags?.length) {
        const tagLine = a.artwork.causeTags.join(", ");
        doc.setFontSize(8);
        doc.text(tagLine, x, y + 56, { maxWidth: colW });
      }

      if (a.artist.bio) {
        const bio = a.artist.bio.slice(0, 140);
        doc.setFontSize(8);
        doc.text(bio, x, y + 70, { maxWidth: colW });
      }

      y += blockH;

      doc.setDrawColor(220);
      doc.line(x, y - 10, x + colW, y - 10);
    }

    doc.save("inartact-zine.pdf");
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Zine Builder (Enhanced)</h1>
        <p className="mt-1 text-sm opacity-80">
          Generate printable classroom zines from saved lists or curated collections.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <label className="block">
            <div className="mb-1 text-xs font-semibold">Zine title</div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
            />
          </label>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="text-xs font-semibold mb-2">Template</div>
          <div className="flex flex-wrap gap-2">
            {ZINE_TEMPLATES.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTemplateId(t.id)}
                className={[
                  "rounded-full border px-3 py-1 text-[11px]",
                  templateId === t.id
                    ? "border-black/40 bg-black text-white"
                    : "border-black/10 bg-white hover:bg-black/5"
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-2 text-[11px] opacity-60">
            {template.description}
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="text-xs font-semibold mb-2">
            Source
          </div>
          <label className="block">
            <div className="mb-1 text-[11px] opacity-70">
              Build from a collection (optional)
            </div>
            <select
              value={collectionSlug}
              onChange={(e) => setCollectionSlug(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            >
              <option value="">None</option>
              {collectionsData.map(c => (
                <option key={`zine-col-${c.id}`} value={c.slug}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-3 text-[11px] opacity-60">
            If no collection is selected, this builder uses your saved IDs
            (when provided) or a small default slice.
          </div>
        </div>

        <button
          onClick={generate}
          className="w-full rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
        >
          Generate PDF
        </button>
      </div>
    </div>
  );
}
