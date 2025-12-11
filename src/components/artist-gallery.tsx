"use client";

import Link from "next/link";

import { Artist } from "@/lib/types";
import { ArtistCard } from "@/components/artist-card";
import { motion } from "framer-motion";

interface ArtistGalleryProps {
  artists: Artist[];
}

export function ArtistGallery({ artists }: ArtistGalleryProps) {
  // Breakpoints for Masonry Layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered delay
            className="flex"
          >
            <ArtistCard artist={artist} priority={index < 8} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}