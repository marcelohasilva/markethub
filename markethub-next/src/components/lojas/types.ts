import type { StoreProfile } from "@/lib/stores";

export type StoreDisplay = StoreProfile & {
  logo: string;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  products: number;
  sales: number;
  location: string;
  state: string;
  coverImage?: string;
  verified?: boolean;
  badge?: "MAIS VENDIDA" | "MELHOR AVALIADA" | "EM DESTAQUE" | "NOVA LOJA";
};
