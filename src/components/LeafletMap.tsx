import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Artist } from '@/lib/types';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

// Create a custom icon generator
const createCustomIcon = (imageUrl: string | undefined, headerColor: string = 'white') => {
    // Default fallback image if no portrait/artwork image is available
    const url = imageUrl || '/placeholder.jpg';

    return L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="
            background-image: url('${url}');
            background-size: cover;
            background-position: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid ${headerColor};
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};

function MapController({ selectedLocation }: { selectedLocation: { lat: number, lng: number } | null }) {
    const map = useMap();

    useEffect(() => {
        if (selectedLocation) {
            map.flyTo([selectedLocation.lat, selectedLocation.lng], 13, {
                animate: true,
                duration: 1.5
            });
        }
    }, [selectedLocation, map]);

    return null;
}

export default function LeafletMap({ artists }: { artists: Artist[] }) {
    // Ensure we only run on client to avoid window is not defined errors
    const [isMounted, setIsMounted] = useState(false);
    const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="h-full w-full bg-muted animate-pulse" />;

    const selectedArtist = artists.find(a => a.id === selectedArtistId);
    const selectedLocation = selectedArtist && selectedArtist.artwork.latitude && selectedArtist.artwork.longitude
        ? { lat: selectedArtist.artwork.latitude, lng: selectedArtist.artwork.longitude }
        : null;

    // Filter to valid map artists
    const mapArtists = artists.filter(a => a.artwork.latitude && a.artwork.longitude);

    return (
        <div className="flex flex-col md:flex-row h-full w-full">
            {/* Sidebar / Key */}
            <div className="w-full md:w-80 border-b md:border-b-0 md:border-r bg-card flex flex-col h-1/3 md:h-full order-2 md:order-1">
                <div className="p-4 border-b">
                    <h2 className="font-semibold text-lg flex items-center">
                        Locations Key
                        <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                            {mapArtists.length}
                        </span>
                    </h2>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="p-2 space-y-1">
                        {mapArtists.map(artist => (
                            <button
                                key={artist.id}
                                onClick={() => setSelectedArtistId(artist.id)}
                                className={cn(
                                    "w-full text-left p-3 rounded-lg text-sm transition-colors hover:bg-accent group border border-transparent",
                                    selectedArtistId === artist.id ? "bg-accent border-primary/20" : ""
                                )}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0 opacity-70 group-hover:opacity-100" />
                                    <div>
                                        <p className="font-medium leading-none mb-1 group-hover:text-primary transition-colors">
                                            {artist.artwork.location}
                                        </p>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                            {artist.artist.name}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 h-2/3 md:h-full relative order-1 md:order-2 z-0">
                <MapContainer
                    center={[39.7684, -86.1581] as [number, number]}
                    zoom={7}
                    style={{ height: '100%', width: '100%' }}
                    className="z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapController selectedLocation={selectedLocation} />

                    {mapArtists.map((artist) => {
                        const iconImage = artist.artist.portraitUrl || artist.artwork.imageUrl;
                        const isSelected = selectedArtistId === artist.id;

                        return (
                            <Marker
                                key={artist.id}
                                position={[artist.artwork.latitude!, artist.artwork.longitude!]}
                                icon={createCustomIcon(iconImage, isSelected ? '#3b82f6' : 'white')}
                                eventHandlers={{
                                    click: () => setSelectedArtistId(artist.id),
                                }}
                            >
                                <Popup>
                                    <div className="min-w-[200px]">
                                        <h3 className="font-bold text-lg">{artist.artist.name}</h3>
                                        <p className="text-sm font-medium mb-1">{artist.artwork.title}</p>
                                        <p className="text-xs text-muted-foreground mb-2">
                                            {artist.artwork.location}
                                        </p>
                                        <Link
                                            href={`/artists/${artist.id}`}
                                            className="text-primary hover:underline text-sm"
                                        >
                                            View Profile
                                        </Link>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        </div>
    );
}