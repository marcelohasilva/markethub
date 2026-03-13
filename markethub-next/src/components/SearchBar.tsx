"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-center lg:gap-8 lg:w-auto">
      <img
        onClick={() => router.push("/")}
        src="/assets/logo.png"
        alt="Logo"
        className="h-10 w-fit cursor-pointer"
      />

      <div className="flex w-full lg:w-[520px]">
        <input
          type="text"
          placeholder="Pesquise"
          className="w-full h-11 px-4 rounded-l-xl border border-gray-300 focus:outline-none"
        />
        <button className="h-11 w-14 rounded-r-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white flex items-center justify-center hover:opacity-90 transition cursor-pointer">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
