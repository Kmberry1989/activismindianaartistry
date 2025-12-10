import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LIKES_FILE = path.join(process.cwd(), 'data', 'likes.json');

interface LikesData {
    [artistId: string]: {
        count: number;
        uniqueVisitors: string[];
    };
}

// Ensure likes file exists
function ensureLikesFile() {
    const dir = path.dirname(LIKES_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(LIKES_FILE)) {
        fs.writeFileSync(LIKES_FILE, JSON.stringify({}));
    }
}

// Read likes data
function readLikes(): LikesData {
    ensureLikesFile();
    const data = fs.readFileSync(LIKES_FILE, 'utf-8');
    return JSON.parse(data);
}

// Write likes data
function writeLikes(data: LikesData) {
    ensureLikesFile();
    fs.writeFileSync(LIKES_FILE, JSON.stringify(data, null, 2));
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const likes = readLikes();

        return NextResponse.json({
            count: likes[id]?.count || 0,
        });
    } catch (error) {
        console.error('Error fetching likes:', error);
        return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
    }
}

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { clientId } = await request.json();

        if (!clientId) {
            return NextResponse.json({ error: 'Client ID required' }, { status: 400 });
        }

        const likes = readLikes();

        // Initialize if doesn't exist
        if (!likes[id]) {
            likes[id] = { count: 0, uniqueVisitors: [] };
        }

        // Check if this client already liked
        if (likes[id].uniqueVisitors.includes(clientId)) {
            return NextResponse.json({
                count: likes[id].count,
                alreadyLiked: true,
            });
        }

        // Add like
        likes[id].count += 1;
        likes[id].uniqueVisitors.push(clientId);
        writeLikes(likes);

        return NextResponse.json({
            count: likes[id].count,
            alreadyLiked: false,
        });
    } catch (error) {
        console.error('Error updating likes:', error);
        return NextResponse.json({ error: 'Failed to update likes' }, { status: 500 });
    }
}
