const categories = [
  {
    id: 1,
    title: "CORRIDA",
    image: "/assets/corrida.png",
    gradient: "linear-gradient(135deg, rgba(143, 92, 255, 0.35), rgba(26, 127, 240, 0.35))",
  },
  {
    id: 2,
    title: "FUTEBOL",
    image: "/assets/futebol.png",
    gradient: "linear-gradient(135deg, rgba(143, 92, 255, 0.35), rgba(26, 127, 240, 0.35))",
  },
  {
    id: 3,
    title: "TREINO",
    image: "/assets/treino.png",
    gradient: "linear-gradient(135deg, rgba(143, 92, 255, 0.35), rgba(26, 127, 240, 0.35))",
  },
  {
    id: 4,
    title: "PETS",
    image: "/assets/pets.png",
    gradient: "linear-gradient(135deg, rgba(143, 92, 255, 0.35), rgba(26, 127, 240, 0.35))",
  },
];

const HomeCategories = () => {
  return (
    <section className="mt-10 pb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[#282729] text-xl md:text-3xl font-bold">Categorias</h2>
        <button
          type="button"
          className="text-sm font-semibold text-[#6B3DF2] hover:opacity-80"
        >
          Ver todas
        </button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative flex h-56 flex-col items-center justify-between overflow-hidden rounded-2xl p-5 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl md:h-64 md:p-6"
            style={{
              backgroundImage: `${category.gradient}, url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-base font-semibold tracking-widest md:text-lg">
              {category.title}
            </span>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-white px-5 py-2 text-[10px] font-semibold uppercase text-[#6F5AF5] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-6 md:text-xs"
            >
              Ver Produtos
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
