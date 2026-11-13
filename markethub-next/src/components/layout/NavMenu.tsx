"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiGrid, FiHome, FiStar, FiTag, FiLayers, FiShoppingCart } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

interface NavMenuProps {
  onNavigate?: () => void;
}

export default function NavMenu({ onNavigate }: NavMenuProps) {
  const pathname = usePathname();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const links = [
    { label: "Início", to: "/", icon: FiHome },
    { label: "Categorias", to: "#", icon: FiGrid },
    { label: "Ofertas do Dia", to: "/ofertas", icon: FiTag },
    { label: "Coleções", to: "/colecoes", icon: FiLayers },
    { label: "Mais vendidos", to: "/maisvendidos", icon: FiStar },
    { label: "Lojas", to: "/lojas", icon: HiOutlineBuildingStorefront },
  ];
  const categories = [

  {
    id: 1,
    title: "Eletrônicos",
    image: "/assets/image.png",
    columns: [
      {
        id: 1,
        title: "Celulares",
        items: ["Android", "iPhone", "Acessórios", "Capas", "Películas"],
      },
      {
        id: 2,
        title: "Computadores",
        items: ["Notebooks", "Desktops", "Monitores", "Teclados", "Mouses"],
      },
      {
        id: 3,
        title: "Áudio",
        items: ["Fones", "Caixas", "Soundbar", "Microfones", "Cabos"],
      },
      {
        id: 4,
        title: "Periféricos",
        items: ["Teclados", "Mouses", "Mousepads", "Webcams", "Controles"],
      },
      {
        id: 5,
        title: "TVs e Vídeo",
        items: ["Smart TVs", "Projetores", "Monitores", "Suportes", "Cabos HDMI"],
      },
      {
        id: 6,
        title: "Câmeras",
        items: ["Câmeras Digitais", "Lentes", "Tripés", "Drones", "Acessórios"],
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
        title: "Roupas",
        items: ["Camisetas", "Calças", "Vestidos", "Jaquetas", "Shorts", "Camisas"],
      },
      {
        id: 2,
        title: "Calçados",
        items: ["Tênis", "Sapatos", "Sandálias", "Botas", "Chinelos", "Sapatilhas"],
      },
      {
        id: 3,
        title: "Bolsas",
        items: ["Mochilas", "Carteiras", "Malas", "Pochetes", "Bolsas", "Necessaires"],
      },
      {
        id: 4,
        title: "Acessórios",
        items: ["Relógios", "Óculos", "Cintos", "Bonés", "Pulseiras", "Colares"],
      },
      {
        id: 5,
        title: "Moda Íntima",
        items: ["Cuecas", "Lingeries", "Pijamas", "Meias", "Sutiãs", "Roupões"],
      },
      {
        id: 6,
        title: "Infantil",
        items: ["Bebês", "Meninos", "Meninas", "Calçados", "Uniformes", "Acessórios"],
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
        title: "Futebol",
        items: ["Bolas", "Chuteiras", "Uniformes", "Luvas", "Caneleiras", "Redes"],
      },
      {
        id: 2,
        title: "Academia",
        items: ["Halteres", "Anilhas", "Barras", "Esteiras", "Bancos", "Elásticos"],
      },
      {
        id: 3,
        title: "Ciclismo",
        items: ["Bicicletas", "Capacetes", "Luvas", "Pedais", "Selins", "Acessórios"],
      },
      {
        id: 4,
        title: "Corrida",
        items: ["Tênis", "Camisetas", "Shorts", "Relógios", "Garrafas", "Mochilas"],
      },
      {
        id: 5,
        title: "Natação",
        items: ["Óculos", "Toucas", "Maiôs", "Sungas", "Nadadeiras", "Pranchas"],
      },
      {
        id: 6,
        title: "Camping",
        items: ["Barracas", "Lanternas", "Mochilas", "Colchões", "Fogareiros", "Sacos de dormir"],
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
        title: "Móveis",
        items: ["Sofás", "Mesas", "Cadeiras", "Camas", "Guarda-roupas", "Estantes"],
      },
      {
        id: 2,
        title: "Cozinha",
        items: ["Panelas", "Pratos", "Talheres", "Copos", "Utensílios", "Potes"],
      },
      {
        id: 3,
        title: "Eletrodomésticos",
        items: ["Geladeiras", "Fogões", "Micro-ondas", "Liquidificadores", "Air Fryers", "Fornos"],
      },
      {
        id: 4,
        title: "Decoração",
        items: ["Quadros", "Espelhos", "Vasos", "Tapetes", "Cortinas", "Almofadas"],
      },
      {
        id: 5,
        title: "Iluminação",
        items: ["Lâmpadas", "Lustres", "Abajures", "Plafons", "Luminárias", "LEDs"],
      },
      {
        id: 6,
        title: "Jardim",
        items: ["Vasos", "Sementes", "Ferramentas", "Mangueiras", "Adubos", "Irrigação"],
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
        title: "Maquiagem",
        items: ["Bases", "Batons", "Rímeis", "Sombras", "Corretivos", "Pincéis"],
      },
      {
        id: 2,
        title: "Skincare",
        items: ["Séruns", "Hidratantes", "Protetores", "Esfoliantes", "Tônicos", "Máscaras"],
      },
      {
        id: 3,
        title: "Perfumes",
        items: ["Masculinos", "Femininos", "Unissex", "Colônias", "Body Splash", "Desodorantes"],
      },
      {
        id: 4,
        title: "Cabelos",
        items: ["Shampoos", "Condicionadores", "Máscaras", "Secadores", "Chapinhas", "Escovas"],
      },
      {
        id: 5,
        title: "Unhas",
        items: ["Esmaltes", "Alongamentos", "Lixas", "Alicates", "Cabines UV", "Adesivos"],
      },
      {
        id: 6,
        title: "Barbearia",
        items: ["Barbeadores", "Máquinas", "Lâminas", "Espumas", "Pós-barba", "Aparadores"],
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
        title: "PlayStation",
        items: ["PS5", "PS4", "Controles", "Jogos", "Headsets", "Acessórios"],
      },
      {
        id: 2,
        title: "Xbox",
        items: ["Series X", "Series S", "Xbox One", "Controles", "Jogos", "Acessórios"],
      },
      {
        id: 3,
        title: "Nintendo",
        items: ["Switch", "Joy-Con", "Jogos", "Dock", "Capas", "Acessórios"],
      },
      {
        id: 4,
        title: "PC Gamer",
        items: ["Gabinetes", "Teclados", "Mouses", "Headsets", "Mousepads", "Controles"],
      },
      {
        id: 5,
        title: "Consoles",
        items: ["Portáteis", "Retro", "Clássicos", "Novos", "Usados", "Bundles"],
      },
      {
        id: 6,
        title: "Acessórios",
        items: ["Controles", "Volantes", "Headsets", "Cadeiras", "Suportes", "Carregadores"],
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
        items: ["Acessórios", "Tapetes", "Capas", "Volantes", "Bancos", "Organizadores"],
      },
      {
        id: 2,
        title: "Motos",
        items: ["Capacetes", "Luvas", "Jaquetas", "Botas", "Baús", "Protetores"],
      },
      {
        id: 3,
        title: "Peças",
        items: ["Motores", "Freios", "Filtros", "Suspensão", "Baterias", "Embreagens"],
      },
      {
        id: 4,
        title: "Pneus",
        items: ["Aro 13", "Aro 14", "Aro 15", "Aro 16", "Moto", "Caminhonete"],
      },
      {
        id: 5,
        title: "Som Automotivo",
        items: ["Alto-falantes", "Subwoofers", "Módulos", "Rádios", "Multimídia", "Tweeters"],
      },
      {
        id: 6,
        title: "Ferramentas",
        items: ["Macacos", "Chaves", "Compressores", "Parafusadeiras", "Alicates", "Maletas"],
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
        title: "Romance",
        items: ["Contemporâneo", "Clássicos", "Históricos", "Eróticos", "Jovem Adulto", "Drama"],
      },
      {
        id: 2,
        title: "Fantasia",
        items: ["Épica", "Urbana", "Medieval", "Mitologia", "Magia", "Distopia"],
      },
      {
        id: 3,
        title: "Suspense",
        items: ["Policial", "Mistério", "Investigação", "Psicológico", "Criminal", "Thriller"],
      },
      {
        id: 4,
        title: "Terror",
        items: ["Sobrenatural", "Horror", "Psicológico", "Gótico", "Zumbis", "Suspense"],
      },
      {
        id: 5,
        title: "Didáticos",
        items: ["Matemática", "Português", "História", "Geografia", "Ciências", "Idiomas"],
      },
      {
        id: 6,
        title: "HQs e Mangás",
        items: ["Mangás", "Marvel", "DC Comics", "Graphic Novels", "Infantis", "Independentes"],
      },
    ],
  },
  {
    id: 9,
    title: "Saúde",
    image: "/assets/image.png",
    columns: [
      {
        id: 1,
        title: "Suplementos",
        items: ["Whey Protein", "Creatina", "Barras", "Pré-treino", "Bebidas", "Aminoácidos"],
      },
      {
        id: 2,
        title: "Vitaminas",
        items: ["Vitamina C", "Vitamina D", "Complexo B", "Multivitamínicos", "Minerais", "Ômega 3"],
      },
      {
        id: 3,
        title: "Ortopedia",
        items: ["Joelheiras", "Tornozeleiras", "Cintas", "Palmilhas", "Muletas", "Imobilizadores"],
      },
      {
        id: 4,
        title: "Higiene",
        items: ["Sabonetes", "Escovas", "Fio Dental", "Antissépticos", "Lenços", "Absorventes"],
      },
      {
        id: 5,
        title: "Equipamentos",
        items: ["Termômetros", "Oxímetros", "Medidores", "Balanças", "Nebulizadores", "Estetoscópios"],
      },
      {
        id: 6,
        title: "Bem-estar",
        items: ["Massageadores", "Almofadas", "Aromaterapia", "Relaxamento", "Sono", "Postura"],
      },
    ],
  },
]
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? 1);
  const activeCategory = categories.find((category) => category.id === activeCategoryId) ?? categories[0];
  return (
    <nav className="relative w-full bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white">
      <ul className="flex items-center justify-between gap-0 overflow-x-auto py-3 px-4 md:px-6 lg:px-[97px]">
        {links.map((link) => {
          const isActive = pathname === link.to && link.to !== "#";
          const isCategorias = link.label === "Categorias";
          const Icon = link.icon;

          return (
            <li key={link.label}className={ `px-20 ${link.label !== links[links.length - 1].label ? "border-r border-white/30" : ""}`} >
              {isCategorias ? (
                <button
                  type="button"
                  onClick={() => setIsCategoriesOpen((open) => !open)}
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                  aria-expanded={isCategoriesOpen}
                  aria-controls="categories-menu"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.to}
                  onClick={onNavigate}
                  className={`flex items-center gap-2 cursor-pointer hover:opacity-80 ${
                    isActive ? "font-semibold underline underline-offset-4" : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
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
                      <div className="flex items-start gap-20 overflow-x-auto pb-4">
                        {categories.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveCategoryId(item.id)}
                            className="flex cursor-pointer flex-col items-center gap-2"
                          >
                            <div
                              className={`h-28 w-28 overflow-hidden rounded-full border-2 bg-white shadow-sm  ${
                                item.id === activeCategoryId
                                  ? "border-[#8F5CFF]"
                                  : "border-transparent"
                              }`}
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover "
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
