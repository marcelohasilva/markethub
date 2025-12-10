import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Actions() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-10 mt-[-31px] mr-47">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold cursor-pointer">
                <Heart className="w-5 h-5"/>
                Favoritos
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold cursor-pointer">
                <ShoppingCart className="w-5 h-5"/>
                Carrinho
            </button>
            <div className="flex items-center gap-14 ml-14">
            <button onClick={() => navigate("/cadastro")}
             className="text-gray-700 hover:text-blue-600 font-bold cursor-pointer">
                Entrar
            </button>
            <button onClick={() => navigate("/cadastro")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white font-bold hover:opacity-90 cursor-pointer">
                Cadastrar
            </button>
            </div>
        </div>
    );
}
