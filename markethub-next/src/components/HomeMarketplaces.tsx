const marketplaces = [
  { name: "Shopee" },
  { name: "netshoes" },
  { name: "amazon" },
  { name: "AliExpress" },
  { name: "mercado livre" },
  { name: "olympikus" },
];

const HomeMarketplaces = () => {
  return (
    <section className="mt-10">
      <h2 className="text-[#282729] text-3xl font-bold">Market Places</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {marketplaces.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#282729] shadow-sm"
          >
            <span className="text-sm font-semibold tracking-wide">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeMarketplaces;
