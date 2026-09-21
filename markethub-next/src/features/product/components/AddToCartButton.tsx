

interface ButtonCartProps {
  productId: number;
  userId: number | null;
  storeId: number;
  className?: string;
  label?: string;
}

const ButtonCart = ({ productId, userId, storeId, className, label }: ButtonCartProps) => {

  const handleAddToCart = async () => {
    try {
      if (!userId) {
        alert("Faça login para adicionar ao carrinho.");
        return;
      }

      const response = await fetch('http://localhost:8000/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          store_id: storeId,
          quantity: 1
        }),
      });

      const result = await response.json();

      if (result.success) {
      
      
      } else {
        alert("Erro do servidor: " + result.message);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    
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