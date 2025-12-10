'use server';

import fs from 'fs/promises';
import path from 'path';

// Define the shape of our analytics data
type AnalyticsData = {
    [key: string]: number; // e.g., "print_zine": 42
};

const DATA_FILE = path.join(process.cwd(), 'data', 'analytics.json');

async function getAnalyticsData(): Promise<AnalyticsData> {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty object
        return {};
    }
}

export async function trackEvent(eventName: string) {
    try {
        const currentData = await getAnalyticsData();

        // Increment the count for this specific event
        const newData = {
            ...currentData,
            [eventName]: (currentData[eventName] || 0) + 1,
        };

        // Ensure the data directory exists
        const dataDir = path.dirname(DATA_FILE);
        try {
            await fs.access(dataDir);
        } catch {
            await fs.mkdir(dataDir, { recursive: true });
        }

        await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2));

        // Return the new count
        return newData[eventName];
    } catch (error) {
        console.error(`Failed to track event ${eventName}:`, error);
        return 0;
    }
}

export async function getAnalyticsSummary() {
    return await getAnalyticsData();
}