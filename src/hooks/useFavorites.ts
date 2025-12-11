"use client";

import { useState, useEffect, useCallback } from "react";
import { safeGet, safeSet } from "@/lib/local-storage";

const STORAGE_KEY = "user_favorites";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);

    // Hydrate from storage on mount
    useEffect(() => {
        const stored = safeGet<string[]>(STORAGE_KEY, []);
        setFavorites(stored);
    }, []);

    const isFavorite = useCallback(
        (id: string) => favorites.includes(id),
        [favorites]
    );

    const toggleFavorite = useCallback(
        (id: string) => {
            setFavorites(prev => {
                const next = prev.includes(id)
                    ? prev.filter(x => x !== id)
                    : [...prev, id];
                safeSet(STORAGE_KEY, next);
                return next;
            });
        },
        []
    );

    return { isFavorite, toggleFavorite, favorites };
}
