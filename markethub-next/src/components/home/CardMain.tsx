"use client";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function CardMain() {
  return (
    <Link
      href="/produto"
      className="block w-[220px] bg-white rounded-2xl shadow-lg p-3 ml-[95px] mt-[25px] hover:opacity-95"
    >
      <div className="relative bg-[#E0E0E0] rounded-xl h-[180px] flex items-center justify-center">
        <img src="/assets/image.png" alt="Produto" className="h-[140px] object-contain hover:scale-150 transition" />
      </div>

      <h3 className="text-sm font-medium text-[#1A1C27] mt-3">
        Sapatos
      </h3>

      <div className="flex gap-1 text-indigo-500 my-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>

      <p className="text-sm font-bold text-[#1A1C27]">
        R$ 50,00 no Pix
      </p>
      <p className="text-xs text-gray-600">
        ou 2x de R$ 20,00
      </p>
      <p className="text-xs text-green-600">
        frete grátis
      </p>
    </Link>
  );
}
