const fs = require('fs');
const path = require('path');

// Read the artists-data.ts file
const dataPath = path.join(__dirname, '../src/lib/artists-data.ts');
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(dataPath)) {
    console.error('Could not find artists-data.ts');
    process.exit(1);
}

const content = fs.readFileSync(dataPath, 'utf8');

// Regex to find imageUrl: "..." or imageUrl: '...'
// This is a simple regex and might need adjustment if the format varies
const imageRegex = /"imageUrl":\s*["']([^"']+)["']/g;

let match;
const issues = [];
const checked = new Set();

console.log('Scanning for image links...');

while ((match = imageRegex.exec(content)) !== null) {
    const imagePath = match[1];

    if (checked.has(imagePath)) continue;
    checked.add(imagePath);

    // Handle external links (though most seem to be local)
    if (imagePath.startsWith('http')) {
        console.log(`[EXTERNAL] ${imagePath} (Skipping verification)`);
        continue;
    }

    // Local path check
    // Clean path: remove query params, ensure it starts with / logic
    const cleanPath = decodeURIComponent(imagePath.split('?')[0]);
    const fullPath = path.join(publicDir, cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath);

    if (!fs.existsSync(fullPath)) {
        issues.push(imagePath);
        console.log(`[MISSING]  ${imagePath}`);

        // Attempt fuzzy match (case insensitive or slight name variation)
        const dir = path.dirname(fullPath);
        const filename = path.basename(fullPath);

        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            const lowerFilename = filename.toLowerCase();
            const found = files.find(f => f.toLowerCase() === lowerFilename);
            if (found) {
                console.log(`   └─ SUGGESTION: Found similar file: ${path.join(path.dirname(imagePath), found)}`);
            }
        }
    }
}

console.log('\n--- Summary ---');
console.log(`Checked ${checked.size} unique image links.`);
console.log(`Found ${issues.length} missing files.`);

if (issues.length > 0) {
    console.log('\nMissing Files:');
    issues.forEach(i => console.log(`- ${i}`));
}
