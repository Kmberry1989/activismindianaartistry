const fs = require('fs');
const path = require('path');

// This script requires a Google Custom Search API Key and CX (Search Engine ID)
// You can get these from https://developers.google.com/custom-search/v1/overview
// Set them as environment variables or hardcode them here for testing (not recommended for production)
const API_KEY = process.env.GOOGLE_API_KEY || '';
const CX = process.env.GOOGLE_CX || '';

const artistsDataPath = path.join(__dirname, '../src/lib/artists-data.ts');
const fetchedImagesPath = path.join(__dirname, 'fetched_images.json');

// Helper to extract artists from the TS file (simple regex parsing)
function getArtists() {
    const content = fs.readFileSync(artistsDataPath, 'utf8');
    // This regex is a bit fragile but works for the current structure
    // We need to extract id, name, and artwork title
    const artists = [];
    const idRegex = /"id":\s*"([^"]+)"/g;
    let match;

    // We'll iterate through the file and try to reconstruct objects roughly
    // Or better, let's just use the fact that the structure is consistent
    // and use a more robust regex to capture blocks.

    // Actually, since we are in Node, we can try to require the file if we transpile it, 
    // but it's TS. Let's stick to regex for safety against import errors.

    const blockRegex = /{\s*"id":\s*"([^"]+)",[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?"title":\s*"([^"]+)"/g;

    while ((match = blockRegex.exec(content)) !== null) {
        artists.push({
            id: match[1],
            name: match[2],
            artworkTitle: match[3]
        });
    }
    return artists;
}

async function searchImage(query) {
    if (!API_KEY || !CX) {
        console.error('Error: GOOGLE_API_KEY and GOOGLE_CX environment variables are required.');
        return null;
    }

    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${CX}&searchType=image&key=${API_KEY}&num=1&imgSize=large`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            return data.items[0].link;
        }
    } catch (e) {
        console.error(`Search failed for "${query}":`, e.message);
    }
    return null;
}

async function run() {
    if (!API_KEY || !CX) {
        console.log('Please set GOOGLE_API_KEY and GOOGLE_CX to run the backup fetch.');
        console.log('Example: set GOOGLE_API_KEY=... && set GOOGLE_CX=... && node scripts/fetch-backup-images.js');
        return;
    }

    const artists = getArtists();
    let fetchedImages = {};

    if (fs.existsSync(fetchedImagesPath)) {
        fetchedImages = JSON.parse(fs.readFileSync(fetchedImagesPath, 'utf8'));
    }

    console.log(`Found ${artists.length} artists in data.`);

    let updateCount = 0;

    for (const artist of artists) {
        // Check if we already have a good image
        // If it's missing, or if it looks like a placeholder/logo (heuristic)
        const currentImage = fetchedImages[artist.id];

        // Criteria for "needs backup":
        // 1. No image in fetched_images.json
        // 2. Image is a known placeholder (e.g. blank.jpg)
        // 3. User specifically asked to prioritize noted work, so maybe we overwrite if we think the current one is just a logo?
        //    For safety, let's just fill gaps first.

        const isMissing = !currentImage;
        const isPlaceholder = currentImage && (currentImage.includes('placeholder') || currentImage.includes('blank'));

        if (isMissing || isPlaceholder) {
            const query = `${artist.name} ${artist.artworkTitle} artwork`;
            console.log(`[${artist.id}] Fetching backup for: "${query}"...`);

            const imageUrl = await searchImage(query);

            if (imageUrl) {
                console.log(`    -> Found: ${imageUrl}`);
                fetchedImages[artist.id] = imageUrl;
                updateCount++;
                // Rate limit slightly
                await new Promise(r => setTimeout(r, 1000));
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
