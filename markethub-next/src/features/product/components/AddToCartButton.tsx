
interface ButtonCartProps {
  productId: string;
  userId: string | null;
  storeId: number;
  className?: string;
  label?: string;
}

const ButtonCart = ({
  productId,
  userId,
  storeId,
  className,
  label,
}: ButtonCartProps) => {
  const handleAddToCart = async () => {
    try {
      if (!userId) {
        alert("Faça login para adicionar ao carrinho.");
        return;
      }

      const token = localStorage.getItem("api_token");

      if (!token) {
        alert("Sua sessão expirou. Faça login novamente.");
        return;
      }

      const response = await fetch("http://localhost:8000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          store_id: storeId,
          quantity: 1,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Erro ao adicionar ao carrinho.");
      }

      alert("Produto adicionado ao carrinho!");
    } catch (error) {
      console.error("Erro na requisição:", error);

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
