"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  FiBell,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiHelpCircle,
  FiInfo,
  FiLink,
  FiRefreshCw,
  FiSend,
  FiStar,
  FiTag,
  FiVolume2,
  FiX,
} from "react-icons/fi";

export default function ProductCreateForm() {
  const router = useRouter();

  const [productUrl, setProductUrl] = useState(
    "https://shopee.com.br/Fone-de-Ouvido-Bluetooth-SoundMax-H30-i.123456789.987654321",
  );
  const [name, setName] = useState("Fone de Ouvido Bluetooth SoundMax H30");
  const [price, setPrice] = useState<number | "">(199.9);
  const [description, setDescription] = useState(
    "Desfrute de um som potente e envolvente com o SoundMax H30.\nConforto, bateria de longa duração e conectividade bluetooth para o seu dia a dia.\nCompatível com smartphones, tablets e notebooks.",
  );
  const [category, setCategory] = useState("Eletrônicos  >  Áudio  >  Fones de Ouvido");
  const [featured, setFeatured] = useState(false);

  const compactDescription = useMemo(
    () => description.split("\n").filter(Boolean).slice(0, 2).join(" "),
    [description],
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || price === "" || !description) {
      alert("Preencha todos os campos");
      return;
    }

    if (Number(price) <= 0) {
      alert("O preço deve ser maior que 0");
      return;
    }

    const token = localStorage.getItem("api_token");
    if (!token) {
      alert("Você precisa estar logado para cadastrar produtos!");
      return;
    }

    try {
      const payload = {
        name: name.trim(),
        price: Number(price),
        description: description.trim(),
      };

      const resposta = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await resposta.json();

      if (!resposta.ok) {
        throw new Error(data.message || "Erro ao salvar produto");
      }

      router.push("/loja");
      setName("");
      setPrice("");
      setDescription("");
    } catch (error: any) {
      alert(error.message || "Erro ao conectar ao servidor");
    }
  }

  return (
    <>
      <section className="bg-gradient-to-r from-[#7F25FF] via-[#3345F2] to-[#057DF5] px-5 py-7 text-white md:px-8">
        <div className="flex items-center gap-5">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-white/15">
            <FiTag className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Cadastrar Produto</h1>
            <p className="mt-2 text-sm font-medium text-white/95">
              Cole o link do produto e importamos todas as informações para você
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 p-5 md:p-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-xl border border-[#E3E7F1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
        >
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
                  onChange={(e) => setProductUrl(e.target.value)}
                  className="min-w-0 flex-1 text-sm text-[#1B2744] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setProductUrl("")}
                  className="cursor-pointer text-[#68748F] hover:text-[#4D22F2]"
                  aria-label="Limpar link"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
              <button
                type="button"
                className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7B2FFF] to-[#0B78F6] px-5 text-sm font-bold text-white shadow-[0_12px_22px_rgba(80,70,230,0.18)]"
              >
                <FiRefreshCw className="h-4 w-4" />
                Importar automaticamente
              </button>
            </div>
          </section>

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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#1B2744]">Preço</label>
                <input
                  className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
                  type="number"
                  inputMode="decimal"
                  value={price}
                  onChange={(e) => {
                    const raw = e.target.value;
                    setPrice(raw === "" ? "" : Number(raw));
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#1B2744]">Descrição</label>
                <textarea
                  className="mt-2 min-h-[138px] w-full resize-none rounded-lg border border-[#DDE3F0] px-4 py-4 text-sm leading-6 text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
                  maxLength={5000}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <p className="mt-[-28px] pr-4 text-right text-xs text-[#68748F]">
                  {description.length}/5000
                </p>
              </div>

              <div>
                <label className="text-sm font-bold text-[#1B2744]">Categoria</label>
                <div className="mt-2 flex h-12 items-center justify-between rounded-lg border border-[#DDE3F0] px-4">
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="min-w-0 flex-1 text-sm text-[#1B2744] outline-none"
                  />
                  <FiChevronDown className="h-5 w-5 text-[#68748F]" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-[#E4E8F3] bg-[#F8FAFE] px-5 py-4">
                <div className="flex items-center gap-4">
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
                  onClick={() => setFeatured((value) => !value)}
                  className={`relative h-7 w-12 cursor-pointer rounded-full transition ${
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
        </form>

        <aside className="space-y-5">
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
                src="/assets/image.png"
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
              <span className="text-[#FFB31A]">★★★★</span>
              <span className="text-[#D8DDE8]">★</span>
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

          <div className="flex gap-4 rounded-lg border border-[#E1D5FF] bg-[#F5F0FF] p-5 text-sm text-[#4D22F2]">
            <FiInfo className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              Todas as informações são importadas automaticamente da loja de origem.
              <br />
              Revise os dados antes de publicar.
            </p>
          </div>
        </aside>
      </div>

      <div className="hidden" aria-hidden>
        <FiHelpCircle />
      </div>
    </>
  );
}

