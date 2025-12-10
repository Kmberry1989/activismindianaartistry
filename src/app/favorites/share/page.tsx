import { Suspense } from "react";
import FavoritesSharePageClient from "@/components/favorites/FavoritesSharePageClient";

export default function FavoritesSharePage() {
  return (
    <Suspense fallback={<div className="p-8 text-sm opacity-70">Loading...</div>}>
      <FavoritesSharePageClient />
    </Suspense>
  );
}
