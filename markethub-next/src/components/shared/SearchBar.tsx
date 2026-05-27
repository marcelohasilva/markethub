"use client";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  onMenuClick?: () => void;
  variant?: "full" | "brand" | "input";
}

export default function SearchBar({ onMenuClick, variant = "full" }: SearchBarProps) {
  const router = useRouter();
  const showBrand = variant !== "input";
  const showInput = variant !== "brand";
  const containerClassName =
    variant === "full"
      ? "flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-6"
      : variant === "brand"
      ? "flex items-center gap-3"
      : "flex w-full";

  return (
    <div className={containerClassName}>
      {showBrand && (
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50 lg:hidden"
            aria-label="Abrir menu"
          >
            <FiMenu className="h-5 w-5" />
          </button>
          <img
            onClick={() => router.push("/")}
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 w-fit cursor-pointer"
          />
        </div>
      )}

      {showInput && (
        <div className="flex w-full md:flex-1 md:max-w-[520px] md:mx-auto">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="w-full h-11 px-4 rounded-l-xl border border-gray-300 focus:outline-none transition focus:border-[#6B3DF2]"
          />
          <button className="h-11 w-14 rounded-r-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white flex items-center justify-center transition hover:opacity-90 hover:shadow-md cursor-pointer">
            <FiSearch className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
