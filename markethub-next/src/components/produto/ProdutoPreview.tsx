"use client";

import { useEffect, useState } from "react";
import { FiBell, FiChevronLeft, FiChevronRight, FiVolume2 } from "react-icons/fi";

interface ProdutoPreviewProps {
  name: string;
  price: number | "";
  compactDescription: string;
  image: File | null;
}

export default function ProdutoPreview({ name, price, compactDescription, image }: ProdutoPreviewProps) {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setPreviewSrc(null);
      return;
    }

    const url = URL.createObjectURL(image);
    setPreviewSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);
  return (
    <div className="rounded-xl border border-[#E3E7F1] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] text-sm font-bold text-white">
            3
          </span>
          <h2 className="text-lg font-bold text-[#4D22F2]">Pré-visualização</h2>
        </div>
        <span className="rounded-lg bg-[#F1EEFF] px-4 py-2 text-xs font-semibold text-[#4D22F2]">
          Assim como ficará no site
        </span>
      </div>

      <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-lg border border-[#E4E8F3] bg-gradient-to-br from-white to-[#F7F8FC]">
        <button
          type="button"
          className="absolute left-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[#1B2744] shadow"
          aria-label="Imagem anterior"
        >
          <FiChevronLeft />
        </button>
        <img
          src={previewSrc || "/assets/image.png"}
          alt={name}
          className="h-[230px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.16)]"
        />
        <button
          type="button"
          className="absolute right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[#1B2744] shadow"
          aria-label="Próxima imagem"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#5F2CF2]" : "bg-[#D8DDE8]"}`}
          />
        ))}
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#121A33]">{name}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="gap-0">
        <span className="text-[#FFB31A]">★★★★</span>
        <span className="text-[#D8DDE8]">★</span>
        </div>
        <span className="text-sm text-[#68748F]">(128 avaliações)</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-2xl font-bold text-[#4D22F2]">
          R$ {Number(price || 0).toFixed(2).replace(".", ",")}
        </span>
        <span className="text-sm font-bold text-[#8993AA] line-through">R$ 249,90</span>
        <span className="rounded-full bg-[#FFE5E8] px-3 py-1 text-xs font-bold text-[#F04455]">
          -20%
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-[#2D3754]">{compactDescription}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <span className="flex items-center justify-center gap-2 rounded-lg bg-[#F7F8FC] px-3 py-3 text-xs font-semibold text-[#1B2744]">
          <FiVolume2 className="text-[#4D22F2]" />
          Bluetooth 5.3
        </span>
        <span className="flex items-center justify-center gap-2 rounded-lg bg-[#F7F8FC] px-3 py-3 text-xs font-semibold text-[#1B2744]">
          <FiBell className="text-[#4D22F2]" />
          Até 40h de bateria
        </span>
        <span className="flex items-center justify-center gap-2 rounded-lg bg-[#F7F8FC] px-3 py-3 text-xs font-semibold text-[#1B2744]">
          <FiVolume2 className="text-[#4D22F2]" />
          Cancelamento de ruído
        </span>
      </div>

      <button
        type="button"
        className="mt-6 h-12 w-full cursor-pointer rounded-lg border border-[#6B32FF] text-sm font-bold text-[#4D22F2] transition hover:bg-[#F6F2FF]"
      >
        Ver Produto
      </button>
    </div>
  );
}
