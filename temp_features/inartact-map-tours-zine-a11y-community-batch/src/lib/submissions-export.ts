import { safeGet } from "@/lib/local-storage";

const KEY = "inartact:submissions:v1";

export interface RawSubmission {
  id: string;
  createdAt: string;
  type: "new-entry" | "correction" | "takedown" | "reflection";
  payload: any;
  status?: "pending" | "approved" | "rejected";
}

export function readSubmissions(): RawSubmission[] {
  return safeGet<RawSubmission[]>(KEY, []);
}

export function exportSubmissionsJson(): string {
  const data = readSubmissions();
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      count: data.length,
      submissions: data
    },
    null,
    2
  );
}
