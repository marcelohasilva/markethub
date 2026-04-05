"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderMain from "../components/HeaderMain";
import EmptyFavorites from "../components/EmptyFavorites";
import CardFavorito from "../components/CardFavorito";
import type { FavoriteProduct } from "../Functions/Storage";

export default function Favoritos() {
  const router = useRouter();
  const [items, setItems] = useState<FavoriteProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    setUserId(user?.id ?? null);
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) {
        setItems([]);
        setLoading(false);
        setError("Faça login para ver seus favoritos.");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:8000/favorites/${userId}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.message || "Erro ao carregar favoritos");
        }

        const list = Array.isArray(result?.data) ? result.data : [];
        const normalized = list.map((item: any) => ({
          id: Number(item.product_id ?? item.id),
          name: String(item.name ?? ""),
          price: Number(item.price ?? 0),
          image: item.image_url ? String(item.image_url) : "/assets/baixados.webp",
        }));

        setItems(normalized);
      } catch (err: any) {
        console.error("Erro ao buscar favoritos:", err);
        setItems([]);
        setError(err?.message || "Erro ao carregar favoritos");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  const handleRemove = async (id: number) => {
    if (!userId) return;

    try {
      const response = await fetch("http://localhost:8000/favorites", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          product_id: id,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.message || "Erro ao remover favorito");
      }

      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
      console.error("Erro ao remover favorito:", err);
      setError(err?.message || "Erro ao remover favorito");
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
          <p className="text-center mt-10">Carregando favoritos...</p>
        ) : error ? (
          <p className="text-center mt-10 text-red-500">{error}</p>
        ) : items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {items.map((item) => (
              <CardFavorito key={item.id} product={item} onRemove={handleRemove} />
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
