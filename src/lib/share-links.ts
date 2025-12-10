/**
 * Encode/decode shareable lists using URL-safe base64.
 * This is intentionally lightweight and privacy-conscious:
 * only entry IDs are shared.
 */

function toBase64Url(bytes: Uint8Array) {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  const b64 = btoa(str);
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(b64url: string) {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = b64.length % 4 === 0 ? "" : "=".repeat(4 - (b64.length % 4));
  const bin = atob(b64 + pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export function encodeIdList(ids: string[]): string {
  const json = JSON.stringify(Array.from(new Set(ids)));
  const bytes = new TextEncoder().encode(json);
  return toBase64Url(bytes);
}

export function decodeIdList(token: string): string[] {
  try {
    const bytes = fromBase64Url(token);
    const json = new TextDecoder().decode(bytes);
    const arr = JSON.parse(json);
    return Array.isArray(arr) ? arr.filter(x => typeof x === "string") : [];
  } catch {
    return [];
  }
}
