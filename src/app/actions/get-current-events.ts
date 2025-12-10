'use server';

import Parser from 'rss-parser';

export type EventItem = {
    id: string;
    title: string;
    date: string;
    organization: string;
    category: 'Grant' | 'Exhibition' | 'Performance' | 'Advocacy' | 'News';
    summary: string;
    imageUrl: string;
    link: string;
};

export async function getCurrentEvents(): Promise<EventItem[]> {
    const parser = new Parser({
        customFields: {
            item: ['media:content', 'media:thumbnail', 'source'],
        },
    });

    try {
        const feed = await parser.parseURL(
            'https://news.google.com/rss/search?q=Indiana+Art+Activism+OR+Indy+Arts+Council+OR+Indiana+Arts+Commission&hl=en-US&gl=US&ceid=US:en'
        );

        // Fallback images if RSS doesn't provide them
        const defaultImages = [
            '/mcmillenparkbasketballcourtmural.jpeg',
            '/together.jpg',
            '/wethepeople.webp',
            '/whispersfromthedivide.png'
        ];

        const events: EventItem[] = feed.items.slice(0, 4).map((item, index) => {
            // Clean up description HTML
            let summary = item.contentSnippet || item.content || '';
            if (summary.length > 150) {
                summary = summary.substring(0, 150) + '...';
            }

            // Extract Date
            const date = item.pubDate
                ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                : 'Recent';

            // Attempt to find an image in the RSS feed, otherwise use fallback
            const imageUrl = defaultImages[index % defaultImages.length];

            return {
                id: `rss-${index}`,
                title: item.title || 'News Update',
                date: date,
                organization: (item as any).source || 'News Source',
                category: 'News',
                summary: summary || 'Click to read the full story.',
                imageUrl: imageUrl,
                link: item.link || '#',
            };
        });

        return events;
    } catch (error) {
        console.error('Error fetching current events:', error);
        return [];
    }
}