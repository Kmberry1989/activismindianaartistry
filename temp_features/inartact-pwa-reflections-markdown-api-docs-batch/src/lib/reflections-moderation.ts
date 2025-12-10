import { safeGet, safeSet } from "@/lib/local-storage";

const KEY = "inartact:submissions:v1";

export type SubmissionStatus = "pending" | "approved" | "rejected";

export interface StoredSubmission {
  id: string;
  createdAt: string;
  type: "new-entry" | "correction" | "takedown" | "reflection";
  payload: any;
  status?: SubmissionStatus;
}

/**
 * Read raw submissions from local storage.
 * Mirrors the schema used by the public submission form.
 */
export function readStoredSubmissions(): StoredSubmission[] {
  return safeGet<StoredSubmission[]>(KEY, []);
}

export function writeStoredSubmissions(next: StoredSubmission[]) {
  safeSet(KEY, next);
}

export function updateSubmissionStatus(id: string, status: SubmissionStatus) {
  const all = readStoredSubmissions();
  const next = all.map(s => (s.id === id ? { ...s, status } : s));
  writeStoredSubmissions(next);
}

/**
 * Pull approved reflections into a display-friendly shape.
 */
export function getApprovedReflections(): Array<{
  id: string;
  createdAt: string;
  authorName?: string;
  text: string;
  language?: string;
  entryId?: string;
}> {
  const all = readStoredSubmissions();

  return all
    .filter(s => s.type === "reflection" && (s.status ?? "pending") === "approved")
    .map(s => ({
      id: s.id,
      createdAt: s.createdAt,
      authorName: s.payload?.authorName,
      text: s.payload?.text ?? s.payload?.description ?? "",
      language: s.payload?.language,
      entryId: s.payload?.entryId
    }))
    .filter(r => r.text);
}
