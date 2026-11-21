
"use client";

import { useEffect, useState } from "react";
import CartRemoveButton from "./CartRemoveButton";

const API_URL = "http://localhost:3000/v1";

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number | string;
    stock: number;
    images: {
      id: string;
      imageUrl: string;
    }[];
  };
}

interface CartListProps {
  onTotalChange: (total: number) => void;
}

const CartList = ({ onTotalChange }: CartListProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    try {
      setError(null);

      const token = localStorage.getItem("api_token");

      if (!token) {
        setCartItems([]);
        onTotalChange(0);
        setError("Faça login para visualizar seu carrinho.");
        return;
      }

      const response = await fetch(`${API_URL}/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseText = await response.text();

      console.log("Status HTTP:", response.status);
      console.log("Resposta da API:", responseText);

      if (!response.ok) {
        throw new Error(
          `Erro ${response.status}: ${responseText}`
        );
      }

      const result: CartItem[] = JSON.parse(responseText);

      setCartItems(result);

      const totalCalculado = result.reduce(
        (acc, item) =>
          acc + Number(item.product.price) * item.quantity,
        0
      );

      onTotalChange(totalCalculado);
    } catch (err) {
      console.error("Erro ao carregar carrinho:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Erro ao conectar com o servidor."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (loading) {
    return <p className="ml-[95px]">Carregando carrinho...</p>;
  }

  if (error) {
    return <p className="ml-[95px] text-red-500">{error}</p>;
  }

  return (
    <div className="ml-[95px] flex flex-col gap-4">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex p-4 rounded-lg shadow-sm bg-white items-center"
          >
            <img
              src={
                item.product.images[0]?.imageUrl ??
                "/placeholder.png"
              }
              alt={item.product.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="ml-4 flex-1">
              <h3 className="text-lg font-bold text-gray-800">
                {item.product.name}
              </h3>

              <p className="text-gray-500">
                Quantidade: {item.quantity}
              </p>

              <span className="text-blue-600 font-semibold">
                R${" "}
                {(
                  Number(item.product.price) * item.quantity
                ).toFixed(2)}
              </span>

              <CartRemoveButton
                productId={item.productId}
                loadCart={loadCart}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          O carrinho está vazio.
        </p>
      )}
    </div>
  );
};

export default CartList;
