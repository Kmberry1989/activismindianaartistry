import { notFound } from "next/navigation";
import CollectionDetailPageClient from "@/components/collections/CollectionDetailPageClient";
import { collectionsData } from "@/lib/collections-data";
import { artists as artistsData } from "@/lib/artists-data";
import { getCollectionBySlug } from "@/lib/collections-utils";

export default function CollectionSlugPage({
  params
}: {
  params: { slug: string };
}) {
  const collection = getCollectionBySlug(collectionsData, params.slug);
  if (!collection) return notFound();

  return (
    <CollectionDetailPageClient
      collection={collection}
      artists={artistsData}
    />
  );
}
