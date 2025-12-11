'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { artists } from '@/lib/artists-data';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import MapFilterBar from '@/components/map/MapFilterBar';
import { useEntryFilters } from '@/hooks/useEntryFilters';
import { filterEntries } from '@/lib/filters';

// Dynamically import the Map component to avoid SSR issues
const LeafletMap = dynamic(() => import('@/components/LeafletMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-muted">Loading map...</div>
});

export default function MapPage() {
    const [isMounted, setIsMounted] = useState(false);

    // 1. Initialize filter state
    const { filters, setQuery, setCauseTags, setMediums, setDecades } = useEntryFilters({
        hasCoordinates: true // Force map-only items by default? Or just filter implicitly?
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 2. Derive filtered results
    // We start with ALL artists, then filter by the hook's state
    const filteredArtists = filterEntries(artists, filters);

    // 3. Ensure we only pass items with coordinates to the map leaf
    const mapArtists = filteredArtists.filter(
        (artist) => typeof artist.artwork.lat === 'number' && typeof artist.artwork.lng === 'number'
    );

    if (!isMounted) {
        return null;
    }

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <Header />
            <main className="flex-1 container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-6">Activist Map</h1>
                <p className="text-muted-foreground mb-8">
                    Explore the locations of art and activism across Indiana.
                </p>

                {/* Filter Bar */}
                <div className="mb-6">
                    <MapFilterBar
                        artists={artists}
                        value={filters}
                        onChange={(next) => {
                            // The MapFilterBar passes a full FilterState object.
                            // We need to sync it back to our hook's setters.
                            // Note: useEntryFilters exposes individual setters, or we can just unpack 'next'.
                            setQuery(next.query ?? "");
                            setCauseTags(next.causeTags ?? []);
                            setMediums(next.mediums ?? []);
                            setDecades(next.decades ?? []);
                        }}
                    />
                </div>

                <Card className="overflow-hidden border-2">
                    <CardContent className="p-0 h-[600px]">
                        <LeafletMap artists={mapArtists} />
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
