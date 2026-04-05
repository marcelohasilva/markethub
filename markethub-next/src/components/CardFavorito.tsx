import { FaHeart, FaTrash, FaStar, FaRegStar } from "react-icons/fa";
import type { FavoriteProduct } from "../Functions/Storage";

interface CardFavoritoProps {
  product: FavoriteProduct;
  onRemove: (id: number) => void;
}

export default function CardFavorito({ product, onRemove }: CardFavoritoProps) {
  return (
    <div className="w-[220px] bg-white rounded-2xl shadow-lg p-3">
      <div className="relative bg-[#E0E0E0] rounded-xl h-[180px] flex items-center justify-center overflow-hidden">
        <img src={product.image} alt="Produto" className="h-[140px] object-contain hover:scale-105 transition"/>

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            type="button"
            className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:scale-105 transition"
            aria-label="Favorito"
          >
            <FaHeart className="text-red-500 text-base" />
          </button>
          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:scale-105 transition"
            aria-label="Remover favorito"
          >
            <FaTrash className="text-gray-500 text-base" />
          </button>
        </div>
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
        {product.price} no Pix
      </p>
      <p className="text-xs text-gray-600">
        ou 2x de R$ 20,00
      </p>

      <button className="mt-3 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}  
