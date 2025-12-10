'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Palette, ArrowRight } from 'lucide-react';
import { Artist } from '@/lib/types';

interface ArtistCardProps {
  artist: Artist;
  priority?: boolean;
}

export function ArtistCard({ artist, priority = false }: ArtistCardProps) {
  const handleNavigate = () => {
    // Save current scroll position before navigating
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('directoryScrollPos', window.scrollY.toString());
    }
  };

  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-muted/60">
      <Link href={`/artists/${artist.id}`} className="block" onClick={handleNavigate}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted cursor-pointer">
          <Image
            src={artist.artwork.imageUrl || "/placeholder.svg?height=400&width=600"}
            alt={`Work by ${artist.artist.name}`}
            fill
            priority={priority}
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {!artist.artist.isAlive && (
            <Badge variant="secondary" className="absolute top-3 right-3 shadow-sm backdrop-blur-md bg-white/90 dark:bg-black/80">
              Historical
            </Badge>
          )}

          <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xs font-medium text-white/90 line-clamp-1">
              {artist.artwork.title}
            </p>
          </div>

          {artist.artwork.credit && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[11px] px-3 py-2 backdrop-blur-md z-10 flex items-center justify-center gap-1">
              <span className="font-semibold">Image credit:</span>
              <span className="truncate">{artist.artwork.credit}</span>
            </div>
          )}
        </div>
      </Link>

      <CardHeader className="p-5 pb-2">
        <div className="space-y-1">
          <h3 className="font-bold text-lg leading-tight tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
            {artist.artist.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{artist.artwork.title}</p>
        </div>
      </CardHeader>

      <CardContent className="flex-grow p-5 pt-2 space-y-3">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary/70" />
            <span className="truncate">{artist.artwork.medium}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary/70" />
            <span className="truncate">{artist.artwork.location}</span>
          </div>
        </div>

        <div className="pt-2">
          <Badge variant="outline" className="font-normal text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10">
            {artist.artwork.cause}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full group/btn" variant="secondary">
          <Link href={`/artists/${artist.id}`} onClick={handleNavigate}>
            View Profile
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}