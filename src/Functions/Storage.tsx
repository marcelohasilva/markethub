export interface FavoriteProduct {
    id: number;
    name: string;
    price: number;
    image?: string;
}

const FAVORITES_KEY = "favorites";

const readFavorites = (): FavoriteProduct[] => {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

const writeFavorites = (items: FavoriteProduct[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
};

export const getFavorites = () => readFavorites();

export const isFavorite = (id: number) => {
    return readFavorites().some(item => item.id === id);
};

export const toggleFavorite = (product: FavoriteProduct) => {
    const current = readFavorites();
    const exists = current.some(item => item.id === product.id);
    const next = exists ? current.filter(item => item.id !== product.id) : [...current, product];
    writeFavorites(next);
    return !exists;
};

export const removeFavorite = (id: number) => {
    const current = readFavorites();
    const next = current.filter(item => item.id !== id);
    writeFavorites(next);
    return next;
};