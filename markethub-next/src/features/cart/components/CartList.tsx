import { useEffect, useState } from "react";
import CartRemoveButton from "./CartRemoveButton";

interface CartItem {
  cart_id: number;
  name: string;
  price: string;
  quantity: number;
  image_url: string | null;
}

interface CartListProps {
  userId: number;
}

const CartList = ({ userId }: CartListProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/cart/${userId}`
      );

      const result = await response.json();

      if (result.success) {
        setCartItems(result.data);
      } else {
        setError(result.message || "Erro ao carregar carrinho");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, [userId]);

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
            key={item.cart_id}
            className="flex p-4 rounded-lg shadow-sm bg-white items-center"
          >
            <img
              src={item.image_url ?? "/placeholder.png"}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="ml-4 flex-1">
              <h3 className="text-lg font-bold text-gray-800">
                {item.name}
              </h3>

              <p className="text-gray-500">
                Quantidade: {item.quantity}
              </p>

              <span className="text-blue-600 font-semibold">
                R$ {(Number(item.price) * item.quantity).toFixed(2)}
              </span>

              <CartRemoveButton
                cartId={item.cart_id}
                loadCart={loadCart}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">O carrinho esta vazio.</p>
      )}
    </div>
  );
};

export default CartList;
