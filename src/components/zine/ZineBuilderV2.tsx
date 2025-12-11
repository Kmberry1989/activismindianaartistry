"use client";

import React, { useMemo, useState, useRef } from "react";
import jsPDF from "jspdf";
import type { Artist } from "@/lib/types";
import { ZINE_TEMPLATES, type ZineTemplateId } from "@/lib/zine/zine-templates";
import { collectionsData } from "@/lib/collections-data";
import { getCollectionBySlug, getCollectionEntries } from "@/lib/collections-utils";
import { Button } from "@/components/ui/button";

// Stamp Logic
type StampType = "✊" | "🎨" | "📢" | "❤️" | "✨" | "🔥";
const STAMPS: StampType[] = ["✊", "🎨", "📢", "❤️", "✨", "🔥"];

interface PlacedStamp {
  id: string;
  type: StampType;
  x: number; // Percentage (0-100)
  y: number; // Percentage (0-100)
}

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

  // Stamp State
  const [activeStamp, setActiveStamp] = useState<StampType | null>(null);
  const [placedStamps, setPlacedStamps] = useState<PlacedStamp[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);

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

  // Handle placing a stamp on the preview
  const handlePreviewClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!activeStamp || !previewRef.current) return;

    const rect = previewRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPlacedStamps([
      ...placedStamps,
      { id: Date.now().toString(), type: activeStamp, x, y }
    ]);
    setActiveStamp(null); // Reset after placing
  };

  const undoLastStamp = () => {
    setPlacedStamps(prev => prev.slice(0, -1));
  };

  const clearStamps = () => {
    setPlacedStamps([]);
  };

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

    // Draw Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(title, margin, y);
    y += 26;

    // Draw Subtitle
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

    // Draw Artists
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

    // Draw Stamps (Only on the FIRST page for MVP simplicity, or mapped if we tracked pages)
    // For this MVP, we assume stamps are decoration for the COVER (first page).
    // If user stamps heavily, it stays on page 1.
    doc.setPage(1);
    doc.setFontSize(24); // Stamp size
    placedStamps.forEach(stamp => {
      const pdfX = (stamp.x / 100) * pageW;
      const pdfY = (stamp.y / 100) * pageH;
      doc.text(stamp.type, pdfX, pdfY);
    });

    doc.save("inartact-zine.pdf");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Zine Builder & Design Studio</h1>
        <p className="mt-1 text-sm opacity-80">
          Design your classroom zine. Use stamps to decorate, then download the PDF.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: Controls */}
        <div className="space-y-6">
          {/* 1. Configuration */}
          <div className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <span>1.</span> Configure
            </h2>

            <label className="block">
              <span className="text-xs font-semibold">Zine Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm bg-background"
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-semibold mb-1 block">Template</span>
                <select
                  value={templateId}
                  onChange={(e) => setTemplateId(e.target.value as ZineTemplateId)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  {ZINE_TEMPLATES.map(t => (
                    <option key={t.id} value={t.id}>{t.label}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold mb-1 block">Source Collection</span>
                <select
                  value={collectionSlug}
                  onChange={(e) => setCollectionSlug(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="">None (Use Defaults)</option>
                  {collectionsData.map(c => (
                    <option key={c.id} value={c.slug}>{c.title}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* 2. Decoration */}
          <div className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="font-bold text-lg flex items-center gap-2 justify-between">
              <div className="flex gap-2 items-center"><span>2.</span> Decorate</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={undoLastStamp} disabled={placedStamps.length === 0}>Undo</Button>
                <Button variant="ghost" size="sm" onClick={clearStamps} disabled={placedStamps.length === 0} className="text-destructive hover:text-destructive">Clear All</Button>
              </div>
            </h2>
            <div className="p-3 bg-muted/30 rounded-xl border border-dashed border-border">
              <p className="text-xs text-center mb-3 opacity-70">Click a stamp, then click on the preview to place it.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {STAMPS.map(stamp => (
                  <button
                    key={stamp}
                    onClick={() => setActiveStamp(stamp)}
                    className={`text-2xl w-10 h-10 flex items-center justify-center rounded-lg transition-all ${activeStamp === stamp ? 'bg-primary text-primary-foreground scale-110 shadow-md ring-2 ring-offset-2 ring-primary' : 'bg-background hover:bg-muted shadow-sm'}`}
                  >
                    {stamp}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Export */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <Button onClick={generate} size="lg" className="w-full font-bold shadow-lg">
              Download PDF ⬇
            </Button>
            <p className="text-center text-[10px] opacity-60 mt-2">
              Generates a letter-sized PDF compatible with standard printers.
            </p>
          </div>
        </div>

        {/* RIGHT: Live Preview */}
        <div className="sticky top-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-bold text-lg">Live Preview</h2>
            <span className="text-xs uppercase tracking-wider opacity-60 font-medium">Page 1 Surface</span>
          </div>

          {/* The Preview container mimics Letter Size aspect ratio (8.5 x 11) -> 0.7727 */}
          <div
            className="relative w-full rounded-sm overflow-hidden border shadow-xl bg-neutral-100 dark:bg-neutral-200 transition-all"
            style={{ aspectRatio: "0.7727 " }}
          >
            {/* Visual "Paper" Surface (Always White for PDF accuracy) */}
            <div
              ref={previewRef}
              onClick={handlePreviewClick}
              className={`absolute inset-0 bg-white ${activeStamp ? 'cursor-crosshair ring-4 ring-primary ring-inset' : 'cursor-default'}`}
            >
              {/* Simulated Content Layer */}
              <div className="absolute inset-0 p-8 select-none pointer-events-none opacity-90 scale-[0.6] origin-top-left w-[166%] h-[166%] text-black font-sans">
                {/* We force text-black and font-sans to mimic PDF output, ignoring theme */}
                <h1 className="text-4xl font-bold mb-4 leading-tight">{title}</h1>
                <p className="text-lg text-gray-700 mb-8">Curated from the Indiana Art Activist Inventory.</p>

                <div className={`grid gap-8 ${template.columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {selectedArtists.slice(0, template.columns === 1 ? 4 : 6).map(a => (
                    <div key={a.id} className="border-b border-gray-300 pb-4">
                      <div className="font-bold text-xl">{a.artist.name}</div>
                      <div className="text-lg font-medium">{a.artwork.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{a.artwork.medium} • {a.artwork.city}</div>
                    </div>
                  ))}
                </div>
                {selectedArtists.length > (template.columns === 1 ? 4 : 6) && (
                  <div className="mt-8 text-center text-gray-400 italic">...and more on next pages</div>
                )}
              </div>

              {/* Stamps Layer */}
              {placedStamps.map(stamp => (
                <div
                  key={stamp.id}
                  className="absolute text-4xl select-none pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${stamp.x}%`, top: `${stamp.y}%` }}
                >
                  {stamp.type}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            {activeStamp ? "👆 Click anywhere on the paper to place your stamp!" : "Select a stamp to decorate."}
          </p>
        </div>
      </div>
    </div>
  );
}
