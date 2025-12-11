const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const CSV_PATH = path.join(__dirname, '../ArtistandArtworkDescriptions.csv');
const DATA_PATH = path.join(__dirname, '../src/lib/artists-data.ts');

function main() {
    console.log('Reading CSV...');
    const csvContent = fs.readFileSync(CSV_PATH, 'utf8');
    const parsed = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        trimHeaders: true
    });

    if (parsed.errors.length) {
        console.error('CSV Parsing Errors:', parsed.errors);
    }

    console.log(`Found ${parsed.data.length} rows in CSV.`);

    console.log('Reading existing data...');
    let tsContent = fs.readFileSync(DATA_PATH, 'utf8');

    // Robustly find the array start
    const startMarker = 'export const artists: Artist[] = [';
    const startIndex = tsContent.indexOf(startMarker);

    if (startIndex === -1) {
        console.error('Could not find "export const artists: Artist[] = [" in data file.');
        process.exit(1);
    }

    // Isolate the array string. 
    // We assume the file ends with the array definition (and maybe a semicolon/newline).
    // A simple way is to take everything after the marker.
    let arrayString = tsContent.substring(startIndex + startMarker.length - 1); // include the '['

    // Clean up trailing semicolon if present
    const lastBracketIndex = arrayString.lastIndexOf(']');
    if (lastBracketIndex === -1) {
        console.error('Could not find closing bracket "]" in data file.');
        process.exit(1);
    }

    arrayString = arrayString.substring(0, lastBracketIndex + 1);

    // Evaluate safely
    let currentData;
    try {
        // Prepare context if there were variables, but we checked and there aren't.
        // We use eval but wrapped in parentheses to ensure expression parsing
        currentData = eval('(' + arrayString + ')');
    } catch (err) {
        console.error('Failed to parse existing data array:', err);
        process.exit(1);
    }

    console.log(`Loaded ${currentData.length} existing entries.`);

    let updatesCount = 0;

    parsed.data.forEach((row, i) => {
        const artistName = row['Artist Name']?.trim();
        const workTitle = row['Title of Work']?.trim();

        if (!artistName || !workTitle) {
            console.warn(`Skipping row ${i + 1}: Missing Name or Title`);
            return;
        }

        // Find match
        // Normalize file data (trim) to handle trailing spaces found in source file specific entries
        const entry = currentData.find(e =>
            e.artist.name.trim().toLowerCase() === artistName.toLowerCase() &&
            e.artwork.title.trim().toLowerCase() === workTitle.toLowerCase()
        );


        if (entry) {
            // updates
            const newBio = row['Artist Description'];
            let newDesc = row['Artwork Descripton 1'] || ''; // Note CSV typo 'Descripton'
            const desc2 = row['Artwork Descripton 2']; // Note CSV typo

            if (desc2) {
                newDesc += '\n\n' + desc2;
            }

            if (newBio) entry.artist.bio = newBio;
            if (newDesc) entry.artwork.description = newDesc;

            updatesCount++;
        } else {
            console.warn(`No match found for: ${artistName} - ${workTitle}`);

            // Fuzzy match attempt debug (optional)
            // const fuzzy = currentData.find(e => e.artist.name.includes(artistName));
            // if(fuzzy) console.log(`  Did you mean: ${fuzzy.artist.name} - ${fuzzy.artwork.title}?`);
        }
    });

    console.log(`Updated ${updatesCount} entries.`);

    // Reconstruct file
    const preamble = tsContent.substring(0, startIndex + startMarker.length - 1); // Up to before '['
    // Ensure we keep the exact export line structure if possible, but our marker includes it.
    // wait, startMarker = 'export const ... ['
    // preamble should be tsContent.substring(0, startIndex);
    // followed by 'export const artists: Artist[] = '

    const newFileContent = tsContent.substring(0, startIndex) +
        'export const artists: Artist[] = ' +
        JSON.stringify(currentData, null, 2) +
        ';\n';

    fs.writeFileSync(DATA_PATH, newFileContent, 'utf8');
    console.log('Successfully wrote updated data to file.');
}

main();
