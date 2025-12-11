export interface TourStop {
    entryId: string;
    note?: string;
}

export interface TourDraft {
    id: string;
    title: string;
    stops: TourStop[];
    createdAt: number;
}
