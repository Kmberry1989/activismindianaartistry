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
    <div className="prose prose-sm max-w-none rounded-2xl border border-border bg-card p-5 shadow-sm text-card-foreground">
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
