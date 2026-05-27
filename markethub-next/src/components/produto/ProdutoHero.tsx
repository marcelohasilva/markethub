"use client";

import { FiShoppingBag } from "react-icons/fi";

export default function ProdutoHero() {
  return (
    <section className="bg-gradient-to-r from-[#7F25FF] via-[#3345F2] to-[#057DF5] px-5 py-7 text-white md:px-8">
      <div className="flex items-center gap-5">
        <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-white/15">
          <FiShoppingBag className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Cadastrar Produto</h1>
          <p className="mt-2 text-sm font-medium text-white/95">
            Cole o link do produto e importamos todas as informações para você
          </p>
        </div>
      </div>
    </section>
  );
}
