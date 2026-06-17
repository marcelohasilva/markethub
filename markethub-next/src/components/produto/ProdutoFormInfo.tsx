"use client";

import { useEffect, useState } from "react";
import { FiChevronDown, FiSend, FiStar } from "react-icons/fi";

interface ProdutoFormInfoProps {
  name: string;
  price: number | "";
  stock: number | "";
  description: string;
  categoryId: string;
  featured: boolean;

  image: File | null;
  onImageChange: (file: File | null) => void;

  onNameChange: (value: string) => void;
  onPriceChange: (value: number | "") => void;
  onStockChange: (value: number | "") => void;
  onDescriptionChange: (value: string) => void;
  onCategoryIdChange: (value: string) => void;
  onToggleFeatured: () => void;
  descriptionLength: number;
}

export default function ProdutoFormInfo({
  name,
  price,
  stock,
  description,
  categoryId,
  featured,
  image,
  onImageChange,
  onNameChange,
  onPriceChange,
  onStockChange,
  onDescriptionChange,
  onCategoryIdChange,
  onToggleFeatured,
  descriptionLength,
}: ProdutoFormInfoProps) {
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
    <section className="p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7B2FFF] to-[#0B78F6] text-sm font-bold text-white">
          2
        </span>
        <h2 className="text-lg font-bold text-[#4D22F2]">
          Informações do produto
        </h2>
      </div>

      <div className="space-y-5">

        {/* NOME */}
        <div>
          <label className="text-sm font-bold text-[#1B2744]">
            Nome do Produto
          </label>
          <input
            className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>

        {/* PREÇO */}
        <div>
          <label className="text-sm font-bold text-[#1B2744]">Preço</label>
          <input
            className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
            type="number"
            value={price}
            onChange={(e) =>
              onPriceChange(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>

        {/* ESTOQUE */}
        <div>
          <label className="text-sm font-bold text-[#1B2744]">Estoque</label>
          <input
            className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
            type="number"
            value={stock}
            onChange={(e) =>
              onStockChange(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>

        {/* DESCRIÇÃO */}
        <div>
          <label className="text-sm font-bold text-[#1B2744]">
            Descrição
          </label>
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

        {/* IMAGEM */}
        <div>
          <label className="text-sm font-bold text-[#1B2744]">
            Imagem
          </label>

          <div className="mt-2 flex h-12 items-center rounded-lg border border-[#DDE3F0] px-4">
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm text-[#68748F]"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                onImageChange(file);
              }}
            />
          </div>

          {/* PREVIEW LOCAL */}
          {previewSrc && (
            <img
              src={previewSrc}
              alt="Preview"
              className="mt-3 h-24 w-24 rounded-lg object-cover border"
            />
          )}
        </div>

        {/* CATEGORIA */}
        <div>
          <label className="text-sm font-bold text-[#1B2744]">
            Categoria (ID)
          </label>
          <div className="mt-2 flex h-12 items-center justify-between rounded-lg border border-[#DDE3F0] px-4">
            <input
              value={categoryId}
              onChange={(e) => onCategoryIdChange(e.target.value)}
              placeholder="Opcional"
              className="min-w-0 flex-1 text-sm text-[#1B2744] outline-none"
            />
            <FiChevronDown className="h-5 w-5 text-[#68748F]" />
          </div>
        </div>

        {/* DESTAQUE */}
        <div className="flex flex-col gap-4 rounded-lg border border-[#E4E8F3] bg-[#F8FAFE] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <FiStar className="h-6 w-6 fill-[#FFB31A] text-[#FFB31A]" />
            <div>
              <p className="text-sm font-bold text-[#1B2744]">
                Produto em destaque
              </p>
              <p className="mt-1 text-sm text-[#68748F]">
                Produtos em destaque aparecem na home e coleções especiais.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onToggleFeatured}
            className={`relative h-7 w-12 rounded-full transition ${
              featured ? "bg-[#5F2CF2]" : "bg-[#D9DEE9]"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                featured ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#7B2FFF] to-[#0B78F6] text-base font-bold text-white shadow-[0_14px_28px_rgba(80,70,230,0.22)]"
        >
          <FiSend className="h-5 w-5" />
          Publicar Produto
        </button>
      </div>
    </section>
  );
}