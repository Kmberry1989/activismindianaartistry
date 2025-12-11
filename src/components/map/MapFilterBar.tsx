"use client";

import React, { useMemo } from "react";
import type { Artist } from "@/lib/types";
import type { FilterState } from "@/lib/filters";
import { buildAvailableCauses, buildAvailableMediums, buildAvailableDecades } from "@/lib/filters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function MapFilterBar({
  artists,
  value,
  onChange
}: {
  artists: Artist[];
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const causes = useMemo(() => buildAvailableCauses(artists), [artists]);
  const mediums = useMemo(() => buildAvailableMediums(artists), [artists]);
  const decades = useMemo(() => buildAvailableDecades(artists), [artists]);

  // Helper for single-select Cause (since user wants a dropdown list)
  // Converting from multi-tag array to single value for the dropdown interface
  const currentCause = value.causeTags?.[0] ?? "all";

  const handleCauseChange = (newVal: string) => {
    // If 'all' is selected, clear the filter. Otherwise set it as the single tag.
    const newTags = newVal === "all" ? undefined : [newVal];
    onChange({ ...value, causeTags: newTags });
  };

  const handleMediumChange = (newVal: string) => {
    const newMeds = newVal === "all" ? undefined : [newVal];
    onChange({ ...value, mediums: newMeds });
  };

  const handleDecadeChange = (newVal: string) => {
    const newDecs = newVal === "all" ? undefined : [Number(newVal)];
    onChange({ ...value, decades: newDecs });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-sm text-card-foreground">
      <div className="grid gap-3 md:grid-cols-[1fr,200px,180px,140px] md:items-center">

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={value.query ?? ""}
            onChange={(e) => onChange({ ...value, query: e.target.value || undefined })}
            placeholder="Search map entries..."
            className="pl-9 h-10 text-sm w-full bg-background"
          />
        </div>

        {/* Cause Dropdown */}
        <Select value={currentCause} onValueChange={handleCauseChange}>
          <SelectTrigger className="h-10 text-sm bg-background w-full">
            <SelectValue placeholder="All Causes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Causes</SelectItem>
            {causes.map((c) => (
              <SelectItem key={`cause-${c}`} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Medium Dropdown */}
        <Select value={value.mediums?.[0] ?? "all"} onValueChange={handleMediumChange}>
          <SelectTrigger className="h-10 text-sm bg-background w-full">
            <SelectValue placeholder="All Media" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Media</SelectItem>
            {mediums.map((m) => (
              <SelectItem key={`med-${m}`} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Decade Dropdown */}
        <Select value={value.decades?.[0]?.toString() ?? "all"} onValueChange={handleDecadeChange}>
          <SelectTrigger className="h-10 text-sm bg-background w-full">
            <SelectValue placeholder="All Decades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Decades</SelectItem>
            {decades.map((d) => (
              <SelectItem key={`dec-${d}`} value={d.toString()}>
                {d}s
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>
    </div>
  );
}
