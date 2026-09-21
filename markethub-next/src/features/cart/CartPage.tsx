"use client";
import HeaderMain from "@/components/layout/HeaderMain";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";
import ContinueShoppingButton from "./components/ContinueShoppingButton";

const Carrinho = () => {
  const id = 1;

  return (
    <>
      <HeaderMain />

      <h1 className="font-bold text-[30px] mt-[45px] ml-[95px]">
        Carrinho de Compras
      </h1>

      <div className="flex items-start">
        <div className="flex flex-col w-[60%]">
          <CartList userId={id} />
        </div>

        <div className="sticky top-10">
          <CartSummary />
        </div>
      </div>

      <ContinueShoppingButton />
    </>
  );
};

export default Carrinho;
