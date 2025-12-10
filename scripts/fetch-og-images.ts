import { artists } from '../src/lib/artists-data';
import ogs from 'open-graph-scraper';

async function fetchImages() {
    console.log('Fetching OG images for artists...');

    const updates: Record<string, string> = {};

    for (const item of artists) {
        const { id, artist } = item;
        let urlToScrape = artist.website;

        // Fallback to social media if no website
        if (!urlToScrape && artist.social_media && artist.social_media.length > 0) {
            urlToScrape = artist.social_media[0];
        }

        if (!urlToScrape) {
            console.log(`[${id}] No URL found for ${artist.name}`);
            continue;
        }

        try {
            const { result } = await ogs({ url: urlToScrape });

            if (result.success && result.ogImage && result.ogImage.length > 0) {
                const imageUrl = result.ogImage[0].url;
                console.log(`[${id}] Found image for ${artist.name}: ${imageUrl}`);
                updates[id] = imageUrl;
            } else {
                console.log(`[${id}] No OG image found for ${artist.name} at ${urlToScrape}`);
            }
        } catch (error) {
            console.error(`[${id}] Error fetching for ${artist.name} (${urlToScrape}):`, error);
        }
    }

    console.log('\n--- Summary of Updates ---');
    console.log(JSON.stringify(updates, null, 2));
}

fetchImages();
