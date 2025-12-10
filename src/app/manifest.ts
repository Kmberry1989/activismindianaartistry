import type { MetadataRoute } from "next";

/**
 * PWA manifest.
 * Adjust name/short_name/icons to match your brand assets.
 *
 * This route will be served at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Indiana Art Activist Inventory",
    short_name: "InArtAct",
    description:
      "An informative directory of Indiana activist artists and artworks designed to inspire civic imagination.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
