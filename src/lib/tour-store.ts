import { safeGet, safeSet } from "@/lib/local-storage";
import type { TourDraft } from "@/lib/tour-types";

const KEY = "my_tours";

export function listTours(): TourDraft[] {
    return safeGet<TourDraft[]>(KEY, []);
}

export function createTour(init: { title: string }): TourDraft {
    const tours = listTours();
    const newTour: TourDraft = {
        id: crypto.randomUUID(),
        title: init.title,
        stops: [],
        createdAt: Date.now()
    };
    safeSet(KEY, [...tours, newTour]);
    return newTour;
}

export function updateTour(id: string, diff: Partial<TourDraft>) {
    const tours = listTours();
    const idx = tours.findIndex(t => t.id === id);
    if (idx === -1) return;

    const updated = { ...tours[idx], ...diff };
    tours[idx] = updated;
    safeSet(KEY, tours);
}

export function removeTour(id: string) {
    const tours = listTours().filter(t => t.id !== id);
    safeSet(KEY, tours);
}
