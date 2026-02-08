import ButtonCart from "./ButtonCart";
import type { FavoriteProduct } from "../Functions/Storage";

interface InfoProductProps {
  product: FavoriteProduct;
}

const InfoProduct = ({ product }: InfoProductProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-[#282729] text-center mt-20 text-3xl">
        {product.name}
      </div>

      <div className="flex gap-1 text-center justify-center mr-4 mt-2">
        <span className="bg-gradient-to-r from-[#8F5CFF] to-[#1782ED] bg-clip-text text-transparent text-2xl">
          ★★★
        </span>
        <span className="text-gray-300 text-2xl">★★</span>
        <p className="text-gray-500 text-xs mt-2 ml-2">(120 avaliações)</p>
      </div>

      <div className="text-3xl font-bold text-[#282729] text-center mt-10">
        R$ {product.price.toFixed(2)}
      </div>

      <div className="flex flex-col items-center mt-8">
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
