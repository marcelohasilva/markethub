import { useNavigate } from "react-router-dom";

interface ButtonCartProps {
  productId: number;
  userId: number;
  storeId: number;
}

const ButtonCart = ({ productId, userId, storeId }: ButtonCartProps) => {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
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
      
        navigate('/carrinho');
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
      className="cursor-pointer bg-white py-4 px-6 rounded text-gray-800 font-semibold border border-gray-300 shadow-md mt-4 hover:bg-gray-50"
    >
      Adicionar ao Carrinho
    </button>
  );
};

export default ButtonCart;