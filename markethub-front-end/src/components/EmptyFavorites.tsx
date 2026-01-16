import CaixaFavoritos from "../assets/caixa_favoritos.png"

export default function EmptyFavorites() {
  return (
    <div>
          <img className="h-55 mt-[42px] ml-[644px]" src={CaixaFavoritos} alt="Caixa de Favoritos" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-center mt-6 text-[#1A1C27]">Sua lista de favoritos está vazia</h2>
          <h2 className="text-md sm:text-lg lg:text-xl text-center mt-4 text-gray-600 text-[#767A87]">Adicione itens aos seus favoritos para vê-los aqui!</h2>
        </div>
  );
}