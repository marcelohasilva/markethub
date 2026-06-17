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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
 
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

const configTabs: SidebarTab[] = [
  { label: "Todos os Produtos", to: "/produtos" },
  { label: "Cadastrar Produto", to: "/cadastrarproduto" },
  { label: "Importados", to: "/produtos/importados" },
  { label: "Coleções", to: "/produtos/colecoes" },
  { label: "Configurações da Loja", to: "/configuracoes" },
];

export default function ProdutoForm() {
  const router = useRouter();
  const pathname = usePathname();

  const [image, setImage] = useState<File | null>(null);

  // layout state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(true);

  // form state
  const [productUrl, setProductUrl] = useState(
    "https://shopee.com.br/Fone-de-Ouvido-Bluetooth-SoundMax-H30-i.123456789.987654321",
  );
  const [name, setName] = useState("Fone de Ouvido Bluetooth SoundMax H30");
  const [price, setPrice] = useState<number | "">(199.9);
  const [stock, setStock] = useState<number | "">(10);
  const [description, setDescription] = useState(
    "Desfrute de um som potente e envolvente com o SoundMax H30.\nConforto, bateria de longa duração e conectividade bluetooth para o seu dia a dia.\nCompatível com smartphones, tablets e notebooks.",
  );
  const [categoryId, setCategoryId] = useState("");
  const [featured, setFeatured] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!productUrl || !name || price === "" || stock === "" || !description) {
      alert("Preencha todos os campos");
      return;
    }

    if (Number(price) <= 0 || Number(stock) <= 0) {
      alert("O preço e o estoque devem ser maiores que 0");
      return;
    }

    const token = localStorage.getItem("api_token");
    if (!token) {
      alert("Você precisa estar logado para cadastrar produtos!");
      return;
    }

    try {
      const payload = {
      productUrl: productUrl.trim(),
      name: name.trim(),
      price: Number(price),
      stock: Number(stock),
      description: description.trim(),
      categoryId: "bdd068d5-72fe-4c32-9134-8bf1cea463e4",
    };

      const resposta = await fetch(`${API_BASE_URL}/v1/products`, {
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
      setStock("");
      setDescription("");
      setProductUrl("");
      setCategoryId("");
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
          tabs={configTabs}
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
              price={price}
              stock={stock}
              description={description}
              categoryId={categoryId}
              featured={featured}
              image={image}
              onImageChange={setImage}
              onNameChange={setName}
              onPriceChange={setPrice}
              onStockChange={setStock}
              onDescriptionChange={setDescription}
              onCategoryIdChange={setCategoryId}
              onToggleFeatured={() => setFeatured((value) => !value)}
              descriptionLength={description.length}
            />
            </form>

            <aside className="space-y-5">
              <ProdutoPreview
              name={name}
              price={price}
              compactDescription={compactDescription}
              image={image}
              />
              <ProdutoFooterInfo />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
