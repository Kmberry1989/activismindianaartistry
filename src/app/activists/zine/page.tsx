'use client';

import { useState } from 'react';
import { artists } from '@/lib/artists-data';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { trackEvent } from '@/app/actions/analytics';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

// --- Sortable Item Component ---
function SortableArtistItem({ artist, isSelected, onToggle }: any) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: artist.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} className="flex items-start space-x-3 p-4 border rounded-lg bg-background hover:bg-accent/50 transition-colors group relative">
            {/* Drag Handle */}
            <div {...attributes} {...listeners} className="mt-1 cursor-grab active:cursor-grabbing text-muted-foreground/50 hover:text-foreground">
                <GripVertical className="h-5 w-5" />
            </div>

            <Checkbox
                id={`artist-${artist.id}`}
                checked={isSelected}
                onCheckedChange={onToggle}
            />
            <div className="relative h-16 w-16 shrink-0 rounded bg-muted overflow-hidden">
                <Image
                    src={artist.artwork.imageUrl || '/placeholder.jpg'}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor={`artist-${artist.id}`}
                    className="text-sm font-medium leading-none cursor-pointer"
                >
                    {artist.artist.name}
                </label>
                <p className="text-xs text-muted-foreground line-clamp-1">{artist.artwork.title}</p>
                <p className="text-xs text-muted-foreground">{artist.artwork.cause}</p>
            </div>
        </div>
    );
}

export default function ZinePage() {
    const [selectedCause, setSelectedCause] = useState<string>('all');
    // Store IDs in order
    const [orderedArtistIds, setOrderedArtistIds] = useState<string[]>(artists.map(a => a.id));
    const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

    // Custom Cover State
    const [zineTitle, setZineTitle] = useState("ACT.IN.ART");
    const [zineSubtitle, setZineSubtitle] = useState("Art & Activism in Indiana");
    const [curatorName, setCuratorName] = useState("");

    // DnD Sensors
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    // Get unique causes
    const causes = Array.from(new Set(artists.map((a) => a.artwork.cause).filter(Boolean))).sort();

    // Derived list for display (filtered)
    const displayedArtists = orderedArtistIds
        .map(id => artists.find(a => a.id === id)!)
        .filter(a => selectedCause === 'all' || a.artwork.cause === selectedCause);

    const toggleArtist = (id: string) => {
        setSelectedArtists((prev) =>
            prev.includes(id)
                ? prev.filter((artistId) => artistId !== id)
                : [...prev, id]
        );
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setOrderedArtistIds((items) => {
                const oldIndex = items.indexOf(active.id as string);
                const newIndex = items.indexOf(over!.id as string);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    const handlePrint = () => {
        trackEvent('zine_print');
        window.print();
    };

    return (
        <div className="min-h-screen bg-background flex flex-col font-sans">
            <div className="print:hidden">
                <Header />
            </div>
            <main className="flex-1 container mx-auto py-8 px-4 print:p-0">
                {/* No-print controls */}
                <div className="print:hidden mb-8 space-y-6 mt-16">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Zine Generator</h1>
                        <p className="text-muted-foreground">
                            Select and reorder artists to create your custom zine.
                        </p>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg border space-y-4">
                        <h3 className="font-semibold">Cover Customization</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Zine Title</Label>
                                <Input value={zineTitle} onChange={(e) => setZineTitle(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Subtitle</Label>
                                <Input value={zineSubtitle} onChange={(e) => setZineSubtitle(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Curated By (Optional)</Label>
                                <Input placeholder="Your Name" value={curatorName} onChange={(e) => setCuratorName(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-end justify-between border-b pb-6">
                        <div className="space-y-2 w-[200px]">
                            <Label>Filter by Cause</Label>
                            <Select value={selectedCause} onValueChange={setSelectedCause}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a cause" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Causes</SelectItem>
                                    {causes.map((cause) => (
                                        <SelectItem key={cause} value={cause!}>
                                            {cause}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-muted-foreground mb-2">
                                {selectedArtists.length} artists selected
                            </p>
                            <Button onClick={handlePrint} disabled={selectedArtists.length === 0} size="lg">
                                Print / Save PDF
                            </Button>
                        </div>
                    </div>

                    {/* DnD Grid */}
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={displayedArtists.map(a => a.id)} strategy={rectSortingStrategy}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {displayedArtists.map((artist) => (
                                    <SortableArtistItem
                                        key={artist.id}
                                        artist={artist}
                                        isSelected={selectedArtists.includes(artist.id)}
                                        onToggle={() => toggleArtist(artist.id)}
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                </div>

                {/* Printable Layout */}
                <div className="hidden print:block">
                    <div className="grid grid-cols-2 gap-0">
                        {/* Cover Page */}
                        <div className="h-[100vh] w-full col-span-2 flex flex-col justify-center items-center text-center p-12 break-after-page">
                            <div className="border-4 border-black p-12 w-full h-full flex flex-col justify-center items-center">
                                <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter">{zineTitle}</h1>
                                <div className="w-24 h-2 bg-black mb-6"></div>
                                <p className="text-3xl font-light mb-12">{zineSubtitle}</p>

                                {curatorName && (
                                    <p className="text-xl mt-8">Curated by {curatorName}</p>
                                )}

                                <div className="mt-auto text-sm text-muted-foreground">
                                    <p>Generated on {new Date().toLocaleDateString()}</p>
                                    <p>actinart.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Artist Pages - Two per page (Half Letter) */}
                        {orderedArtistIds
                            .filter(id => selectedArtists.includes(id))
                            .map(id => artists.find(a => a.id === id)!)
                            .map((artist, index) => (
                                <div
                                    key={artist.id}
                                    className={`h-[50vh] flex flex-col p-8 border border-dashed border-gray-300 break-inside-avoid relative
                                    ${index % 2 === 0 ? 'border-r-2 border-r-black/10' : ''}
                                    ${Math.floor(index / 2) % 2 !== 0 ? 'bg-neutral-50' : ''}
                                `}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="pr-4">
                                            <h2 className="text-2xl font-bold leading-tight">{artist.artist.name}</h2>
                                            <p className="font-serif italic text-lg mt-1">{artist.artwork.title}</p>
                                        </div>
                                        <div className="relative h-32 w-32 shrink-0 border-2 border-black bg-white">
                                            <Image
                                                src={artist.artwork.imageUrl || '/placeholder.jpg'}
                                                alt={artist.artwork.title}
                                                fill
                                                className="object-cover grayscale contrast-125"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-sm leading-relaxed mb-4 font-serif text-justify">
                                        {artist.artist.bio}
                                    </p>

                                    <div className="mt-auto pt-4 border-t-2 border-black">
                                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                                            <span className="bg-black text-white px-2 py-1">{artist.artwork.cause}</span>
                                            <span>{artist.artwork.location}</span>
                                        </div>
                                    </div>

                                    {/* Page Number */}
                                    <div className="absolute bottom-2 right-2 text-[10px] text-gray-400">
                                        {index + 1}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </main>
            <div className="print:hidden">
                <Footer />
            </div>
        </div>
    );
}