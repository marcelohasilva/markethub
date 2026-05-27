"use client";
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ButtonCart from "./ButtonCart";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const InfoProduct = () => {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/products", { cache: "no-store" });
        const json = await response.json();

        const list = Array.isArray(json) ? json : (json?.data ?? []);
        const source = id ? list.find((item: any) => String(item.id) === String(id)) : list[0];
        if (!source) throw new Error("Produto não encontrado");

        setProduct({
          id: Number(source.id),
          name: String(source.name ?? ""),
          price: Number(source.price ?? 0),
          description: String(source.description ?? ""),
        });
      } catch (err) {
        console.error("Erro ao buscar produto:", err);
        setError("Erro ao carregar o produto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Carregando produto...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[#282729] text-center mt-20 text-3xl">
        {product.name}
      </h1>

      <div className="flex gap-1 justify-center mt-2">
        <span className="bg-gradient-to-r from-[#8F5CFF] to-[#1782ED] bg-clip-text text-transparent text-2xl">
          ★★★
        </span>
        <span className="text-gray-300 text-2xl">★★</span>
        <span className="text-gray-500 text-xs mt-2 ml-2">(120 avaliações)</span>
      </div>

      <div className="text-3xl font-bold text-[#282729] text-center mt-10">
        R$ {product.price.toFixed(2)}
      </div>

      <div className="flex flex-col items-center mt-8 gap-4">
        <button
          onClick={() => router.push("/carrinho")}
          className="bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] py-4 px-12 rounded text-white font-semibold shadow-xl"
        >
          Comprar Agora
        </button>

        <ButtonCart productId={product.id} userId={1} storeId={1} />
      </div>
    </div>
  );
};

export default InfoProduct;
