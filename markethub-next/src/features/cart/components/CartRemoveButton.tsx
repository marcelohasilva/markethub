
"use client";

const API_URL = "http://localhost:3000/v1";

interface RemoveButtonProps {
  productId: string;
  loadCart: () => void | Promise<void>;
}

const CartRemoveButton = ({
  productId,
  loadCart,
}: RemoveButtonProps) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("api_token");

      if (!token) {
        throw new Error("Faça login para remover produtos.");
      }

      const response = await fetch(
        `${API_URL}/carts/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao remover produto do carrinho.");
      }

      await loadCart();
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="ml-4 text-red-500 hover:text-red-700 font-semibold"
    >
      Remover
    </button>
  );
};

export default CartRemoveButton;
