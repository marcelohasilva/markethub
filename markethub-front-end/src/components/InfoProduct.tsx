import ButtonCart from "./ButtonCart";
import type { FavoriteProduct } from "../Functions/Storage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const InfoProduct = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:8000/products/${id}`);
        const json = await response.json();

        if (!json?.data) {
          throw new Error("Produto não encontrado");
        }

        setProduct({
          id: Number(json.data.id),
          name: json.data.name,
          price: Number(json.data.price),
          description: json.data.description,
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

  if (loading) {
    return <p className="text-center mt-20">Carregando produto...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

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
        <span className="text-gray-500 text-xs mt-2 ml-2">
          (120 avaliações)
        </span>
      </div>

      <div className="text-3xl font-bold text-[#282729] text-center mt-10">
        R$ {product.price.toFixed(2)}
      </div>


      <div className="flex flex-col items-center mt-8 gap-4">
        <button className="bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] py-4 px-12 rounded text-white font-semibold shadow-xl">
          Comprar Agora
        </button>

        <ButtonCart
          productId={product.id}
          userId={1}
          storeId={1}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
