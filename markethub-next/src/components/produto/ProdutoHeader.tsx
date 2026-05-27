"use client";

import { FiChevronDown, FiHeart, FiMenu, FiShoppingCart } from "react-icons/fi";

interface ProdutoHeaderProps {
  onToggleMenu: () => void;
  onNavigateHome: () => void;
  onNavigateFavoritos: () => void;
  onNavigateCarrinho: () => void;
}

export default function ProdutoHeader({
  onToggleMenu,
  onNavigateHome,
  onNavigateFavoritos,
  onNavigateCarrinho,
}: ProdutoHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E4E8F3] bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="flex h-20 items-center gap-5 px-5 md:px-8">
        <button
          type="button"
          onClick={onToggleMenu}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[#17213D] transition hover:bg-[#F1EEFF] lg:hidden"
          aria-label="Abrir menu"
        >
          <FiMenu className="h-6 w-6" />
        </button>

        <img
          onClick={onNavigateHome}
          src="/assets/logo.png"
          alt="MarketHub"
          className="h-11 w-auto cursor-pointer object-contain"
        />

        <div className="mx-auto hidden w-full max-w-[620px] items-center md:flex" />

        <div className="ml-auto flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={onNavigateFavoritos}
            className="hidden cursor-pointer flex-col items-center gap-1 text-xs font-semibold text-[#17213D] transition hover:text-[#5F2CF2] sm:flex"
          >
            <FiHeart className="h-6 w-6" />
            Favoritos
          </button>
          <button
            type="button"
            onClick={onNavigateCarrinho}
            className="relative hidden cursor-pointer flex-col items-center gap-1 text-xs font-semibold text-[#17213D] transition hover:text-[#5F2CF2] sm:flex"
          >
            <span className="relative">
              <FiShoppingCart className="h-6 w-6" />
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#5F2CF2] text-[11px] text-white">
                2
              </span>
            </span>
            Carrinho
          </button>
          <button
            type="button"
            className="flex h-12 cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] px-5 text-sm font-bold text-white shadow-[0_12px_22px_rgba(80,70,230,0.24)]"
          >
            Minha Conta
            <FiChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="border-t border-[#E9EDF7] px-5 py-3 md:hidden" />
    </header>
  );
}
