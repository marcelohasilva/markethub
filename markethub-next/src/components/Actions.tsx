"use client";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ActionsProps {
  variant?: "full" | "compact";
}

export default function Actions({ variant = "full" }: ActionsProps) {
  const router = useRouter();
  const cartCount = 2;
  const isCompact = variant === "compact";

  return (
    <div className="flex items-center gap-4 md:gap-6 justify-between lg:justify-end flex-nowrap">
      <button
        onClick={() => router.push("/favoritos")}
        className="flex items-center gap-2 text-gray-700 font-semibold transition hover:text-gray-900 cursor-pointer"
      >
        <FiHeart className="h-5 w-5 cursor-pointer" />
        <span className={isCompact ? "hidden" : "hidden md:inline cursor-pointer"}>Favoritos</span>
      </button>

      <button
        onClick={() => router.push("/carrinho")}
        className="flex items-center gap-2 text-gray-700 font-semibold transition hover:text-gray-900 cursor-pointer"
      >
        <span className="relative">
          <FiShoppingCart className="h-5 w-5 cursor-pointer" />
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#6B3DF2] text-[10px] font-semibold text-white">
            {cartCount}
          </span>
        </span>
        <span className={isCompact ? "hidden" : "hidden md:inline cursor-pointer"}>Carrinho</span>
      </button>

      {!isCompact && (
        <button
          onClick={() => router.push("/login")}
          className="hidden items-center gap-2 text-gray-700 font-bold cursor-pointer transition hover:text-gray-900 lg:flex"
        >
          <FiUser className="h-5 w-5" />
          Entrar
        </button>
      )}

      {!isCompact && (
        <button
          onClick={() => router.push("/cadastro")}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white font-bold cursor-pointer transition hover:opacity-90 hover:shadow-md"
        >
          Cadastrar
        </button>
      )}
    </div>
  );
}
