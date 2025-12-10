const fs = require('fs');
const path = require('path');
const { search, SafeSearchType } = require('duck-duck-scrape');

const artistsDataPath = path.join(__dirname, '../src/lib/artists-data.ts');
const fetchedAssetsPath = path.join(__dirname, 'fetched_assets.json');

// --- Configuration ---
const BASE_DELAY = 15000;   // INCREASE TO 15 SECONDS (was 6000)
const RANDOM_JITTER = 5000; // INCREASE TO 5 SECONDS (was 3000)
const MAX_RETRIES = 5;      // Increase retries
const ERROR_WAIT = 120000;  // WAIT 2 MINUTES ON ERROR (was 30000)

// Helper to pause execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to extract artists from the TS file
function getArtists() {
    if (!fs.existsSync(artistsDataPath)) {
        console.error("Error: Could not find artists-data.ts at", artistsDataPath);
        process.exit(1);
    }
    const content = fs.readFileSync(artistsDataPath, 'utf8');
    const artists = [];
    const blockRegex = /{\s*"id":\s*"([^"]+)",[\s\S]*?"artist":\s*{[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"artwork":\s*{[\s\S]*?"title":\s*"([^"]+)"/g;
    
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

// Robust Search Function with Retries
async function searchImageWithRetry(query) {
    let attempt = 0;
    
    while (attempt < MAX_RETRIES) {
        try {
            const results = await search(query, {
                searchType: 1, // 1 for images
                safeSearch: SafeSearchType.MODERATE
            });
            
            if (results.results && results.results.length > 0) {
                return results.results[0].image;
            }
            return null; // No results found, but no error
            
        } catch (e) {
            attempt++;
            console.error(`   [!] Rate limit or network error for "${query}". Attempt ${attempt}/${MAX_RETRIES}`);
            console.error(`       Waiting ${ERROR_WAIT / 1000} seconds before retrying...`);
            await sleep(ERROR_WAIT);
        }
    }
    console.error(`   [X] Failed to fetch "${query}" after ${MAX_RETRIES} attempts.`);
    return null;
}

async function run() {
    console.log('Starting batch image search (Slow Mode to prevent Rate Limiting)...');
    const artists = getArtists();
    let assets = {};

    // Load existing progress to resume if stopped
    if (fs.existsSync(fetchedAssetsPath)) {
        assets = JSON.parse(fs.readFileSync(fetchedAssetsPath, 'utf8'));
        console.log(`Loaded existing progress: ${Object.keys(assets).length} artists processed so far.`);
    }

    console.log(`Found ${artists.length} total artists to process.`);

    for (const [index, artist] of artists.entries()) {
        if (!assets[artist.id]) assets[artist.id] = {};

        // Skip if we already have both images
        if (assets[artist.id].artwork && assets[artist.id].portrait) {
            continue;
        }

        console.log(`\nProcessing [${index + 1}/${artists.length}]: ${artist.name} (${artist.id})`);

        // 1. Search for Artwork Image
        if (!assets[artist.id].artwork) {
            const query = `${artist.name} ${artist.artworkTitle} artwork`;
            process.stdout.write(`   -> Searching Artwork... `);
            
            const url = await searchImageWithRetry(query);
            if (url) {
                assets[artist.id].artwork = url;
                console.log(`Found!`);
            } else {
                console.log(`Not found.`);
            }
            
            // Wait after request
            const waitTime = BASE_DELAY + Math.random() * RANDOM_JITTER;
            await sleep(waitTime);
        }

        // 2. Search for Artist Portrait
        if (!assets[artist.id].portrait) {
            const query = `${artist.name} artist portrait`;
            process.stdout.write(`   -> Searching Portrait... `);
            
            const url = await searchImageWithRetry(query);
            if (url) {
                assets[artist.id].portrait = url;
                console.log(`Found!`);
            } else {
                console.log(`Not found.`);
            }

            // Wait after request
            const waitTime = BASE_DELAY + Math.random() * RANDOM_JITTER;
            await sleep(waitTime);
        }
        
        // Save progress after every artist so we don't lose data if it crashes
        fs.writeFileSync(fetchedAssetsPath, JSON.stringify(assets, null, 2));
    }

    console.log('\n-----------------------------------');
    console.log('Search complete.'); 
    console.log('Run "node scripts/download-batch.js" to download the images.');
}

run();