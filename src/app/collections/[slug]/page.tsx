import { notFound } from "next/navigation";
import CollectionDetailPageClient from "@/components/collections/CollectionDetailPageClient";
import { collectionsData } from "@/lib/collections-data";
import { artists } from "@/lib/artists-data";
import { getCollectionBySlug } from "@/lib/collections-utils";

export default async function CollectionSlugPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const collection = getCollectionBySlug(collectionsData, resolvedParams.slug);
  if (!collection) return notFound();

  return (
    <CollectionDetailPageClient
      collection={collection}
      artists={artists}
    />
  );
}
