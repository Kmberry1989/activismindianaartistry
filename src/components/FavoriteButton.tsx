'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface FavoriteButtonProps {
    artistId: string;
}

export function FavoriteButton({ artistId }: FavoriteButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Load favorite state from localStorage
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        setIsFavorite(favorites[artistId] || false);
    }, [artistId]);

    const handleToggle = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        const newState = !isFavorite;

        favorites[artistId] = newState;
        localStorage.setItem('favorites', JSON.stringify(favorites));

        setIsFavorite(newState);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <Button
            variant={isFavorite ? "default" : "outline"}
            size="lg"
            onClick={handleToggle}
            className={`group relative ${isAnimating ? 'animate-pulse' : ''}`}
        >
            <Star
                className={`mr-2 h-5 w-5 transition-all ${isFavorite ? 'fill-current' : ''
                    }`}
            />
            {isFavorite ? 'Favorited' : 'Favorite'}
        </Button>
    );
}
