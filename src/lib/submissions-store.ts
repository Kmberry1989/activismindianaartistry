import { safeGet, safeSet } from "@/lib/local-storage";
import type { CauseTag } from "@/lib/types";

const KEY = "inartact:submissions:v1";

export type SubmissionType = "new-entry" | "correction" | "takedown" | "reflection";

export interface SubmissionPayloadBase {
  artistName?: string;
  artworkTitle?: string;
  city?: string;
  state?: string;
  causeTags?: CauseTag[];
  description?: string;
  urls?: string[];
  contactName?: string;
  contactEmail?: string;
}

export interface SubmissionRecord {
  id: string;
  createdAt: string;
  type: SubmissionType;
  payload: SubmissionPayloadBase & Record<string, any>;
  status: "pending" | "approved" | "rejected";
}

export function readSubmissions(): SubmissionRecord[] {
  return safeGet<SubmissionRecord[]>(KEY, []);
}

export function addSubmission(
  type: SubmissionType,
  payload: SubmissionPayloadBase & Record<string, any>
): SubmissionRecord {
  const all = readSubmissions();
  const record: SubmissionRecord = {
    id: `sub-${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
    type,
    payload,
    status: "pending"
  };
  safeSet(KEY, [record, ...all]);
  return record;
}

export function clearSubmissions() {
  safeSet(KEY, []);
}
