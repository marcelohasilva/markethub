interface RemoveButtonProps {
  cartId: number;
  loadCart: () => void | Promise<void>;
}

const CardCartDelet = ({ cartId, loadCart }: RemoveButtonProps) => {
  const handleDelete = async () => {
  

    try {
      const response = await fetch(
        `http://localhost:8000/cart/${cartId}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (result.success) {
        loadCart(); // 🔁 atualiza o carrinho
      }
    } catch (error) {
      console.error("Erro ao remover produto", error);
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

export default CardCartDelet;
