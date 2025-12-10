"use client";

import React, { useMemo, useState } from "react";
import { exportSubmissionsJson, readSubmissions } from "@/lib/submissions-export";

export default function SubmissionsAdminPanel() {
  const [copied, setCopied] = useState(false);
  const data = useMemo(() => readSubmissions(), []);

  const json = useMemo(() => exportSubmissionsJson(), []);

  function copy() {
    try {
      navigator.clipboard.writeText(json);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  }

  function download() {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inartact-submissions-export.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Submissions Export (Prototype)
        </h1>
        <p className="mt-1 text-sm opacity-80">
          Export community submissions from local storage for review or import into a CMS later.
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">
            Local submissions
          </div>
          <span className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-[10px]">
            {data.length}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={copy}
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-xs hover:bg-black/5"
          >
            {copied ? "Copied" : "Copy JSON"}
          </button>
          <button
            onClick={download}
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-xs hover:bg-black/5"
          >
            Download JSON
          </button>
        </div>

        <pre className="mt-4 max-h-[420px] overflow-auto rounded-xl border border-black/10 bg-black/5 p-3 text-[10px] leading-relaxed">
{json}
        </pre>

        <div className="mt-2 text-[10px] opacity-50">
          This admin tool is safe to ship privately or behind a route guard later.
        </div>
      </div>
    </div>
  );
}
