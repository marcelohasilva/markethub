"use client";

import { FiLink, FiRefreshCw, FiX } from "react-icons/fi";

interface ProdutoFormLinkProps {
  productUrl: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onImport: () => void;
}

export default function ProdutoFormLink({ productUrl, onChange, onClear, onImport }: ProdutoFormLinkProps) {
  return (
    <section className="border-b border-[#E7EAF4] p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] text-sm font-bold text-white">
          1
        </span>
        <h2 className="text-lg font-bold text-[#4D22F2]">Link do produto</h2>
      </div>
      <label className="text-sm font-semibold text-[#2B3552]">
        Cole o link do produto de qualquer loja (Shopee, Amazon, etc.)
      </label>
      <div className="mt-3 flex flex-col gap-3 lg:flex-row">
        <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-lg border border-[#DDE3F0] px-4">
          <FiLink className="h-5 w-5 shrink-0 text-[#68748F]" />
          <input
            value={productUrl}
            onChange={(e) => onChange(e.target.value)}
            className="min-w-0 flex-1 text-sm text-[#1B2744] outline-none"
          />
          <button
            type="button"
            onClick={onClear}
            className="cursor-pointer text-[#68748F] hover:text-[#4D22F2]"
            aria-label="Limpar link"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <button
          type="button"
          onClick={onImport}
          className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7B2FFF] to-[#0B78F6] px-5 text-sm font-bold text-white shadow-[0_12px_22px_rgba(80,70,230,0.18)]"
        >
          <FiRefreshCw className="h-4 w-4" />
          Importar automaticamente
        </button>
      </div>
    </section>
  );
}
