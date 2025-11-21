import { Heart, ShoppingCart } from "lucide-react";

export default function Actions() {
    return (
        <div className="flex items-center gap-10 mt-[-31px] mr-47">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold">
                <Heart className="w-5 h-5"/>
                Favoritos
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold">
                <ShoppingCart className="w-5 h-5"/>
                Carrinho
            </button>
            <div className="flex items-center gap-14 ml-14">
            <button className="text-gray-700 hover:text-blue-600 font-bold">
                Entrar
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#186BC4] to-[#6D44C5] text-white font-bold hover:opacity-90">
                Cadastrar
            </button>
            </div>
        </div>
    );
}
