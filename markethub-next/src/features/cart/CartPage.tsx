
"use client";

import { useState } from "react";
import HeaderMain from "@/components/layout/HeaderMain";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";
import ContinueShoppingButton from "./components/ContinueShoppingButton";

const Carrinho = () => {
  const [total, setTotal] = useState(0);

  return (
    <>
      <HeaderMain />

      <h1 className="font-bold text-[30px] mt-[45px] ml-[95px]">
        Carrinho de Compras
      </h1>

      <div className="flex items-start">
        <div className="flex flex-col w-[60%]">
          <CartList onTotalChange={setTotal} />
        </div>

        <div className="sticky top-10">
          <CartSummary total={total} />
        </div>
      </div>

      <ContinueShoppingButton />
    </>
  );
};

export default Carrinho;
