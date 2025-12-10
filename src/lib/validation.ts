import { z } from 'zod';

// Zod Schema for Artist Data
export const ArtistSchema = z.object({
    id: z.string(),
    artist: z.object({
        name: z.string().min(1, "Name is required"),
        bio: z.string().optional(),
        portraitUrl: z.string().optional(),
        website: z.string().url().optional().or(z.literal('')),
    }),
    artwork: z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().optional(),
        imageUrl: z.string().min(1, "Image URL is required"),
        alt: z.string().optional(), // Ensure accessibility alt text exists
        cause: z.string().optional(),
        location: z.string().optional(),
        latitude: z.number().optional(),
        longitude: z.number().optional(),
        city: z.string().optional(),
        year: z.string().optional(),
    })
});

export type Artist = z.infer<typeof ArtistSchema>;

// Helper to validate a list of artists
export function validateArtists(data: any[]) {
    const result = z.array(ArtistSchema).safeParse(data);
    if (!result.success) {
        console.error("Data Validation Error:", result.error.format());
        return [];
    }
    return result.data;
}