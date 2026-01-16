import { FaHeart, FaTrash, FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa";
import { TrashIcon } from "@heroicons/react/24/outline";


export default function CardFavorito() {
  return (
    <div className="h-[212px] w-[188px] bg-[#ffffff] rounded-xl drop-shadow mt-[25px] ml-[96px] pt-[0.1px]">
        <div className="bg-[#D9D9D9] h-[132px] w-[172px] m-[8px]">
          <div className="absolute top-[14px] right-[12px] flex flex-col gap-[8px]">
            <FaHeart className="w-[25px] h-[23px] text-red-500 text-xl cursor-pointer hover:scale-110"/>
            <FaTrash className="w-[25px] h-[23px] text-gray-500 text-xl cursor-pointer hover:scale-110"/>
          </div>
        </div>
        <h3 className="text-[8.79px] font-medium ml-[9px] mt-[-9px] text-[#1A1C27]">Sapato</h3>
        <div className="flex ml-[9px] mt-[1px] gap-[2px] text-indigo-500">
          <FaStar className="w-[10px] h-[10px]" />
          <FaStar className="w-[10px] h-[10px]" />
          <FaStar className="w-[10px] h-[10px]" />
          <FaStar className="w-[10px] h-[10px]" />
          <FaRegStar className="w-[10px] h-[10px]" />
        </div>
        <h1 className="text-[7.89px] font-bold ml-[9px] text-[#1A1C27]">R$ 50,00 no Pix</h1>  
        <p className="text-[5.57px] font-light ml-[9px] mt-[-3px] text-[#1A1C27]">ou 2x de R$ 20,00</p>
          <button className="ml-[9px] mr-[9px] rounded-sm bg-indigo-500 text-white text-[10px] h-[26px] w-[171px] font-semibold hover:bg-indigo-600 transition">Adicionar ao Carrinho</button> 
    </div>
  );
}