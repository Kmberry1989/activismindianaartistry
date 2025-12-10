import CollectionsPageClient from "@/components/collections/CollectionsPageClient";
import { collectionsData } from "@/lib/collections-data";
import { artists } from "@/lib/artists-data";

export default function CollectionsPage() {
  return (
    <CollectionsPageClient
      collections={collectionsData}
      artists={artists}
    />
  );
}
