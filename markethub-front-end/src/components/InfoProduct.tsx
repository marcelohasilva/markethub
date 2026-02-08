import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
}

const InfoProduct = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8000/products/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data?.data) {
          setProduct({
            id: data.data.id,
            name: data.data.name,
            price: Number(data.data.price),
          });
        }
      })
      .catch(err => {
        console.error("Erro ao buscar produto:", err);
      });
  }, [id]);

  if (!product) {
    return <p className="text-center mt-20">Carregando...</p>;
  }

  return (
    <>
      <div className="flex flex-col font-bold text-[#282729] text-center mt-20 text-3xl gap-2">
        {product.name}
      </div>

      <div className="flex gap-1 text-center justify-center mr-4">
        <span className="bg-gradient-to-r from-[#8F5CFF] to-[#1782ED] bg-clip-text text-transparent text-2xl">
          ★★★
        </span>
        <span className="text-gray-300 text-2xl">★★</span>
        <p className="text-gray-500 text-xs mt-2">(120 avaliações)</p>
      </div>

      <div className="text-3xl font-bold text-[#282729] text-center mt-10">
        R$ {product.price}
      </div>

      <div className="flex flex-col items-center">
        <button className="bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] py-4 px-12 rounded text-white font-semibold shadow-xl mt-4">
          Comprar Agora
        </button>

        <button className="bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] py-4 px-6 rounded text-white font-semibold shadow-xl mt-4">
          Adicionar ao Carrinho
        </button>
      </div>
    </>
  );
};

export default InfoProduct;
