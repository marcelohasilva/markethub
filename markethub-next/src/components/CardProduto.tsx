"use client";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}


export default function CardProduto({ product }: { product: Product }) {
  const router = useRouter();

  function handleNavigate() {
    router.push(`/produto/${product.id}`);
  }

  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <div className="w-[220px] bg-white rounded-2xl shadow-lg p-3">
        
        <div className="relative bg-[#E0E0E0] rounded-xl h-[180px] flex items-center justify-center">
          <img
            src="/assets/image.png"
            alt="Produto"
            className="h-[140px] object-contain hover:scale-150 transition"
          />
        </div>

        <h3 className="text-sm font-medium text-[#1A1C27] mt-3">
          {product.name}
        </h3>

        <div className="flex gap-1 text-indigo-500 my-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>

        <p className="text-sm font-bold text-[#1A1C27]">
          R$ {product.price} no Pix
        </p>

        <p className="text-xs text-gray-600">
          ou 2x de R$ {product.price / 2} 
        </p>
      </div>
    </div>
  );
}
