"use client";

import React, { useMemo, useState } from "react";
import { encodeIdList } from "@/lib/share-links";

export default function ShareFavoritesPanel({
  favoriteIds
}: {
  favoriteIds: string[];
}) {
  const [copied, setCopied] = useState(false);

  const token = useMemo(() => encodeIdList(favoriteIds), [favoriteIds]);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const base = window.location.origin;
    return `${base}/favorites/share?ids=${token}`;
  }, [token]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="text-sm font-semibold">Share your saved list</div>
      <p className="mt-1 text-xs opacity-70">
        Generates a link that includes only entry IDs.
      </p>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          readOnly
          value={shareUrl}
          className="flex-1 rounded-xl border border-black/10 px-3 py-2 text-xs outline-none"
        />
        <button
          onClick={copy}
          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-xs hover:bg-black/5"
        >
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>

      <div className="mt-2 text-[10px] opacity-50">
        Future upgrade: short links + classroom sharing + QR export.
      </div>
    </div>
  );
}
