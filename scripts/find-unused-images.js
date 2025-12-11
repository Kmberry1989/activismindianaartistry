const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/lib/artists-data.ts');
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(__dirname, '../public/Images');

const content = fs.readFileSync(dataPath, 'utf8');
const usedImages = new Set();
let match;
const imageRegex = /"imageUrl":\s*["']([^"']+)["']/g;
while ((match = imageRegex.exec(content)) !== null) {
    usedImages.add(match[1]);
}

console.log(`Found ${usedImages.size} used images.`);

function scanDir(dir, prefix) {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir);
    const unused = [];
    for (const file of files) {
        if (file.startsWith('.')) continue; // skip .DS_Store
        if (fs.statSync(path.join(dir, file)).isDirectory()) continue;

        // Construct the used path format
        const webPath = prefix + file;

        // We need to check if this webPath is in usedImages
        // But usedImages might have different encoding or leading slash.
        // My script used in artists-data uses leading slash, e.g. "/Images/file.jpg"

        const possiblePaths = [
            webPath,
            '/' + webPath,
            webPath.replace(/ /g, '%20'),
            '/' + webPath.replace(/ /g, '%20')
        ];

        const isUsed = possiblePaths.some(p => usedImages.has(p));

        if (!isUsed) {
            unused.push(file);
        }
    }
    return unused;
}

console.log('--- Unused Files in public/ ---');
const unusedRoot = scanDir(publicDir, '');
unusedRoot.forEach(f => console.log(f));

console.log('\n--- Unused Files in public/Images/ ---');
const unusedImagesDir = scanDir(imagesDir, 'Images/');
unusedImagesDir.forEach(f => console.log(f));
