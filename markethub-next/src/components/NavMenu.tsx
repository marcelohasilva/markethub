"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavMenu() {
  const pathname = usePathname();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const links = [
    { label: "Home", to: "/" },
    { label: "Categorias", to: "#" },
    { label: "Novidades", to: "#" },
    { label: "Ofertas do Dia", to: "#" },
    { label: "Colecoes", to: "#" },
    { label: "Minha Loja", to: "/cadastrarloja" },
  ];
  const categories = [
    {
      id: 1,
      title: "Eletronicos",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Celulares",
          items: ["Android", "iPhone", "Acessorios", "Capas", "Peliculas"],
        },
        {
          id: 2,
          title: "Computadores",
          items: ["Notebooks", "Desktops", "Monitores", "Teclados", "Mouses"],
        },
        {
          id: 3,
          title: "Audio",
          items: ["Fones", "Caixas", "Soundbar", "Microfones", "Cabos"],
        },
      ],
    },
    {
      id: 2,
      title: "Moda",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Feminino",
          items: ["Vestidos", "Blusas", "Calcas", "Saias", "Acessorios"],
        },
        {
          id: 2,
          title: "Masculino",
          items: ["Camisetas", "Calcas", "Bermudas", "Jaquetas", "Tenis"],
        },
        {
          id: 3,
          title: "Infantil",
          items: ["Conjuntos", "Bodys", "Calcados", "Pijamas", "Acessorios"],
        },
      ],
    },
    {
      id: 3,
      title: "Esportes",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Treino",
          items: ["Halteres", "Tapetes", "Elastico", "Roupas", "Squeezes"],
        },
        {
          id: 2,
          title: "Outdoor",
          items: ["Camping", "Trilhas", "Mochilas", "Lanternas", "Garrafas"],
        },
        {
          id: 3,
          title: "Bolas",
          items: ["Futebol", "Basquete", "Volei", "Tenis", "Handebol"],
        },
      ],
    },
    {
      id: 4,
      title: "Casa",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Cozinha",
          items: ["Panelas", "Pratos", "Copos", "Talheres", "Organizacao"],
        },
        {
          id: 2,
          title: "Decoracao",
          items: ["Quadros", "Almofadas", "Tapetes", "Cortinas", "Luminarias"],
        },
        {
          id: 3,
          title: "Banheiro",
          items: ["Toalhas", "Aromas", "Porta-sabonete", "Tapetes", "Cestos"],
        },
      ],
    },
    {
      id: 5,
      title: "Beleza",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Cabelos",
          items: ["Shampoo", "Condicionador", "Mascara", "Finalizadores", "Tinturas"],
        },
        {
          id: 2,
          title: "Pele",
          items: ["Hidratantes", "Limpeza", "Protetor", "Seruns", "Sabonetes"],
        },
        {
          id: 3,
          title: "Maquiagem",
          items: ["Bases", "Batom", "Mascara", "Paletas", "Pinceis"],
        },
      ],
    },
    {
      id: 6,
      title: "Games",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Consoles",
          items: ["PlayStation", "Xbox", "Nintendo", "Portateis", "Acessorios"],
        },
        {
          id: 2,
          title: "Jogos",
          items: ["Aventura", "Esportes", "RPG", "FPS", "Corrida"],
        },
        {
          id: 3,
          title: "PC Gamer",
          items: ["Placas", "Perifericos", "Cadeiras", "Monitores", "Headsets"],
        },
      ],
    },
    {
      id: 7,
      title: "Automotivo",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Carros",
          items: ["Som", "Acessorios", "Pneus", "Limpadores", "GPS"],
        },
        {
          id: 2,
          title: "Motos",
          items: ["Capacetes", "Luvas", "Jaquetas", "Pecas", "Acessorios"],
        },
        {
          id: 3,
          title: "Cuidados",
          items: ["Lavagem", "Cera", "Aromatizantes", "Paninhos", "Protecao"],
        },
      ],
    },
    {
      id: 8,
      title: "Livros",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Ficcao",
          items: ["Romance", "Fantasia", "Suspense", "Sci-Fi", "Contos"],
        },
        {
          id: 2,
          title: "Nao Ficcao",
          items: ["Negocios", "Autoajuda", "Biografias", "Historia", "Ciencia"],
        },
        {
          id: 3,
          title: "Infantil",
          items: ["Ilustrados", "Educativos", "Historias", "Colorir", "Aprender"],
        },
      ],
    },
    {
      id: 9,
      title: "Saude",
      image: "/assets/image.png",
      columns: [
        {
          id: 1,
          title: "Bem-estar",
          items: ["Vitaminas", "Suplementos", "Chas", "Aparelhos", "Mediacao"],
        },
        {
          id: 2,
          title: "Fitness",
          items: ["Proteinas", "Pre-treino", "Creatina", "Barras", "Acessorios"],
        },
        {
          id: 3,
          title: "Cuidados",
          items: ["Higiene", "Curativos", "Termometros", "Mascaras", "Gel"],
        },
      ],
    },
  ];
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? 1);
  const activeCategory = categories.find((category) => category.id === activeCategoryId) ?? categories[0];
  return (
    <nav className="relative w-full bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white">
      <ul className="flex gap-14 py-3 px-[97px]">
        {links.map((link) => {
          const isActive = pathname === link.to && link.to !== "#";
          const isCategorias = link.label === "Categorias";

          return (
            <li key={link.label}>
              {isCategorias ? (
                <button
                  type="button"
                  onClick={() => setIsCategoriesOpen((open) => !open)}
                  className="cursor-pointer hover:opacity-80"
                  aria-expanded={isCategoriesOpen}
                  aria-controls="categories-menu"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.to}
                  className={[
                    "cursor-pointer hover:opacity-80",
                    isActive ? "font-semibold underline underline-offset-4" : "",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              )}

              {isCategorias && isCategoriesOpen ? (
                <>
                  <button
                    type="button"
                    aria-label="Fechar categorias"
                    onClick={() => setIsCategoriesOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40"
                  />
                  <div
                    id="categories-menu"
                    className="absolute left-0 right-0 top-full z-40 pt-3"
                  >
                    <div className="mx-[97px] rounded-2xl bg-white p-6 text-[#1A1C27] shadow-xl">
                      <div className="flex items-start gap-10 overflow-x-auto pb-4">
                        {categories.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveCategoryId(item.id)}
                            className="flex cursor-pointer flex-col items-center gap-2"
                          >
                            <div
                              className={`h-28 w-28 overflow-hidden rounded-full border-2 bg-white shadow-sm ${
                                item.id === activeCategoryId
                                  ? "border-[#8F5CFF]"
                                  : "border-transparent"
                              }`}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="text-xs text-[#1A1C27]">{item.title}</span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-2 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                        {activeCategory?.columns.map((column) => (
                          <div key={column.id} className="text-sm text-[#1A1C27]">
                            <p className="mb-2 font-semibold">{column.title}</p>
                            <ul className="space-y-1 text-xs text-[#6B7280]">
                              {column.items.map((item) => (
                                <li key={item}>
                                  <button
                                    type="button"
                                    className="cursor-pointer text-left hover:text-[#1A1C27]"
                                  >
                                    {item}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
