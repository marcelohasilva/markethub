
export interface FavoriteProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const FAVORITES_KEY = "favorites";

// Mantido para compatibilidade com partes antigas do front-end.
// A fonte oficial dos favoritos agora é a API NestJS.
const readFavorites = (): FavoriteProduct[] => {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed as FavoriteProduct[];
  } catch {
    return [];
  }
};

const writeFavorites = (items: FavoriteProduct[]) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
};

export const getFavorites = (): FavoriteProduct[] => {
  return readFavorites();
};

export const isFavorite = (id: string): boolean => {
  return readFavorites().some((item) => item.id === id);
};

export const toggleFavorite = (product: FavoriteProduct): boolean => {
  const current = readFavorites();

  const exists = current.some((item) => item.id === product.id);

  const next = exists
    ? current.filter((item) => item.id !== product.id)
    : [...current, product];

  writeFavorites(next);

  return !exists;
};

export const removeFavorite = (id: string): FavoriteProduct[] => {
  const current = readFavorites();

  const next = current.filter((item) => item.id !== id);

  writeFavorites(next);

  return next;
};
