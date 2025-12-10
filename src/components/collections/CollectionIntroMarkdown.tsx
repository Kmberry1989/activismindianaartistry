"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

/**
 * Renders optional introMarkdown for a collection.
 * Install dependency:
 *   npm install react-markdown
 */
export default function CollectionIntroMarkdown({
  markdown
}: {
  markdown?: string;
}) {
  if (!markdown) return null;

  return (
    <div className="prose prose-sm max-w-none rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
