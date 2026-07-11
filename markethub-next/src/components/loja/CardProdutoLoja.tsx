"use client";
import { useRouter } from "next/navigation";
import { FaRegStar, FaStar } from "react-icons/fa";

// Interface corrigida para corresponder ao seu JSON real
export interface ProductImage {
  id: string;
  imageUrl: string;
  productId: string;
  createdAt: string;
}

export interface StoreProduct {
  id: string;
  name: string;
  price: number | string; // Aceita string ou number para evitar quebras
  description?: string;
  productUrl?: string;
  images?: ProductImage[]; 
}

interface CardProdutoLojaProps {
  product: StoreProduct;
  isFeatured?: boolean;
}

export default function CardProdutoLoja({ product, isFeatured }: CardProdutoLojaProps) {
  const router = useRouter();

  function handleNavigate() {
    if (product.productUrl) {
      window.location.href = product.productUrl;
      return;
    }

    router.push(`/produto/${product.id}`);
  }
  const displayImage = product.images && product.images.length > 0
    ? product.images[0].imageUrl
    : "https://via.placeholder.com/150?text=Sem+Imagem";

  const parsedPrice = Number(product.price) || 0;

  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <div className="w-full bg-white rounded-2xl shadow-lg p-3 md:max-w-[220px]">
        <div className="relative bg-[#E0E0E0] rounded-xl h-[160px] md:h-[180px] flex items-center justify-center overflow-hidden">
          <img
          src={displayImage}
          alt={product.name}
          className="h-[120px] md:h-[140px] w-full object-contain hover:scale-110 transition duration-300"
        />
        </div>

        <h3 className="text-sm font-medium text-[#1A1C27] mt-3 line-clamp-2 min-h-[40px]">
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
          R$ {parsedPrice.toFixed(2)} no Pix
        </p>

        <p className="text-xs text-gray-600">
          ou 2x de R$ {(parsedPrice / 2).toFixed(2)} 
        </p>
      </div>
    </div>
  );
}