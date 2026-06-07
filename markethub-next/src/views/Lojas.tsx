"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchAllStores } from "@/lib/stores";
import LojasFilters from "@/components/lojas/LojasFilters";
import LojasGrid from "@/components/lojas/LojasGrid";
import LojasHeader from "@/components/lojas/LojasHeader";
import LojasPagination from "@/components/lojas/LojasPagination";
import LojasTabs from "@/components/lojas/LojasTabs";
import type { StoreDisplay } from "@/components/lojas/types";

export default function Lojas() {
  const router = useRouter();
  const [stores, setStores] = useState<StoreDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Todas as lojas");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todas");
  const [location, setLocation] = useState("Todas");
  const [sortBy, setSortBy] = useState("Mais relevantes");
  const [officialOnly, setOfficialOnly] = useState(false);

  const coverImages = [
    "/assets/baixados.webp",
    "/assets/amazon.png",
    "/assets/netshoes.png",
    "/assets/mercado_livre.png",
  ];
  const defaultTags = [
    ["Esportes", "Tenis", "Roupas"],
    ["Eletronicos", "Acessorios"],
    ["Beleza", "Skincare", "Maquiagem"],
    ["Casa", "Decoracao"],
  ];
  const defaultLocations = [
    { location: "Sao Paulo", state: "SP" },
    { location: "Curitiba", state: "PR" },
    { location: "Rio de Janeiro", state: "RJ" },
    { location: "Belo Horizonte", state: "MG" },
  ];
  const badges: Array<StoreDisplay["badge"]> = [
    "MAIS VENDIDA",
    "MELHOR AVALIADA",
    "EM DESTAQUE",
    "NOVA LOJA",
  ];

  useEffect(() => {
    async function loadStores() {
      try {
        const token = localStorage.getItem("api_token") ?? undefined;
        const data = await fetchAllStores(token);
        setStores(data.map((store, index) => ({
          ...store,
          logo: store.name?.slice(0, 1)?.toUpperCase() || "M",
          rating: 4.9,
          reviews: 1256,
          category: store.description || "Categoria",
          tags: defaultTags[index % defaultTags.length] ?? [],
          products: store.products?.length ?? 0,
          sales: 250,
          location: defaultLocations[index % defaultLocations.length].location,
          state: defaultLocations[index % defaultLocations.length].state,
          coverImage: coverImages[index % coverImages.length],
          verified: true,
          badge: badges[index % badges.length],
        })));
      } catch {
        setError("Erro ao carregar lojas");
        setStores([]);
      } finally {
        setLoading(false);
      }
    }
    loadStores();
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfcff]">
      <div className="mx-auto max-w-[1690px] px-4 pb-24 pt-7 md:px-7 md:pb-10 md:pt-11 lg:px-[60px]">
        <div className="space-y-5 md:space-y-8 lg:space-y-9">
          <LojasHeader
            title="Todas as Lojas"
            subtitle="Encontre as melhores lojas da plataforma e descubra produtos incríveis."
          />

          <LojasTabs activeTab={activeTab} onChange={setActiveTab} />

          <LojasFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            category={category}
            onCategoryChange={setCategory}
            location={location}
            onLocationChange={setLocation}
            officialOnly={officialOnly}
            onToggleOfficial={setOfficialOnly}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <LojasGrid
          loading={loading}
          error={error}
          stores={stores}
          onViewStore={(id) => router.push(`/loja?id=${id}`)}
        />

        <div className="mt-10 hidden md:block">
          <LojasPagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>

        <p className="mt-6 hidden text-sm text-[#667085] md:block">
          Mostrando 1 a 6 de 120 lojas
        </p>
      </div>
    </div>
  );
}
