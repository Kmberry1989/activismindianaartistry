import { Suspense } from "react";
import ZineFromFavoritesPageClient from "@/components/zine/ZineFromFavoritesPageClient";

export default function ZineFromFavoritesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-sm opacity-70">Loading...</div>}>
      <ZineFromFavoritesPageClient />
    </Suspense>
  );
}
