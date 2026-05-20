"use client";

import { FiHelpCircle, FiX } from "react-icons/fi";
import type { IconType } from "react-icons";

export type SidebarItem = {
  label: string;
  Icon: IconType;
  to: string;
};

export type SidebarTab = {
  label: string;
  to: string;
};

interface ProdutoSidebarProps {
  items: SidebarItem[];
  tabs: SidebarTab[];
  pathname: string;
  isMenuOpen: boolean;
  isConfigOpen: boolean;
  onToggleConfig: () => void;
  onCloseMenu: () => void;
  onNavigate: (to: string) => void;
}

export default function ProdutoSidebar({
  items,
  tabs,
  pathname,
  isMenuOpen,
  isConfigOpen,
  onToggleConfig,
  onCloseMenu,
  onNavigate,
}: ProdutoSidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 mt-20 w-[232px] border-r border-[#E7EAF4] bg-white px-5 py-8 transition-transform duration-300 lg:static lg:mt-0 lg:min-h-[calc(100vh-80px)] lg:w-[232px] lg:translate-x-0 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        type="button"
        onClick={onCloseMenu}
        className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#17213D] hover:bg-[#F1EEFF] lg:hidden"
        aria-label="Fechar menu"
      >
        <FiX className="h-5 w-5" />
      </button>

      <nav className="space-y-2">
        {items.map(({ label, Icon, to }) => {
          const isActive = pathname === to || (to === "/produtos" && pathname.startsWith("/produtos"));
          const isConfig = label === "Configurações";
          return (
            <button
              key={label}
              type="button"
              onClick={() => {
                if (isConfig) {
                  onToggleConfig();
                  return;
                }
                onNavigate(to);
              }}
              className={`flex h-11 w-full cursor-pointer items-center gap-4 rounded-lg px-3 text-left text-sm font-bold transition ${
                isActive
                  ? "bg-[#F1EEFF] text-[#4D22F2]"
                  : "text-[#24304D] hover:bg-[#F7F8FC] hover:text-[#4D22F2]"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          );
        })}
      </nav>

      <div
        className={`ml-[18px] mt-2 hidden overflow-hidden border-l border-[#E4E8F3] pl-6 transition-all duration-300 lg:block ${
          isConfigOpen ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => onNavigate(tab.to)}
            className={`block h-11 cursor-pointer text-sm font-semibold ${
              pathname === tab.to ? "text-[#4D22F2]" : "text-[#25314E]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-[#F3EEFF] px-4 py-6 text-center">
        <FiHelpCircle className="mx-auto h-8 w-8 text-[#4D22F2]" />
        <p className="mt-5 text-sm font-bold text-[#202A44]">Precisa de ajuda?</p>
        <p className="mt-2 text-xs font-medium text-[#5F2CF2]">
          Acesse nossa central de ajuda
        </p>
        <button
          type="button"
          className="mt-5 h-11 w-full cursor-pointer rounded-lg border border-[#6B32FF] text-sm font-bold text-[#4D22F2] transition hover:bg-white"
        >
          Ver Ajuda
        </button>
      </div>
    </aside>
  );
}
