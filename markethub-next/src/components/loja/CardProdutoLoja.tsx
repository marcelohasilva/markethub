"use client";
import { useRouter } from "next/navigation";

export interface StoreProduct {
  id: string;
  name: string;
  price: number;
  description?: string;
  productUrl?: string;
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

  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <div className="w-full max-w-[220px] rounded-2xl bg-white p-3 shadow-lg">
        <div className="relative flex h-[170px] items-center justify-center rounded-xl bg-[#F3F4F6]">
          {isFeatured ? (
            <span className="absolute left-2 top-2 rounded-md bg-[#6B3DF2] px-2 py-1 text-[10px] font-semibold text-white">
              Mais popular
            </span>
          ) : null}
          <img
            src="/assets/image.png"
            alt={product.name}
            className="h-[120px] object-contain transition hover:scale-110"
          />
        </div>

        <p className="mt-3 text-xs text-gray-500">Tenis Esportivo</p>
        <h3 className="text-sm font-semibold text-[#1A1C27]">
          {product.name}
        </h3>

        <p className="mt-1 text-sm font-bold text-[#1A1C27]">
          R$ {product.price.toFixed(2)}
        </p>

        <button className="mt-2 text-xs font-semibold text-[#6B3DF2]">
          Ver detalhes →
        </button>
      </div>
    </div>
  );
}
