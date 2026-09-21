export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center text-center mt-10">
      <img
        className="h-44 w-auto"
        src="/assets/caixa_favoritos.png"
        alt="Caixa de Favoritos"
      />
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mt-6 text-[#1A1C27]">
        Sua lista de favoritos esta vazia
      </h2>
      <p className="text-md sm:text-lg lg:text-xl mt-4 text-[#767A87]">
        Adicione itens aos seus favoritos para ve-los aqui!
      </p>
    </div>
  );
}   
