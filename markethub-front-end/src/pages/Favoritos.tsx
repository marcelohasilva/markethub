import { useNavigate } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";
import CaixaFavoritos from "../assets/caixa_favoritos.png"

export default function Favoritos() {
  const navigate = useNavigate();
  return (
    <>
        <HeaderMain />
        <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left ml-6 sm:ml-12 lg:ml-24 mt-12 sm:mt-16 ml-[95px] mt-[98px]">Meus Favoritos</h1>
        </div>
        <div className="flex justify-center mt-4">
            <div className="h-px w-full max-w-[calc(100%-190px)] ml-[95px] mr-[95px] bg-gray-300"/>
        </div>
        <div>
          <img className="h-55 mt-[42px] ml-[644px]" src={CaixaFavoritos} alt="Caixa de Favoritos" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-center mt-6 text-[#1A1C27]">Sua lista de favoritos está vazia</h2>
          <h2 className="text-md sm:text-lg lg:text-xl text-center mt-4 text-gray-600 text-[#767A87]">Adicione itens aos seus favoritos para vê-los aqui!</h2>
        </div>
        <div className="flex justify-center mt-[59px] mb-[83px]">
        <button onClick={() => navigate("/")}
            className="px-5 py-2.5 rounded-xl text-xl w-[300px] h-[65px] bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white font-bold hover:opacity-90 cursor-pointer">
                Voltar às compras
            </button>
        </div>
    </>
  );
}