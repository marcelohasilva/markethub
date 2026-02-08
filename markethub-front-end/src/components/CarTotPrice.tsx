import { useEffect, useState } from "react";

interface CartItem {
  price: string;   // vem como string da API
  quantity: number;
}

const CarTotPrice = () => {
  const id = 1; // ID fixo

  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/cart/${id}`
        );

        const result = await response.json();

        if (result.success) {
          const items: CartItem[] = result.data;

          // 🔥 CÁLCULO CORRETO
          const totalCalculado = items.reduce(
            (acc, item) =>
              acc + Number(item.price) * item.quantity,
            0
          );

          setTotal(totalCalculado);
        }
      } catch (error) {
        console.error("Erro ao calcular total do carrinho", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <p className="ml-[80px] mt-[30px]">Calculando total...</p>;
  }

  return (
    <div className="ml-[80px] mt-[30px]">
      <div className="bg-white w-[400px] ml-[20px] shadow-xl rounded-[1rem] border border-gray-100 p-10">
        <h2 className="font-bold">Resumo</h2>

        <div className="w-full border-t border-gray-200 pt-4 mt-[25px]" />

        <div className="flex">
          <p className="mt-[15px] text-[#6F7482]">Subtotal</p>
          <p className="mt-[15px] ml-auto font-bold">
            R$ {total.toFixed(2)}
          </p>
        </div>

        <div className="flex">
          <p className="mt-[15px] text-[#6F7482]">Entrega</p>
          <p className="mt-[15px] ml-auto font-bold">Grátis</p>
        </div>

        <div className="w-full border-t border-gray-200 pt-4 mt-[25px]" />

        <div className="flex">
          <h2 className="font-bold">Total</h2>
          <p className="ml-auto font-bold">
            R$ {total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarTotPrice;
