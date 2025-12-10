import { NextResponse } from "next/server";
import { collectionsData } from "@/lib/collections-data";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    count: collectionsData.length,
    collections: collectionsData
  });
}
