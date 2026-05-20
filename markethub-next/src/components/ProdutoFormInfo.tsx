"use client";

import { FiChevronDown, FiSend, FiStar } from "react-icons/fi";

interface ProdutoFormInfoProps {
  name: string;
  description: string;
  category: string;
  featured: boolean;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onToggleFeatured: () => void;
  descriptionLength: number;
}

export default function ProdutoFormInfo({
  name,
  description,
  category,
  featured,
  onNameChange,
  onDescriptionChange,
  onCategoryChange,
  onToggleFeatured,
  descriptionLength,
}: ProdutoFormInfoProps) {
  return (
    <section className="p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] text-sm font-bold text-white">
          2
        </span>
        <h2 className="text-lg font-bold text-[#4D22F2]">Informações do produto</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-bold text-[#1B2744]">Nome do Produto</label>
          <input
            className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-bold text-[#1B2744]">Descrição</label>
          <textarea
            className="mt-2 min-h-[138px] w-full resize-none rounded-lg border border-[#DDE3F0] px-4 py-4 text-sm leading-6 text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
            maxLength={5000}
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
          <p className="mt-[-28px] pr-4 text-right text-xs text-[#68748F]">
            {descriptionLength}/5000
          </p>
        </div>

        <div>
          <label className="text-sm font-bold text-[#1B2744]">Categoria</label>
          <div className="mt-2 flex h-12 items-center justify-between rounded-lg border border-[#DDE3F0] px-4">
            <input
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="min-w-0 flex-1 text-sm text-[#1B2744] outline-none"
            />
            <FiChevronDown className="h-5 w-5 text-[#68748F]" />
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border border-[#E4E8F3] bg-[#F8FAFE] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <FiStar className="h-6 w-6 fill-[#FFB31A] text-[#FFB31A]" />
            <div>
              <p className="text-sm font-bold text-[#1B2744]">
                Produto em destaque <span className="font-medium text-[#68748F]">(opcional)</span>
              </p>
              <p className="mt-1 text-sm text-[#68748F]">
                Produtos em destaque aparecem na home e em coleções especiais.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onToggleFeatured}
            className={`relative h-7 w-12 shrink-0 cursor-pointer rounded-full transition ${
              featured ? "bg-[#5F2CF2]" : "bg-[#D9DEE9]"
            }`}
            aria-label="Produto em destaque"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                featured ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>

        <button
          type="submit"
          className="flex h-[52px] w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#7B2FFF] to-[#0B78F6] text-base font-bold text-white shadow-[0_14px_28px_rgba(80,70,230,0.22)]"
        >
          <FiSend className="h-5 w-5" />
          Publicar Produto
        </button>
      </div>
    </section>
  );
}
