"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import HeaderMain from "@/components/layout/HeaderMain";
import HomeFooter from "@/features/home/components/HomeFooter";
import ProductCard, { type Product } from "@/components/shared/ProductCard";
import { API_BASE_URL } from "@/lib/stores";

const collections = [
  {
    id: "tecnologia",
    title: "Tecnologia que facilita",
    category: "Tecnologia",
    description: "Eletrônicos e acessórios para deixar sua rotina mais prática.",
    image: "/assets/celular.webp",
    imageClass: "object-contain p-8",
    color: "from-[#172554] via-[#1D4ED8] to-[#7C3AED]",
    keywords: ["celular", "smartphone", "fone", "notebook", "tablet", "eletrônico", "eletronico", "cabo", "carregador"],
    countLabel: "Conecte-se ao que importa",
  },
  {
    id: "movimento",
    title: "Movimento e bem-estar",
    category: "Esportes",
    description: "Achados para acompanhar seu ritmo, do treino à vida ao ar livre.",
    image: "/assets/treino.png",
    imageClass: "object-cover object-[center_35%]",
    color: "from-[#064E3B] via-[#0F766E] to-[#2563EB]",
    keywords: ["treino", "corrida", "esporte", "fitness", "academia", "tênis", "tenis", "bola", "bike"],
    countLabel: "Seu próximo passo começa aqui",
  },
  {
    id: "futebol",
    title: "Paixão pelo futebol",
    category: "Esportes",
    description: "Itens para jogar, torcer e viver o esporte dentro e fora de campo.",
    image: "/assets/futebol.png",
    imageClass: "object-cover object-[center_30%]",
    color: "from-[#14532D] via-[#15803D] to-[#0E7490]",
    keywords: ["futebol", "chuteira", "camisa", "bola", "esporte"],
    countLabel: "Vista a sua torcida",
  },
  {
    id: "pets",
    title: "Um mundo melhor para pets",
    category: "Pets",
    description: "Cuidados, brincadeiras e conforto para quem faz parte da família.",
    image: "/assets/pets.png",
    imageClass: "object-cover object-[center_35%]",
    color: "from-[#7C2D12] via-[#C2410C] to-[#DB2777]",
    keywords: ["pet", "cachorro", "gato", "ração", "racao", "coleira", "brinquedo"],
    countLabel: "Carinho em cada detalhe",
  },
  {
    id: "corrida",
    title: "Para ir mais longe",
    category: "Esportes",
    description: "Uma seleção para quem gosta de superar a própria distância.",
    image: "/assets/corrida.png",
    imageClass: "object-cover object-[center_30%]",
    color: "from-[#312E81] via-[#6D28D9] to-[#DB2777]",
    keywords: ["corrida", "running", "tênis", "tenis", "esporte", "fitness"],
    countLabel: "Encontre seu próximo ritmo",
  },
  {
    id: "achadinhos",
    title: "Pequenos achados, grandes ideias",
    category: "Achadinhos",
    description: "Produtos que chamam atenção pela praticidade e pelo bom preço.",
    image: "/assets/image.png",
    imageClass: "object-contain p-8",
    color: "from-[#7C2D12] via-[#C2410C] to-[#F59E0B]",
    keywords: [],
    countLabel: "Vale a pena descobrir",
  },
];

const categories = ["Todas", "Tecnologia", "Esportes", "Pets", "Achadinhos"];

