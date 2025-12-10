import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";
import { normalizeEntries } from "@/lib/normalize";

export const runtime = "nodejs";

export async function GET() {
  const entries = normalizeEntries(artistsData as any);

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    count: entries.length,
    entries
  });
}
