"use client";
import { useRouter } from "next/navigation";

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
  console.log("Dados do produto chegando no Card:", product);

  // 1. Prioriza SEMPRE a imagem real do banco. Se não existir, usa a de segurança.
  const displayImage = product.images && product.images.length > 0
    ? product.images[0].imageUrl
    : "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&q=80";

  // 2. Garante que o preço vire número para o .toFixed() funcionar perfeitamente
  const parsedPrice = Number(product.price) || 0;

  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <div className="w-full max-w-[220px] rounded-2xl bg-white p-3 shadow-lg">
        <div className="relative flex h-[170px] items-center justify-center rounded-xl bg-[#F3F4F6] overflow-hidden">
          {isFeatured ? (
            <span className="absolute left-2 top-2 z-10 rounded-md bg-[#6B3DF2] px-2 py-1 text-[10px] font-semibold text-white">
              Mais popular
            </span>
          ) : null}
                <img
          src={displayImage}
          alt={product.name}
          // Mude de 'object-contain' para 'object-cover w-full h-full'
          className="h-full w-full object-cover transition duration-300 hover:scale-110"
        />
        </div>

        <p className="mt-3 text-xs text-gray-500">Tênis Esportivo</p>
        <h3 className="text-sm font-semibold text-[#1A1C27] line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <p className="mt-1 text-sm font-bold text-[#1A1C27]">
          R$ {parsedPrice.toFixed(2)}
        </p>

        <button className="mt-2 text-xs font-semibold text-[#6B3DF2]">
          Ver detalhes →
        </button>
      </div>
    </div>
  );
}