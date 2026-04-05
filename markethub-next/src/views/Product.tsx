"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DescribeProduct from "../components/DescribeProduct";
import HeaderMain from "../components/HeaderMain";
import InfoProduct from "../components/InfoProduct";
import type { FavoriteProduct } from "../Functions/Storage";

const Product = () => {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const [product, setProduct] = useState<FavoriteProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorite, setFavorite] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    setUserId(user?.id ?? null);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/products", { cache: "no-store" });
        const data = await response.json();

        const list = Array.isArray(data) ? data : (data?.data ?? []);
        const selected = id ? list.find((item: any) => String(item.id) === String(id)) : list[0];
        if (!selected) {
          setError("Produto não encontrado");
          return;
        }

        const normalized: FavoriteProduct = {
          id: Number(selected.id),
          name: String(selected.name ?? ""),
          price: Number(selected.price ?? 0),
          image: "/assets/baixados.webp",
          description: String(selected.description ?? ""),
        };

        setProduct(normalized);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao carregar o produto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const checkFavorite = async () => {
      if (!userId || !product) {
        setFavorite(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8000/favorites/${userId}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result?.message || "Erro ao carregar favoritos");
        }

        const list = Array.isArray(result?.data) ? result.data : [];
        const exists = list.some((item: any) =>
          String(item.product_id ?? item.id) === String(product.id)
        );
        setFavorite(exists);
      } catch (err) {
        console.error("Erro ao verificar favorito:", err);
        setFavorite(false);
      }
    };

    checkFavorite();
  }, [userId, product?.id]);

  const handleToggleFavorite = async () => {
    if (!product) return;
    if (!userId) {
      alert("Faça login para adicionar aos favoritos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/favorites", {
        method: favorite ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          product_id: product.id,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.message || "Erro ao atualizar favorito");
      }

      setFavorite(!favorite);
    } catch (err) {
      console.error("Erro ao atualizar favorito:", err);
      alert("Erro ao atualizar favorito");
    }
  };

  if (loading) return <p className="text-center mt-20">Carregando produto...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <>
      <HeaderMain />

      <div className="mt-20">
        <div className="flex w-full">
          <div className="flex items-center justify-center w-1/2 mt-14">
            <img
              className="sm:w-56 md:w-72 lg:w-96"
              src={product.image}
              alt={`Foto do produto ${product.name}`}
            />
          </div>

          <div className="w-1/2">
            <div className="flex items-start justify-end mr-10">
              <button
                type="button"
                onClick={handleToggleFavorite}
                className="p-2 rounded-full hover:scale-110 transition"
                aria-label="Adicionar aos favoritos"
              >
                {favorite ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-2xl" />
                )}
              </button>
            </div>

            <InfoProduct />
          </div>
        </div>

        <DescribeProduct description={product.description || ""} />
      </div>
    </>
  );
};

export default Product;
