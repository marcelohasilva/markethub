"use client";

import { FiInfo } from "react-icons/fi";

export default function ProdutoFooterInfo() {
  return (
    <div className="flex gap-4 rounded-lg border border-[#E1D5FF] bg-[#F5F0FF] p-5 text-sm text-[#4D22F2]">
      <FiInfo className="mt-0.5 h-5 w-5 shrink-0" />
      <p>
        Todas as informações são importadas automaticamente da loja de origem.
        <br />
        Revise os dados antes de publicar.
      </p>
    </div>
  );
}
