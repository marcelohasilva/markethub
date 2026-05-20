"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FiBarChart2, FiBriefcase, FiGrid, FiSend, FiSettings, FiShoppingBag, FiTag, FiUsers } from "react-icons/fi";
import ProdutoFooterInfo from "./ProdutoFooterInfo";
import ProdutoFormInfo from "./ProdutoFormInfo";
import ProdutoFormLink from "./ProdutoFormLink";
import ProdutoHeader from "./ProdutoHeader";
import ProdutoHero from "./ProdutoHero";
import ProdutoPreview from "./ProdutoPreview";
import ProdutoSidebar, { type SidebarItem, type SidebarTab } from "./ProdutoSidebar";

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", Icon: FiGrid, to: "/dashboard" },
  { label: "Produtos", Icon: FiTag, to: "/produtos" },
  { label: "Pedidos", Icon: FiShoppingBag, to: "/pedidos" },
  { label: "Clientes", Icon: FiUsers, to: "/clientes" },
  { label: "Financeiro", Icon: FiBriefcase, to: "/financeiro" },
  { label: "Marketing", Icon: FiSend, to: "/marketing" },
  { label: "Relatórios", Icon: FiBarChart2, to: "/relatorios" },
  { label: "Configurações", Icon: FiSettings, to: "/configuracoes" },
];

const productTabs: SidebarTab[] = [
  { label: "Todos os Produtos", to: "/produtos" },
  { label: "Cadastrar Produto", to: "/cadastrarproduto" },
  { label: "Importados", to: "/produtos/importados" },
  { label: "Coleções", to: "/produtos/colecoes" },
];

export default function ProdutoForm() {
  const router = useRouter();
  const pathname = usePathname();

  // layout state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(true);

  // form state
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
    } catch (error) {
      const message = error instanceof Error ? error.message : undefined;
      alert(message || "Erro ao conectar ao servidor");
    }
  }

  const compactDescription = useMemo(
    () => description.split("\n").filter(Boolean).slice(0, 2).join(" "),
    [description],
  );

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#121A33]">
      <ProdutoHeader
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onNavigateHome={() => router.push("/")}
        onNavigateFavoritos={() => router.push("/favoritos")}
        onNavigateCarrinho={() => router.push("/carrinho")}
      />

      <div className="flex">
        <ProdutoSidebar
          items={sidebarItems}
          tabs={productTabs}
          pathname={pathname}
          isMenuOpen={isMenuOpen}
          isConfigOpen={isConfigOpen}
          onToggleConfig={() => setIsConfigOpen((open) => !open)}
          onCloseMenu={() => setIsMenuOpen(false)}
          onNavigate={(to) => router.push(to)}
        />

        {isMenuOpen ? (
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 cursor-pointer bg-[#121A33]/30 lg:hidden"
          />
        ) : null}

        <main className="min-w-0 flex-1">
          <ProdutoHero />

          <div className="grid gap-6 p-5 lg:gap-5 lg:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-xl border border-[#E3E7F1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
            >
              <ProdutoFormLink
                productUrl={productUrl}
                onChange={setProductUrl}
                onClear={() => setProductUrl("")}
                onImport={() => undefined}
              />

              <ProdutoFormInfo
                name={name}
                description={description}
                category={category}
                featured={featured}
                onNameChange={setName}
                onDescriptionChange={setDescription}
                onCategoryChange={setCategory}
                onToggleFeatured={() => setFeatured((value) => !value)}
                descriptionLength={description.length}
              />
            </form>

            <aside className="space-y-5">
              <ProdutoPreview
                name={name}
                price={price}
                compactDescription={compactDescription}
              />
              <ProdutoFooterInfo />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

