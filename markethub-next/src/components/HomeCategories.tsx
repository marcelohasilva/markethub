const categories = [
  {
    id: 1,
    title: "CORRIDA",
    gradient: "linear-gradient(135deg, #8F5CFF, #1A7FF0)",
  },
  {
    id: 2,
    title: "FUTEBOL",
    gradient: "linear-gradient(135deg, #8F5CFF, #1A7FF0)",
  },
  {
    id: 3,
    title: "TREINO",
    gradient: "linear-gradient(135deg, #8F5CFF, #1A7FF0)",
  },
  {
    id: 4,
    title: "PETS",
    gradient: "linear-gradient(135deg, #8F5CFF, #1A7FF0)",
  },
];

const HomeCategories = () => {
  return (
    <section className="mt-10 pb-12">
      <h2 className="text-[#282729] text-3xl font-bold">Categorias</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative flex h-64 flex-col items-center justify-between overflow-hidden rounded-2xl p-6 text-white shadow-lg"
            style={{ backgroundImage: category.gradient }}
          >
            <span className="text-lg font-semibold tracking-widest">
              {category.title}
            </span>
            <button
              type="button"
              className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase text-[#6F5AF5] shadow-sm"
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
