import type { ActivistArtEvent } from "@/lib/events-types";

/**
 * Starter seed data.
 * Replace this with real Indiana events as you gather sources.
 * This intentionally keeps the schema small and future-CMS friendly.
 */
export const eventsData: ActivistArtEvent[] = [
  {
    id: "evt-seed-1",
    title: "Community Mural Skillshare (Seed Example)",
    startDate: "2025-01-15",
    city: "Indianapolis",
    state: "IN",
    venue: "Community Arts Space",
    eventType: "workshop",
    description:
      "A placeholder event demonstrating the public events pipeline. Replace with real listings.",
    causeTags: ["Racial Justice", "Education"],
    url: ""
  },
  {
    id: "evt-seed-2",
    title: "Environmental Art Walk (Seed Example)",
    startDate: "2025-04-20",
    city: "Bloomington",
    state: "IN",
    eventType: "community",
    description:
      "Seed example for future integration with partners, newsletters, or a CMS.",
    causeTags: ["Environmental Justice"],
    url: ""
  }
];
