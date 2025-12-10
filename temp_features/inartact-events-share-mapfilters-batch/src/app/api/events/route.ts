import { NextResponse } from "next/server";
import { eventsData } from "@/lib/events-data";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    count: eventsData.length,
    events: eventsData
  });
}