export default function CollectionsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const token = localStorage.getItem("api_token");
        const response = await fetch(`${API_BASE_URL}/v1/products`, {
          cache: "no-store",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const list: Product[] = Array.isArray(data) ? data : data?.data ?? [];
        setProducts(list.filter((product) => product?.name && !product.name.toLowerCase().includes("adicionar produto")));
      } catch {
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const visibleCollections = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("pt-BR");
    return collections.filter((collection) => {
      const matchesCategory = activeCategory === "Todas" || collection.category === activeCategory;
      const matchesSearch = !normalizedSearch || `${collection.title} ${collection.description} ${collection.category}`
        .toLocaleLowerCase("pt-BR").includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const selectedCollection = collections.find((collection) => collection.id === selectedCollectionId);
  const selectedProducts = useMemo(() => {
    if (!selectedCollection) return products.slice(0, 10);
    if (selectedCollection.keywords.length === 0) return products.slice(0, 10);
    return products.filter((product) => {
      const searchableText = `${product.name} ${product.description ?? ""}`.toLocaleLowerCase("pt-BR");
      return selectedCollection.keywords.some((keyword) => searchableText.includes(keyword));
    }).slice(0, 10);
  }, [products, selectedCollection]);

  function showCollectionProducts(collectionId: string) {
    setSelectedCollectionId(collectionId);
    window.setTimeout(() => document.getElementById("produtos-da-colecao")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  return (
    <>
      <HeaderMain />
      <main className="collections-page min-h-screen bg-[#F7F8FC] text-[#121A33]">
        <div className="mx-auto max-w-[1440px] px-4 pb-16 pt-6 md:px-8 md:pt-10 lg:px-[97px]">
          <section className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-[#24115E] via-[#5531B8] to-[#1676D2] px-6 py-9 text-white shadow-xl md:px-12 md:py-12 lg:min-h-[300px] lg:px-16">
            <div className="pointer-events-none absolute -right-8 -top-24 -z-10 h-72 w-72 rounded-full border-[38px] border-white/10 md:right-16 md:top-[-150px] md:h-[420px] md:w-[420px]" />
            <div className="pointer-events-none absolute bottom-[-120px] right-[27%] -z-10 h-64 w-64 rounded-full bg-[#A78BFA]/20 blur-3xl" />
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/90">
                <Sparkles className="h-4 w-4" /> DESCOBERTAS MARKETPLACE
              </span>
              <h1 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Ideias para encontrar o que combina com você.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 md:text-base">
                Explore seleções feitas por tema e descubra novos favoritos em diferentes lojas.
              </p>
              <a href="#colecoes-disponiveis" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#392078] transition hover:-translate-y-0.5 hover:shadow-lg">
                Explorar coleções <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          <section id="colecoes-disponiveis" className="scroll-mt-8 pt-10 md:pt-14">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B3DF2]">Curadoria MarketHub</p>
                <h2 className="mt-2 text-2xl font-bold text-[#1A1C27] md:text-3xl">Coleções para descobrir</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">Encontre produtos por assunto, momento ou paixão.</p>
              </div>
              <label className="flex h-11 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 shadow-sm md:max-w-[320px]">
                <Search className="h-4 w-4 shrink-0 text-gray-500" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar uma coleção"
                  className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
              </label>
            </div>

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar coleções por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category
                    ? "border-[#6B3DF2] bg-[#6B3DF2] text-white shadow-md shadow-violet-500/20"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#6B3DF2] hover:text-[#6B3DF2]"}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {visibleCollections.length ? (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleCollections.map((collection, index) => (
                  <article key={collection.id} className={`group relative isolate flex min-h-[350px] overflow-hidden rounded-[24px] bg-gradient-to-br ${collection.color} shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "xl:col-span-2" : ""}`}>
                    <img
                      src={collection.image}
                      alt=""
                      className={`absolute inset-0 z-0 h-full w-full opacity-55 transition duration-500 group-hover:scale-105 ${collection.imageClass}`}
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                    <div className="relative z-20 mt-auto w-full p-6 text-white md:p-7">
                      <span className="inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                        {collection.category}
                      </span>
                      <h3 className="mt-3 max-w-lg text-2xl font-bold leading-tight text-white md:text-[27px]">{collection.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-white/80">{collection.description}</p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-medium text-white/75">{collection.countLabel}</span>
                        <button
                          type="button"
                          onClick={() => showCollectionProducts(collection.id)}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#25164C] transition hover:bg-violet-100"
                        >
                          Ver seleção <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
                <p className="font-semibold text-gray-800">Nenhuma coleção encontrada</p>
                <p className="mt-1 text-sm text-gray-500">Tente outro termo ou escolha uma categoria diferente.</p>
              </div>
            )}
          </section>

          <section id="produtos-da-colecao" className="scroll-mt-8 pt-12 md:pt-16">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B3DF2]">{selectedCollection ? selectedCollection.category : "Seleção MarketHub"}</p>
                <h2 className="mt-2 text-2xl font-bold text-[#1A1C27] md:text-3xl">
                  {selectedCollection ? selectedCollection.title : "Produtos para descobrir"}
                </h2>
              </div>
              {selectedCollection ? (
                <button type="button" onClick={() => setSelectedCollectionId(null)} className="text-sm font-semibold text-[#6B3DF2] hover:underline">
                  Ver todos os produtos
                </button>
              ) : null}
            </div>

            {isLoading ? (
              <p className="py-12 text-center text-sm text-gray-500">Carregando produtos...</p>
            ) : selectedProducts.length ? (
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {selectedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center">
                <p className="font-semibold text-gray-800">Ainda não encontramos produtos nessa seleção.</p>
                <p className="mt-1 text-sm text-gray-500">Explore outra coleção enquanto novas opções chegam ao MarketHub.</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <HomeFooter />
    </>
  );
}
