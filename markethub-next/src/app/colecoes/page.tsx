import CollectionsPage from "@/features/collections/CollectionsPage";

"use client";

import HeaderMain from "@/components/layout/HeaderMain";
import HomeFooter from "@/features/home/components/HomeFooter";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronRight,
  FiGrid,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const collections = [
  {
    id: 1,
    title: "Setup Gamer",
    description: "Tudo para elevar sua experiência nos jogos.",
    category: "GAMING",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=85",
    color: "from-violet-600/80",
    products: "Tecnologia e periféricos",
  },
  {
    id: 2,
    title: "Tecnologia em Foco",
    description: "Inovação e praticidade para o seu dia a dia.",
    category: "TECNOLOGIA",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=85",
    color: "from-blue-600/80",
    products: "Eletrônicos e acessórios",
  },
  {
    id: 3,
    title: "Casa dos Sonhos",
    description: "Detalhes que transformam qualquer ambiente.",
    category: "CASA",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
    color: "from-amber-600/70",
    products: "Decoração e utilidades",
  },
  {
    id: 4,
    title: "Estilo & Lifestyle",
    description: "Encontre peças que combinam com você.",
    category: "ESTILO",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85",
    color: "from-pink-600/70",
    products: "Moda e acessórios",
  },
  {
    id: 5,
    title: "Universo Mobile",
    description: "Seu mundo conectado em um só lugar.",
    category: "MOBILE",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=85",
    color: "from-cyan-600/70",
    products: "Celulares e acessórios",
  },
  {
    id: 6,
    title: "Criatividade em Alta",
    description: "Equipamentos para tirar suas ideias do papel.",
    category: "CRIATIVIDADE",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85",
    color: "from-indigo-600/70",
    products: "Escritório e produtividade",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-slate-900">
      <HeaderMain />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#101126]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&q=90"
            alt="Ambiente tecnológico"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101126] via-[#101126]/90 to-[#101126]/40" />
        </div>

        <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
              <FiStar />
              Explore novas possibilidades
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Descubra um mundo de
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                possibilidades.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Reunimos produtos, tendências e inspirações em coleções
              especiais para você encontrar exatamente o que procura.
            </p>

            <a
              href="#colecoes"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-900/30"
            >
              Explorar coleções
              <FiArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
      </section>

      {/* DESTAQUE */}
      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-12">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Seleção especial
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Coleções em destaque
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Inspirações selecionadas para todos os momentos.
            </p>
          </div>

          <span className="text-sm font-semibold text-slate-400">
            06 coleções disponíveis
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <article
              key={collection.id}
              className="group relative isolate flex min-h-[340px] overflow-hidden rounded-3xl bg-slate-900 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-200/60"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-t ${collection.color} via-slate-950/50 to-slate-950/10`}
              />

              <div className="flex w-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.18em] text-white backdrop-blur-md">
                    {collection.category}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all group-hover:rotate-45 group-hover:bg-white group-hover:text-violet-700">
                    <FiArrowUpRight size={20} />
                  </span>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-white/75">
                    {collection.products}
                  </p>

                  <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                    {collection.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                    {collection.description}
                  </p>

                  <a
                    href="#colecoes"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-all group-hover:gap-4"
                  >
                    Conhecer coleção
                    <FiArrowRight size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BANNER SECUNDÁRIO */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#27205a] via-[#4432a2] to-[#6845d9] px-7 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
          <div className="absolute -bottom-32 right-32 h-64 w-64 rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-violet-200">
                <FiHeart />
                <span>Seu estilo, suas escolhas</span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Sempre existe uma coleção esperando por você.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-violet-100/80 sm:text-base">
                Explore diferentes universos, descubra novidades e encontre
                inspirações para sua próxima compra.
              </p>
            </div>

            <a
              href="#colecoes"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-violet-700 shadow-lg transition-all hover:-translate-y-1 hover:bg-violet-50"
            >
              Ver coleções
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* TODAS AS COLEÇÕES */}
      <section
        id="colecoes"
        className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12"
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Encontre sua inspiração
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Todas as coleções
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Um universo de possibilidades em um só lugar.
            </p>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 sm:flex">
            <FiGrid size={22} />
          </div>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href="#colecoes"
              className="group flex items-center gap-4 py-5 transition-all hover:px-2"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-16 w-20 rounded-xl object-cover sm:h-20 sm:w-28"
              />

              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-extrabold tracking-widest text-violet-600">
                  {collection.category}
                </span>
                <h3 className="mt-1 truncate text-base font-bold text-slate-800 sm:text-lg">
                  {collection.title}
                </h3>
                <p className="mt-1 hidden text-sm text-slate-500 sm:block">
                  {collection.description}
                </p>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:bg-violet-600 group-hover:text-white">
                <FiChevronRight size={20} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
