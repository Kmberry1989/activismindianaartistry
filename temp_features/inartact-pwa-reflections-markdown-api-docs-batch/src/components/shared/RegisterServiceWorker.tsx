"use client";

import { useEffect } from "react";

/**
 * Registers /sw.js for PWA offline capabilities.
 * Render this once in a high-level layout (not on the homepage
 * if you truly want zero changes there).
 *
 * Recommended: add to a shared root layout component.
 */
export default function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const onLoad = () => {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(() => {});
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
