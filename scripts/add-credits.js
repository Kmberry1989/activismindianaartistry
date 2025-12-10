const fs = require('fs');
const path = require('path');
const url = require('url');

const fetchedImagesPath = path.join(__dirname, 'fetched_images.json');
const artistsDataPath = path.join(__dirname, '../src/lib/artists-data.ts');

if (!fs.existsSync(fetchedImagesPath)) {
    console.error('fetched_images.json not found.');
    process.exit(1);
}

const fetchedImages = JSON.parse(fs.readFileSync(fetchedImagesPath, 'utf8'));
let artistsDataContent = fs.readFileSync(artistsDataPath, 'utf8');

function getDomain(urlString) {
    try {
        const parsed = new url.URL(urlString);
        return parsed.hostname.replace('www.', '');
    } catch (e) {
        return null;
    }
}

let updatesCount = 0;

console.log('Adding credits to artists-data.ts...');

for (const [id, imageUrl] of Object.entries(fetchedImages)) {
    // Skip placeholders
    if (imageUrl.includes('placeholder') || imageUrl.includes('blank.png')) {
        continue;
    }

    const domain = getDomain(imageUrl);
    if (!domain) continue;

    // We want to add "credit": "domain" to the artwork object for this ID.
    // We can reuse the regex approach from download-images.js but targeting the artwork block.

    // Regex to find the object: { "id": "ID", ... "artwork": { ... } }
    // This is hard to robustly regex.
    // Let's look for `"id": "ID"` and then the next `"imageUrl": "..."` and append credit after it.

    const idRegex = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"imageUrl":\\s*".*?"`, 'g');

    if (idRegex.test(artistsDataContent)) {
        artistsDataContent = artistsDataContent.replace(idRegex, (match) => {
            // Check if credit already exists to avoid duplication if run multiple times
            if (match.includes('"credit":')) {
                return match;
            }
            updatesCount++;
            return `${match},\n      "credit": "${domain}"`;
        });
    }
}

if (updatesCount > 0) {
    fs.writeFileSync(artistsDataPath, artistsDataContent);
    console.log(`Updated ${updatesCount} entries with credits.`);
} else {
    console.log('No new credits added.');
}
