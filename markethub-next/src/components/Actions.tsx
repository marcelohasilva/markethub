"use client";
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Actions() {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center gap-4 justify-between lg:justify-end">
      <button
        onClick={() => router.push("/favoritos")}
        className="flex items-center gap-2 text-gray-700 font-semibold"
      >
        <Heart className="w-5 h-5" />
        <span className="hidden sm:inline">Favoritos</span>
      </button>

      <button
        onClick={() => router.push("/carrinho")}
        className="flex items-center gap-2 text-gray-700 font-semibold"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="hidden sm:inline">Carrinho</span>
      </button>

      <button
        onClick={() => router.push("/cadastro")}
        className="text-gray-700 font-bold"
      >
        Entrar
      </button>

      <button
        onClick={() => router.push("/cadastro")}
        className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white font-bold"
      >
        Cadastrar
      </button>
    </div>
  );
}
