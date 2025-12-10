"use client";

import Link from "next/link";
import Masonry from "react-masonry-css";
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {artists.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered delay
            className="mb-4"
          >
            <ArtistCard artist={artist} priority={index < 8} />
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}