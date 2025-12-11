const https = require('https');

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

async function main() {
    console.log('Fetching https://indyarts.org/events ...');
    try {
        const html = await fetch('https://indyarts.org/events');
        console.log('Length:', html.length);

        // Look for common event plugins (The Events Calendar is common on WP)
        const tribeMatches = html.match(/class="[^"]*tribe-[^"]*"/g);
        if (tribeMatches) {
            console.log('Found Tribe Events classes:', tribeMatches.slice(0, 5));
        }

        // Dump a chunk where "2025" or "December" appears to see date formatting
        const dateIdx = html.indexOf('December');
        if (dateIdx !== -1) {
            console.log('Context around "December":');
            console.log(html.slice(dateIdx - 200, dateIdx + 300));
        }

        // Check for H3 titles
        const h3Matches = html.match(/<h3[^>]*>(.*?)<\/h3>/gs);
        if (h3Matches) {
            console.log('Found H3 titles:', h3Matches.slice(0, 3));
        }
    } catch (err) {
        console.error(err);
    }
}

main();
