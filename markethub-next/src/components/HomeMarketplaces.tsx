const marketplaces = [
  {
    name: "Shopee",
    logo: "/assets/shopee.png",
  },
  {
    name: "Netshoes",
    logo: "/assets/netshoes.png",
  },
  {
    name: "Amazon",
    logo: "/assets/amazon.png",
  },
  {
    name: "AliExpress",
    logo: "/assets/aliexpress.png",
  },
  {
    name: "Mercado Livre",
    logo: "/assets/mercado_livre.png",
  },
  {
    name: "Olympikus",
    logo: "/assets/olympikus.png",
  },
];

const HomeMarketplaces = () => {
  return (
    <section className="mt-10">
      <h2 className="text-[#282729] text-3xl font-bold">Market Places</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {marketplaces.map((item) => (
          <button
            key={item.name}
            type="button"
            aria-label={item.name}
            className="flex cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <img
              src={item.logo}
              alt={item.name}
              className={
                item.name === "Olympikus"
                  ? "h-20 w-auto object-contain"
                  : "h-16 w-auto object-contain"
              }
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HomeMarketplaces;
