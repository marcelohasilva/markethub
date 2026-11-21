
"use client";

interface ButtonCartProps {
  productId: string;
  userId?: string | null;
  storeId?: number;
  className?: string;
  label?: string;
}

const ButtonCart = ({
  productId,
  className,
  label,
}: ButtonCartProps) => {
  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("api_token");

      if (!token) {
        alert("Faça login para adicionar ao carrinho.");
        return;
      }

      const response = await fetch(
        "http://localhost:3000/v1/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId,
          }),
        }
      );

      const result =
        response.status === 204
          ? null
          : await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Erro ao adicionar ao carrinho."
        );
      }

      alert("Produto adicionado ao carrinho!");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Não foi possível adicionar o produto ao carrinho."
      );
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className={
        className ||
        "cursor-pointer bg-white py-4 px-6 rounded text-gray-800 font-semibold border border-gray-300 shadow-md mt-4 transition hover:bg-gray-50 hover:shadow-lg"
      }
    >
      {label || "Adicionar ao carrinho"}
    </button>
  );
};

export default ButtonCart;
