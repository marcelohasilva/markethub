
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderMain from "@/components/layout/HeaderMain";
import type { FavoriteProduct } from "@/utils/favorites-storage";
import EmptyFavorites from "./components/EmptyFavorites";
import FavoriteCard from "./components/FavoriteCard";

type FavoriteApiItem = {
  id: string;
  userId: string;
  productId: string;
  product?: {
    id: string;
    name?: string;
    price?: string | number;
    image?: string | null;
    imageUrl?: string | null;
  };
};

type FavoriteProductItem = Omit<FavoriteProduct, "id"> & {
  id: string;
};

const API_URL = "http://localhost:3000/v1";

export default function Favoritos() {
  const router = useRouter();

  const [items, setItems] = useState<FavoriteProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("api_token"));
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (token === null) return;

      if (!token) {
        setItems([]);
        setLoading(false);
        setError("Faça login para ver seus favoritos.");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result?.message || "Erro ao carregar favoritos"
          );
        }

        const list: FavoriteApiItem[] = Array.isArray(result)
          ? result
          : [];

        const normalized: FavoriteProductItem[] = list.map((item) => ({
          id: String(item.productId),
          name: String(item.product?.name ?? ""),
          price: Number(item.product?.price ?? 0),
          image:
            item.product?.imageUrl ||
            item.product?.image ||
            "/assets/baixados.webp",
        }));

        setItems(normalized);
      } catch (err: unknown) {
        console.error("Erro ao buscar favoritos:", err);
        setItems([]);
        setError(
          err instanceof Error
            ? err.message
            : "Erro ao carregar favoritos"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [token]);

  const handleRemove = async (productId: string) => {
    if (!token) return;

    try {
      const response = await fetch(`${API_URL}/favorites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Erro ao localizar favorito"
        );
      }

      const list: FavoriteApiItem[] = Array.isArray(result)
        ? result
        : [];

      const favorite = list.find(
        (item) => String(item.productId) === String(productId)
      );

      if (!favorite) {
        throw new Error("Favorito não encontrado.");
      }

      const deleteResponse = await fetch(
        `${API_URL}/favorites/${favorite.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!deleteResponse.ok) {
        const deleteResult = await deleteResponse.json().catch(() => null);

        throw new Error(
          deleteResult?.message || "Erro ao remover favorito"
        );
      }

      setItems((prev) =>
        prev.filter((item) => item.id !== productId)
      );
    } catch (err: unknown) {
      console.error("Erro ao remover favorito:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao remover favorito"
      );
    }
  };

  return (
    <>
      <HeaderMain />

      <div className="w-full px-4 md:px-8 lg:px-[97px]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mt-12 sm:mt-16">
          Meus Favoritos
        </h1>

        <div className="h-px w-full bg-gray-300 mt-4" />

        {loading ? (
          <p className="text-center mt-10">
            Carregando favoritos...
          </p>
        ) : error ? (
          <p className="text-center mt-10 text-red-500">
            {error}
          </p>
        ) : items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {items.map((item) => (
              <FavoriteCard
                key={item.id}
                product={item}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <EmptyFavorites />
        )}

        <div className="flex justify-center mt-10 pb-20">
          <button
            onClick={() => router.push("/")}
            className="px-5 py-2.5 rounded-xl text-xl w-[300px] h-[65px] bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white font-bold hover:opacity-90 cursor-pointer"
          >
            Voltar as compras
          </button>
        </div>
      </div>
    </>
  );
}
