
"use client";

import HeaderMain from "@/components/layout/HeaderMain";

import {
  FiZap,
  FiClock,
  FiArrowRight,
  FiTag,
  FiTruck,
  FiShield,
  FiPercent,
  FiHeart,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Tênis Esportivo Running Performance",
    store: "Netshoes",
    oldPrice: "R$ 299,90",
    price: "R$ 179,90",
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    tag: "MAIS VENDIDO",
  },
  {
    id: 2,
    name: "Headphone Bluetooth Premium",
    store: "Amazon",
    oldPrice: "R$ 399,90",
    price: "R$ 249,90",
    discount: 38,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    tag: "OFERTA ESPECIAL",
  },
  {
    id: 3,
    name: "Relógio Inteligente Smartwatch",
    store: "Shopee",
    oldPrice: "R$ 259,90",
    price: "R$ 149,90",
    discount: 42,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    tag: "PREÇO IMPERDÍVEL",
  },
  {
    id: 4,
    name: "Mochila Casual Premium",
    store: "AliExpress",
    oldPrice: "R$ 189,90",
    price: "R$ 119,90",
    discount: 37,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    tag: "DESTAQUE",
  },
  {
    id: 5,
    name: "Óculos de Sol Moderno",
    store: "Mercado Livre",
    oldPrice: "R$ 159,90",
    price: "R$ 89,90",
    discount: 44,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    tag: "MAIOR DESCONTO",
  },
  {
    id: 6,
    name: "Tênis Casual Urban",
    store: "Netshoes",
    oldPrice: "R$ 349,90",
    price: "R$ 219,90",
    discount: 37,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    tag: "OFERTA DO DIA",
  },
  {
    id: 7,
    name: "Fone de Ouvido Sem Fio",
    store: "Amazon",
    oldPrice: "R$ 199,90",
    price: "R$ 119,90",
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
    tag: "OPORTUNIDADE",
  },
  {
    id: 8,
    name: "Relógio Minimalista",
    store: "Shopee",
    oldPrice: "R$ 229,90",
    price: "R$ 139,90",
    discount: 39,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
    tag: "OFERTA ESPECIAL",
  },
];

const categories = [
  "Todas as ofertas",
  "Eletrônicos",
  "Moda",
  "Esportes",
  "Acessórios",
  "Casa",
];

const OffersPage = () => {
  return (
    <>
      <HeaderMain />

      <main className="min-h-screen bg-[#F7F8FC]">
        <div className="mx-auto w-full max-w-[1450px] px-4 py-6 md:px-8 lg:px-12">

          {/* BANNER PRINCIPAL */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#713DF2] via-[#6555F5] to-[#187FF0] px-6 py-12 text-white shadow-lg md:px-14 md:py-16">

            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">

              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wider">
                  <FiZap />
                  MARKET HUB EXCLUSIVO
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                  OFERTAS
                  <br />
                  DO DIA
                </h1>

                <p className="mt-4 max-w-md text-base leading-7 text-white/85 md:text-lg">
                  As melhores oportunidades estão aqui!
                  Encontre produtos incríveis com preços
                  que cabem no seu bolso.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#713DF2] shadow-md">
                    ATÉ 50% OFF
                  </span>

                  <span className="text-sm text-white/80">
                    Oportunidades imperdíveis
                  </span>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute h-64 w-64 rounded-full bg-white/15 blur-2xl md:h-80 md:w-80" />

                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
                  alt="Tênis em destaque"
                  className="relative z-10 h-56 w-full max-w-md object-contain drop-shadow-2xl transition duration-500 hover:scale-105 md:h-80"
                />

                <div className="absolute right-0 top-4 z-20 rotate-12 rounded-2xl bg-white px-5 py-4 text-center text-[#713DF2] shadow-xl md:right-5">
                  <p className="text-xs font-bold">DESCONTOS DE ATÉ</p>
                  <p className="text-3xl font-black">50%</p>
                  <p className="text-[10px] font-semibold">OFF</p>
                </div>
              </div>

            </div>
          </section>

          {/* BENEFÍCIOS */}
          <section className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">

            {[
              {
                icon: FiPercent,
                title: "Grandes descontos",
                subtitle: "Preços especiais",
              },
              {
                icon: FiTag,
                title: "Ofertas selecionadas",
                subtitle: "Oportunidades únicas",
              },
              {
                icon: FiTruck,
                title: "Grandes lojas",
                subtitle: "Parceiros confiáveis",
              },
              {
                icon: FiShield,
                title: "Mais confiança",
                subtitle: "Compre com segurança",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1EDFF] text-[#713DF2]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#282729] md:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] text-gray-500 md:text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </section>

          {/* TÍTULO DAS OFERTAS */}
          <section className="mt-12">

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-2 text-[#713DF2]">
                  <FiZap className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Seleção MarketHub
                  </span>
                </div>

                <h2 className="mt-2 text-2xl font-extrabold text-[#282729] md:text-3xl">
                  Ofertas imperdíveis
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Confira os produtos que estão com preços especiais.
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-[#F0EBFF] px-4 py-3 text-sm font-semibold text-[#713DF2]">
                <FiClock />
                Vitrine de ofertas
              </div>
            </div>

            {/* CATEGORIAS */}
            <div className="mt-7 flex gap-3 overflow-x-auto pb-3">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold ${
                    index === 0
                      ? "bg-gradient-to-r from-[#713DF2] to-[#287FF0] text-white shadow-md"
                      : "border border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* PRODUTOS */}
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#F8F8FC] p-4 md:h-52">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute left-3 top-3 rounded-md bg-[#713DF2] px-2 py-1 text-[9px] font-bold text-white md:text-[10px]">
                      -{product.discount}%
                    </span>

                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
                      <FiHeart className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="p-3 md:p-4">

                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#713DF2]">
                      {product.store}
                    </span>

                    <h3 className="mt-2 min-h-[40px] text-xs font-semibold leading-5 text-[#282729] md:text-sm">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-xs text-gray-400 line-through">
                      {product.oldPrice}
                    </p>

                    <div className="mt-1 flex items-center justify-between gap-1">
                      <span className="text-lg font-extrabold text-[#282729] md:text-xl">
                        {product.price}
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-medium text-green-600">
                      Economize {product.discount}%
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#713DF2] to-[#287FF0] py-2.5 text-xs font-bold text-white">
                      Conferir oferta
                      <FiArrowRight />
                    </div>

                  </div>
                </article>
              ))}

            </div>
          </section>

          {/* BANNER FINAL */}
          <section className="relative mt-14 overflow-hidden rounded-3xl bg-[#19172C] px-6 py-10 text-white md:px-12 md:py-12">

            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#713DF2]/30 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A78BFA]">
                  MarketHub
                </span>

                <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
                  Economizar nunca foi tão fácil!
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
                  As melhores oportunidades das suas lojas favoritas
                  reunidas em um só lugar.
                </p>
              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8F5CFF] to-[#1A7FF0] shadow-lg">
                <FiTag className="h-8 w-8" />
              </div>

            </div>
          </section>

          <p className="mt-6 text-center text-[10px] text-gray-400">
            * Layout demonstrativo. Produtos, preços e descontos ilustrativos.
          </p>

        </div>
      </main>

      <footer className="bg-[#F7F8FC] py-6 text-center text-sm text-gray-500">
        &copy; 2024 MarketHub. Todos os direitos reservados.
      </footer>
    </>
  );
};

export default OffersPage;
