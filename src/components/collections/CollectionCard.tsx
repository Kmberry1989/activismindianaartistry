import React from "react";
import type { Collection } from "@/lib/types";
import Link from "next/link";

export default function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {collection.title}
          </h3>
          {collection.summary ? (
            <p className="mt-1 text-sm opacity-80">
              {collection.summary}
            </p>
          ) : null}
        </div>
        <span className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[9px]">
          Collection
        </span>
      </div>

      {collection.causeTags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {collection.causeTags.map(c => (
            <span
              key={`${collection.id}-${c}`}
              className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] opacity-70 group-hover:opacity-100"
            >
              {c}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-4 text-[11px] opacity-60">
        Explore this theme →
      </div>
    </Link>
  );
}
