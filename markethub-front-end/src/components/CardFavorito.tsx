import { FaHeart, FaTrash, FaStar, FaRegStar } from "react-icons/fa";
import img from "../assets/image.png";

export default function CardFavorito() {
  return (
    <div className="w-[220px] bg-white rounded-2xl shadow-lg p-3 ml-[95px] mt-[25px]">
      <div className="relative bg-[#E0E0E0] rounded-xl h-[180px] flex items-center justify-center">
        <img src={img} alt="Produto" className="h-[140px] object-contain hover:scale-150 transition"/>

        <div className="absolute top-3 right-3 flex flex-col gap-3">
          <FaHeart className="text-red-500 text-xl cursor-pointer hover:scale-110 transition" />
          <FaTrash className="text-gray-500 text-xl cursor-pointer hover:scale-110 transition" />
        </div>
      </div>

      <h3 className="text-sm font-medium text-[#1A1C27] mt-3">
        Sapatos
      </h3>

      <div className="flex gap-1 text-indigo-500 my-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>

      <p className="text-sm font-bold text-[#1A1C27]">
        R$ 50,00 no Pix
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
