"use client";

import { PropsWithChildren, useState } from "react";
import { useRouter } from "next/navigation";
import { FiHelpCircle, FiMenu, FiSearch, FiX } from "react-icons/fi";
import type { IconType } from "react-icons";

type SidebarItem = {
  label: string;
  Icon: IconType;
  active?: boolean;
};

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", Icon: FiMenu },
  { label: "Produtos", Icon: FiMenu, active: true },
];

export default function ProtectedAdminLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#121A33]">
      <header className="sticky top-0 z-40 border-b border-[#E4E8F3] bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur">
        <div className="flex h-20 items-center gap-5 px-5 md:px-8">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[#17213D] transition hover:bg-[#F1EEFF]"
            aria-label="Abrir menu"
          >
            <FiMenu className="h-6 w-6" />
          </button>

          <img
            onClick={() => router.push("/")}
            src="/assets/logo.png"
            alt="MarketHub"
            className="h-11 w-auto cursor-pointer object-contain"
          />

          <div className="mx-auto hidden w-full max-w-[620px] items-center md:flex">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="h-12 w-full rounded-l-lg border border-[#DDE3F0] bg-[#F8FAFE] px-5 text-sm text-[#68748F] outline-none transition focus:border-[#6B3DF2]"
            />
            <button
              type="button"
              className="flex h-12 w-14 cursor-pointer items-center justify-center rounded-r-lg bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] text-white shadow-[0_12px_22px_rgba(80,70,230,0.24)]"
              aria-label="Pesquisar"
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4 md:gap-8">
            <button
              type="button"
              onClick={() => router.push("/favoritos")}
              className="hidden cursor-pointer flex-col items-center gap-1 text-xs font-semibold text-[#17213D] transition hover:text-[#5F2CF2] sm:flex"
            >
              {/* Ícone substituído */}
              Favoritos
            </button>
            <button
              type="button"
              onClick={() => router.push("/carrinho")}
              className="relative hidden cursor-pointer flex-col items-center gap-1 text-xs font-semibold text-[#17213D] transition hover:text-[#5F2CF2] sm:flex"
            >
              {/* Ícone substituído */}
              Carrinho
            </button>
            <button
              type="button"
              className="flex h-12 cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] px-5 text-sm font-bold text-white shadow-[0_12px_22px_rgba(80,70,230,0.24)]"
            >
              Minha Conta
            </button>
          </div>
        </div>

        <div className="border-t border-[#E9EDF7] px-5 py-3 md:hidden">
          <div className="flex">
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              className="h-11 w-full rounded-l-lg border border-[#DDE3F0] bg-[#F8FAFE] px-4 text-sm outline-none"
            />
            <button
              type="button"
              className="flex h-11 w-14 cursor-pointer items-center justify-center rounded-r-lg bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] text-white"
              aria-label="Pesquisar"
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-50 mt-20 w-[232px] border-r border-[#E7EAF4] bg-white px-5 py-8 transition-transform duration-300 lg:static lg:mt-0 lg:min-h-[calc(100vh-80px)] lg:translate-x-0 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#17213D] hover:bg-[#F1EEFF] lg:hidden"
            aria-label="Fechar menu"
          >
            <FiX className="h-5 w-5" />
          </button>

          <nav className="space-y-2">
            {sidebarItems.map(({ label }) => (
              <button
                key={label}
                type="button"
                className={`flex h-11 w-full cursor-pointer items-center gap-4 rounded-lg px-3 text-left text-sm font-bold transition ${
                  label === "Produtos"
                    ? "bg-[#F1EEFF] text-[#4D22F2]"
                    : "text-[#24304D] hover:bg-[#F7F8FC] hover:text-[#4D22F2]"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-12 rounded-lg bg-[#F3EEFF] px-4 py-6 text-center">
            <FiHelpCircle className="mx-auto h-8 w-8 text-[#4D22F2]" />
            <p className="mt-5 text-sm font-bold text-[#202A44]">Precisa de ajuda?</p>
            <p className="mt-2 text-xs font-medium text-[#5F2CF2]">Acesse nossa central de ajuda</p>
            <button
              type="button"
              className="mt-5 h-11 w-full cursor-pointer rounded-lg border border-[#6B32FF] text-sm font-bold text-[#4D22F2] transition hover:bg-white"
            >
              Ver Ajuda
            </button>
          </div>
        </aside>

        {isMenuOpen ? (
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 cursor-pointer bg-[#121A33]/30 lg:hidden"
          />
        ) : null}

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

