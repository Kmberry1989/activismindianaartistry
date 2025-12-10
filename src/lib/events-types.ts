import type { CauseTag } from "@/lib/types";

export type EventType =
  | "exhibition"
  | "workshop"
  | "talk"
  | "protest"
  | "community"
  | "fundraiser"
  | "other";

export interface ActivistArtEvent {
  id: string;
  title: string;
  startDate: string; // ISO or YYYY-MM-DD
  endDate?: string;
  city?: string;
  state?: string;
  venue?: string;
  description?: string;
  eventType?: EventType;
  causeTags?: CauseTag[];
  url?: string;
  imageUrl?: string;
  alt?: string;
  isFeatured?: boolean;
}
