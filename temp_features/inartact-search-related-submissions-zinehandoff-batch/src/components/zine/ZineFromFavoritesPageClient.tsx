"use client";

import React, { useMemo } from "react";
import ZineBuilderV2 from "@/components/zine/ZineBuilderV2";
import { artistsData } from "@/lib/artists-data";
import { safeGet } from "@/lib/local-storage";

const FAV_KEY = "inartact:favorites:v1";

export default function ZineFromFavoritesPageClient() {
  const favoriteIds = useMemo(
    () => safeGet<string[]>(FAV_KEY, []),
    []
  );

  return (
    <ZineBuilderV2
      artists={artistsData}
      defaultIds={favoriteIds}
    />
  );
}
