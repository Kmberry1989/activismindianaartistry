const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Read the fetched images JSON
const fetchedImagesPath = path.join(__dirname, 'fetched_images.json');
if (!fs.existsSync(fetchedImagesPath)) {
    console.error('fetched_images.json not found. Run fetch-og-images.js first.');
    process.exit(1);
}

const fetchedImages = JSON.parse(fs.readFileSync(fetchedImagesPath, 'utf8'));
const publicDir = path.join(__dirname, '../public');
const artistsDataPath = path.join(__dirname, '../src/lib/artists-data.ts');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(dest);

        protocol.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { }); // Delete the file async. (But we don't check result)
            reject(err);
        });
    });
}

function getExtension(url) {
    // Try to get extension from URL
    const ext = path.extname(url.split('?')[0]);
    if (ext && ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext.toLowerCase())) {
        return ext;
    }
    return '.jpg'; // Default fallback
}

async function main() {
    console.log('Starting image download...');

    // Read current artists data to avoid overwriting existing valid images if possible?
    // Actually, the user asked to automate downloading. We will download ALL found images.
    // But we should be careful not to break the file structure.

    let artistsDataContent = fs.readFileSync(artistsDataPath, 'utf8');
    let updatesCount = 0;

    for (const [id, url] of Object.entries(fetchedImages)) {
        // Skip if URL is a placeholder or invalid (basic check)
        if (url.includes('placeholder') || url.includes('blank.png')) {
            console.log(`[${id}] Skipping placeholder: ${url}`);
            continue;
        }

        const ext = getExtension(url);
        const filename = `artist-${id}${ext}`;
        const destPath = path.join(publicDir, filename);
        const publicPath = `/${filename}`;

        console.log(`[${id}] Downloading ${url} -> ${filename}`);

        try {
            await downloadImage(url, destPath);

            // Update the data file content using regex
            // We look for the block for this ID and update imageUrl
            // This regex is tricky. We need to find the object with "id": "ID"
            // and then replace or add "imageUrl": "..." inside it.

            // Regex to find the object: { "id": "1", ... }
            // We assume standard formatting from the file we saw earlier.

            const idRegex = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"imageUrl":\\s*"(.*?)"`, 'g');

            if (idRegex.test(artistsDataContent)) {
                // Replace existing imageUrl
                artistsDataContent = artistsDataContent.replace(idRegex, (match, oldUrl) => {
                    return match.replace(oldUrl, publicPath);
                });
                updatesCount++;
            } else {
                // If imageUrl doesn't exist, we might need to add it. 
                // But based on the file, most have it. If not, this simple regex won't work.
                // For now, we assume it exists or we skip.
                console.log(`[${id}] Could not find imageUrl field to update in artists-data.ts`);
            }

        } catch (error) {
            console.error(`[${id}] Error downloading: ${error.message}`);
        }
    }

    // Write updated data back
    if (updatesCount > 0) {
        fs.writeFileSync(artistsDataPath, artistsDataContent);
        console.log(`\nUpdated ${updatesCount} entries in artists-data.ts`);
    } else {
        console.log('\nNo entries updated.');
    }
}

main();
