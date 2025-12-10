/**
 * Tiny accessibility helpers to keep new UI consistent.
 * These are optional utilities that do not require homepage changes.
 */

export function ariaBool(value?: boolean) {
  return value ? "true" : "false";
}

export function joinLabel(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}
