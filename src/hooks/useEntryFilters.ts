import { useMemo, useState } from "react";
import type { FilterState } from "@/lib/filters";
import type { CauseTag } from "@/lib/types";

export function useEntryFilters(initial?: FilterState) {
  const [query, setQuery] = useState(initial?.query ?? "");

  const [causeTags, setCauseTags] = useState<CauseTag[]>(
    (initial?.causeTags as CauseTag[]) ?? []
  );

  const [mediums, setMediums] = useState<string[]>(
    (initial?.mediums as string[]) ?? []
  );

  const [decades, setDecades] = useState<number[]>(
    (initial?.decades as number[]) ?? []
  );

  const [city, setCity] = useState(initial?.city ?? "");
  const [state, setState] = useState(initial?.state ?? "");
  const [hasCoordinates, setHasCoordinates] = useState(
    initial?.hasCoordinates ?? false
  );

  const filters = useMemo<FilterState>(
    () => ({
      query: query.trim() || undefined,
      causeTags: causeTags.length ? causeTags : undefined,
      mediums: mediums.length ? mediums : undefined,
      decades: decades.length ? decades : undefined,
      city: city.trim() || undefined,
      state: state.trim() || undefined,
      hasCoordinates: hasCoordinates || undefined
    }),
    [query, causeTags, mediums, decades, city, state, hasCoordinates]
  );

  return {
    // state
    query,
    causeTags,
    mediums,
    decades,
    city,
    state,
    hasCoordinates,

    // setters
    setQuery,
    setCauseTags,
    setMediums,
    setDecades,
    setCity,
    setState,
    setHasCoordinates,

    // derived filter object
    filters
  };
}
