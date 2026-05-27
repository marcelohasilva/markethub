"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaRegStar,
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FiMaximize2, FiTag, FiZap } from "react-icons/fi";
import DescribeProduct from "../components/produto/DescribeProduct";
import HeaderMain from "../components/shared/HeaderMain";
import ButtonCart from "../components/produto/ButtonCart";
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
  const [selectedColor, setSelectedColor] = useState("Preto");
  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

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

  const discountPercent = 15;
  const originalPrice = product.price
    ? product.price / (1 - discountPercent / 100)
    : 0;
  const galleryImages = Array.from({ length: 4 }, () => product.image);
  const colors = [
    { name: "Preto", className: "bg-black" },
    { name: "Cinza", className: "bg-gray-300" },
    { name: "Branco", className: "bg-white" },
  ];
  const sizes = [38, 39, 40, 41, 42, 43, 44];

  const handleBuyNow = () => {
    alert("Compra simulada no front. Backend ainda nao esta pronto.");
  };

  return (
    <>
      <HeaderMain />

      <main className="bg-[#F7F8FC]">
        <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6 lg:py-8">
          <div className="text-xs text-gray-500 sm:text-sm">
            Home / Calcados / Tenis / {product.name}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_360px] lg:grid-cols-[90px_1fr_380px]">
            <div className="hidden flex-col gap-4 lg:flex">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={
                    index === selectedImageIndex
                      ? "flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#8F5CFF] bg-white shadow transition hover:scale-105 cursor-pointer"
                      : "flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white transition hover:scale-105 cursor-pointer"
                  }
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-12 w-12 object-contain"
                  />
                </button>
              ))}
            </div>

            <div
              className="relative rounded-3xl bg-gradient-to-br from-white via-[#F2F3FF] to-[#ECEBFF] p-4 shadow-lg cursor-zoom-in transition hover:shadow-xl sm:p-6"
              onClick={() => setIsImageOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") setIsImageOpen(true);
              }}
            >
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                onKeyDown={(event) => event.stopPropagation()}
                onClickCapture={(event) => event.stopPropagation()}
                className="absolute right-5 top-5 rounded-full border border-gray-200 bg-white p-2 text-gray-500 shadow hover:scale-105 transition cursor-pointer"
                aria-label="Abrir imagem"
              >
                <FiMaximize2 className="h-4 w-4" />
              </button>
              <span className="absolute left-5 top-5 rounded-full bg-[#6B3DF2] px-3 py-1 text-xs font-semibold text-white">
                -{discountPercent}%
              </span>
              <div className="flex items-center justify-center">
                <img
                  className="h-64 w-full object-contain sm:h-80 md:h-96"
                  src={galleryImages[selectedImageIndex]}
                  alt={`Foto do produto ${product.name}`}
                />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
                {galleryImages.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className={
                      index === selectedImageIndex
                        ? "h-2 w-2 rounded-full bg-[#6B3DF2]"
                        : "h-2 w-2 rounded-full bg-gray-300"
                    }
                  />
                ))}
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3 lg:hidden">
                {galleryImages.map((image, index) => (
                  <button
                    key={`thumb-${image}-${index}`}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    className={
                      index === selectedImageIndex
                        ? "flex h-16 w-full items-center justify-center rounded-2xl border-2 border-[#8F5CFF] bg-white shadow transition hover:scale-105 cursor-pointer"
                        : "flex h-16 w-full items-center justify-center rounded-2xl border border-gray-200 bg-white transition hover:scale-105 cursor-pointer"
                    }
                  >
                    <img
                      src={image}
                      alt={`${product.name} miniatura ${index + 1}`}
                      className="h-10 w-10 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-xl sm:p-6">
              <span className="flex w-fit items-center gap-2 rounded-full bg-[#F2EDFF] px-3 py-1 text-xs font-semibold text-[#6B3DF2]">
                <FaStar className="h-3 w-3" />
                Mais vendido
              </span>

              <div className="mt-4 flex items-start justify-between gap-3">
                <h1 className="text-2xl font-bold text-[#1D1B21]">
                  {product.name}
                </h1>
                <button
                  type="button"
                  onClick={handleToggleFavorite}
                  className="rounded-full border border-gray-200 p-2 text-gray-400 transition hover:scale-110 hover:text-gray-600 cursor-pointer"
                  aria-label="Adicionar aos favoritos"
                >
                  {favorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-1 text-[#6B3DF2]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar className="text-gray-300" />
                </div>
                <span>4.6</span>
                <span className="text-gray-400">(250 avaliacoes)</span>
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-3">
                <div className="text-3xl font-bold text-[#6B3DF2]">
                  R$ {product.price.toFixed(2)}
                </div>
                <div className="text-sm text-gray-400 line-through">
                  R$ {originalPrice.toFixed(2)}
                </div>
                <span className="rounded-full bg-[#EFE9FF] px-2 py-1 text-xs font-semibold text-[#6B3DF2]">
                  -{discountPercent}%
                </span>
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-[#1D1B21]">
                  Cor: <span className="font-normal text-gray-500">{selectedColor}</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={
                        selectedColor === color.name
                          ? "flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#6B3DF2] transition hover:scale-110 cursor-pointer"
                          : "flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 transition hover:scale-110 cursor-pointer"
                      }
                      aria-label={`Selecionar cor ${color.name}`}
                    >
                      <span
                        className={`${color.className} h-5 w-5 rounded-full border border-gray-200`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-[#1D1B21]">
                  Tamanho: <span className="font-normal text-gray-500">{selectedSize}</span>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={
                        selectedSize === size
                          ? "rounded-xl border-2 border-[#6B3DF2] bg-[#F3EEFF] py-2 text-sm font-semibold text-[#6B3DF2] transition hover:scale-105 cursor-pointer"
                          : "rounded-xl border border-gray-200 py-2 text-sm font-semibold text-gray-500 transition hover:scale-105 cursor-pointer"
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <ButtonCart
                productId={product.id}
                userId={userId}
                storeId={1}
                className="mt-5 w-full rounded-2xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl"
                label="Adicionar ao carrinho"
              />

              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-gray-200 px-3 py-2">
                <FiTag className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Cupom de desconto"
                  className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                />
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] px-4 py-2 text-sm font-semibold text-white"
                >
                  Aplicar
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F3EEFF] py-3 text-sm font-semibold text-[#6B3DF2] shadow transition hover:bg-[#E9E1FF] hover:shadow-lg cursor-pointer"
              >
                <FiZap className="h-4 w-4" />
                Comprar agora
              </button>

              <div className="mt-4 grid gap-3 text-xs text-gray-500 sm:grid-cols-3">
                <div className="flex items-start gap-2">
                  <FaTruck className="mt-0.5 text-[#6B3DF2]" />
                  <div>
                    <p className="font-semibold text-[#1D1B21]">Entrega rapida</p>
                    <p>para todo o Brasil</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaUndoAlt className="mt-0.5 text-[#6B3DF2]" />
                  <div>
                    <p className="font-semibold text-[#1D1B21]">Devolucao gratis</p>
                    <p>ate 7 dias</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaShieldAlt className="mt-0.5 text-[#6B3DF2]" />
                  <div>
                    <p className="font-semibold text-[#1D1B21]">Compra segura</p>
                    <p>seus dados protegidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <DescribeProduct description={product.description || ""} />
          </div>
        </div>
      </main>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIsImageOpen(false)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl rounded-2xl bg-white p-4"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute right-3 top-3 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 transition hover:bg-gray-50 cursor-pointer"
            >
              Fechar
            </button>
            <img
              src={galleryImages[selectedImageIndex]}
              alt={`Foto ampliada do produto ${product.name}`}
              className="max-h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
