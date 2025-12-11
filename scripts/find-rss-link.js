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
    console.log('Fetching https://www.wfyi.org/arts ...');
    try {
        const html = await fetch('https://www.wfyi.org/arts');
        // Look for RSS links
        const rssMatches = html.match(/href="([^"]+)"/g)
            ?.filter(s => s.toLowerCase().includes('rss'));

        console.log('Potential RSS links found:', rssMatches);
    } catch (err) {
        console.error(err);
    }
}

main();
