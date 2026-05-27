"use client";
import ButoonCar from "../components/carrinho/butoonCAr";
import CardCarrinho from "../components/carrinho/CardCarrinho";
import CarTotPrice from "../components/carrinho/CarTotPrice";
import HeaderMain from "../components/shared/HeaderMain";

const Carrinho = () => {
  // ✅ ID fixo
  const id = 1;

  return (
    <>
      <HeaderMain />

      <h1 className="font-bold text-[30px] mt-[45px] ml-[95px]">
        Carrinho de Compras
      </h1>

      <div className="flex items-start">
        <div className="flex flex-col w-[60%]">
          <CardCarrinho userId={id} />
        </div>

        <div className="sticky top-10">
          <CarTotPrice/>
        </div>
      </div>

      <ButoonCar />
    </>
  );
};

export default Carrinho;
