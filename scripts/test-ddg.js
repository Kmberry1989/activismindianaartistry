async function getVqd(query) {
    const response = await fetch(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`);
    const text = await response.text();
    const match = text.match(/vqd="([^"]+)"/);
    return match ? match[1] : null;
}

async function searchImages(query) {
    console.log(`Searching for: ${query}`);
    const vqd = await getVqd(query);
    if (!vqd) {
        console.error('Failed to get VQD token');
        return;
    }
    console.log(`Got VQD: ${vqd}`);

    const url = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,&p=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        console.log('Found images:', data.results.length);
        console.log('First result:', data.results[0].image);
        console.log('Title:', data.results[0].title);
        console.log('Source:', data.results[0].url);
    } else {
        console.log('No results found.');
    }
}

searchImages('Gary Gee We the People artwork');
