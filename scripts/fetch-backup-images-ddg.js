const fs = require('fs');
const path = require('path');

const artistsDataPath = path.join(__dirname, '../src/lib/artists-data.ts');
const fetchedImagesPath = path.join(__dirname, 'fetched_images.json');

// Helper to extract artists from the TS file
function getArtists() {
    const content = fs.readFileSync(artistsDataPath, 'utf8');
    const artists = [];
    const blockRegex = /{\s*"id":\s*"([^"]+)",[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?"title":\s*"([^"]+)"/g;
    let match;
    while ((match = blockRegex.exec(content)) !== null) {
        artists.push({
            id: match[1],
            name: match[2],
            artworkTitle: match[3]
        });
    }
    return artists;
}

const { search, SafeSearchType } = require('duck-duck-scrape');

async function searchImage(query) {
    try {
        const results = await search(query, {
            searchType: 1, // 1 for images
            safeSearch: SafeSearchType.MODERATE
        });

        if (results.results && results.results.length > 0) {
            // results.results is an array of objects with 'image' property
            return results.results[0].image;
        }
    } catch (e) {
        console.error(`Search failed for "${query}":`, e.message);
    }
    return null;
}

async function run() {
    console.log('Starting backup image fetch using DuckDuckGo...');

    const artists = getArtists();
    let fetchedImages = {};

    if (fs.existsSync(fetchedImagesPath)) {
        fetchedImages = JSON.parse(fs.readFileSync(fetchedImagesPath, 'utf8'));
    }

    console.log(`Found ${artists.length} artists in data.`);

    let updateCount = 0;

    for (const artist of artists) {
        const currentImage = fetchedImages[artist.id];

        // Check if missing or placeholder
        // Also check if it's a "low res" or "generic" image if we can (hard to tell by URL)
        // For now, let's target missing and explicit placeholders
        const isMissing = !currentImage;
        const isPlaceholder = currentImage && (
            currentImage.includes('placeholder') ||
            currentImage.includes('blank') ||
            currentImage.includes('wixstatic') // Wix often serves low-res or generic assets if not careful, but maybe keep for now
        );

        // User said "prioritize a result for their noted work"
        // Let's try to fetch for everyone who doesn't have a manually verified "good" image?
        // That's risky. Let's stick to filling gaps first.

        if (isMissing || isPlaceholder) {
            // Construct query: "Artist Name Artwork Title"
            const query = `${artist.name} ${artist.artworkTitle} artwork`;
            console.log(`[${artist.id}] Fetching backup for: "${query}"...`);

            const imageUrl = await searchImage(query);

            if (imageUrl) {
                console.log(`    -> Found: ${imageUrl}`);
                fetchedImages[artist.id] = imageUrl;
                updateCount++;
                // Rate limit to be nice to DDG
                const delay = Math.floor(Math.random() * 5000) + 10000;
                console.log(`    -> Waiting ${delay}ms...`);
                await new Promise(r => setTimeout(r, delay));
            } else {
                console.log(`    -> No result found.`);
            }
        }
    }

    if (updateCount > 0) {
        fs.writeFileSync(fetchedImagesPath, JSON.stringify(fetchedImages, null, 2));
        console.log(`\nUpdated ${updateCount} images in fetched_images.json`);
        console.log('Run "node scripts/download-images.js" to download them.');
    } else {
        console.log('\nNo new images found or needed.');
    }
}

run();
